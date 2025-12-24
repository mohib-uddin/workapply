import { Navigate, Outlet } from "react-router-dom";
import tokenService from "@/services/token.service";

/**
 * ProtectedRoute - Only accessible for authenticated users.
 * Redirects to /login if not authenticated.
 */
export const ProtectedRoute = () => {
    const token = tokenService.getLocalAccessToken();

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

/**
 * PublicRoute - Only accessible for non-authenticated users (e.g., Login/Signup).
 * Redirects to /dashboard if already authenticated.
 */
export const PublicRoute = () => {
    const token = tokenService.getLocalAccessToken();

    if (token) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
};
