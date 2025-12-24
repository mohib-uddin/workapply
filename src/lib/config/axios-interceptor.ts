// axios-interceptor.ts
import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { PUBLIC_ENDPOINTS } from "@/lib/constants";
import instance from "@/lib/config/axios-instance";
import tokenService from "@/services/token.service";
let currentAccessToken = "";

export const setCurrentAccessToken = (token: string) => {
    currentAccessToken = token;
};

const requestHandler = (request: InternalAxiosRequestConfig) => {
    if (currentAccessToken) {
        request.headers["Authorization"] = `Bearer ${currentAccessToken}`;
    }
    request.headers["ngrok-skip-browser-warning"] = "69420";
    return request;
};

const responseHandler = (response: AxiosResponse) => {
    response.headers["Authorization"] = `Bearer ${currentAccessToken}`;
    response.headers["ngrok-skip-browser-warning"] = "69420";
    return response;
};

const errorHandler = async (err: any) => {
    const originalConfig = err.config;
    if (
        !PUBLIC_ENDPOINTS.includes(
            originalConfig.url.split("?")[0] || originalConfig.url
        ) &&
        err.response
    ) {
        if (err.response.status === 401 || err.response.status === 403) {
            tokenService.clearStorage();
            currentAccessToken = "";
        }
    }
    return Promise.reject(err);
};

const setup = () => {
    instance.interceptors.request.use(requestHandler, (error) => Promise.reject(error));
    instance.interceptors.response.use(responseHandler, errorHandler);
};

export default setup;