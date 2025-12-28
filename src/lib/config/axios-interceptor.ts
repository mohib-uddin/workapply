// axios-interceptor.ts
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { PUBLIC_ENDPOINTS } from "@/lib/constants";
import instance from "@/lib/config/axios-instance";
import tokenService from "@/services/token.service";

/**
 * Check if an endpoint is a public/auth endpoint that doesn't require authentication
 */
const isPublicEndpoint = (url: string): boolean => {
  if (!url) return false;
  
  // Remove query parameters for comparison
  const endpoint = url.split("?")[0];
  
  // Check against PUBLIC_ENDPOINTS list
  if (PUBLIC_ENDPOINTS.includes(endpoint)) {
    return true;
  }
  
  // Check for common auth endpoint patterns
  const authPatterns = [
    "/api/v1/auth",
    "/api/v1/users/register",
    "/api/v1/users/password/reset",
    "/api/v1/users/email/verify",
  ];
  
  return authPatterns.some((pattern) => endpoint.startsWith(pattern));
};

/**
 * Request interceptor - Adds Authorization header for non-public endpoints
 */
const requestHandler = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  // Get the endpoint path (relative URL)
  const endpoint = config.url || "";
  
  // Only add token for non-public endpoints
  if (!isPublicEndpoint(endpoint)) {
    const accessToken = tokenService.getLocalAccessToken();
    
    if (accessToken) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
  }
  
  // Add ngrok skip header if needed
  config.headers = config.headers || {};
  config.headers["ngrok-skip-browser-warning"] = "69420";
  
  return config;
};

/**
 * Response interceptor - Handles successful responses
 */
const responseHandler = (response: AxiosResponse): AxiosResponse => {
  return response;
};

/**
 * Error interceptor - Handles errors, especially 401/403 for token expiration
 */
const errorHandler = async (error: AxiosError): Promise<never> => {
  const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
  
  // If there's no response, it's a network error
  if (!error.response) {
    return Promise.reject(error);
  }
  
  const status = error.response.status;
  const endpoint = originalRequest?.url || "";
  
  // Handle unauthorized/forbidden errors for protected endpoints
  if ((status === 401 || status === 403) && !isPublicEndpoint(endpoint)) {
    // Clear tokens and redirect to login if not already retrying
    if (!originalRequest._retry) {
      tokenService.clearStorage();
      
      // Redirect to login page if we're in the browser
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
  }
  
  return Promise.reject(error);
};

/**
 * Setup axios interceptors
 */
const setup = () => {
  // Request interceptor
  instance.interceptors.request.use(
    requestHandler,
    (error) => Promise.reject(error)
  );
  
  // Response interceptor
  instance.interceptors.response.use(
    responseHandler,
    errorHandler
  );
};

export default setup;