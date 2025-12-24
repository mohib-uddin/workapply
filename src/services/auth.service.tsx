import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import axios from "@/lib/config/axios-instance";
import {
    emailVerificationTriggerSchema,
    forgetPasswordResponseSchema,
    forgetSchema,
    loginResponseSchema,
    loginSchema,
    registerPayloadSchema,
    resetSchema,
    signupSchema,
} from "@/lib/schema/auth";
import { toast } from "sonner";
import tokenService from "./token.service";

const AuthService = () => {
    const navigate = useNavigate();

    const useHandleRegisterUser = () => {
        function handleRegisterUser(
            data: z.infer<typeof registerPayloadSchema>
        ): Promise<z.infer<typeof loginResponseSchema>> {
            return axios.post("/api/v1/users/register", data).then((res) => res.data);
        }
        const onSuccess = async (res: z.infer<typeof loginResponseSchema>) => {
            toast.success("Signup Successful");
            tokenService.saveLocalAccessToken(res.accessToken);
            navigate("/post-auth");
        };
        const onError = () => {
            toast.error("Email Already Exist.");
        };

        return useMutation({
            mutationFn: handleRegisterUser,
            onError,
            onSuccess,
            retry: 0,
        });
    };

    const useHandleLogin = () => {
        function handleRegisterUser(
            data: z.infer<typeof loginSchema>
        ): Promise<z.infer<typeof loginResponseSchema>> {
            return axios.post("/api/v1/auth", data).then((res) => res.data);
        }
        const onSuccess = async (res: z.infer<typeof loginResponseSchema>) => {
            toast.success("Login Successful");
            tokenService.setUser(res.user);
            tokenService.saveLocalAccessToken(res.accessToken);
            navigate("/post-auth", { replace: true });
        };
        const onError = () => {
            toast.error("Invalid Email & Password");
        };

        return useMutation({
            mutationFn: handleRegisterUser,
            onError,
            onSuccess,
            retry: 0,
        });
    };

    const useHandleForgetPassword = () => {
        function handleForgetPassword(
            data: z.infer<typeof forgetSchema>
        ): Promise<z.infer<typeof forgetPasswordResponseSchema>> {
            return axios
                .post(
                    "/api/v1/users/password/reset/trigger?email=" +
                    data.email +
                    "&redirectUri=" +
                    import.meta.env.VITE_RESET_PASSWORD_URL
                )
                .then((res) => res.data);
        }
        const onSuccess = async (
            res: z.infer<typeof forgetPasswordResponseSchema>
        ) => {
            toast.success("Kindly check your mail to reset password");
        };
        const onError = () => {
            // toast.error(viewError(error.response.data.statusDescription));
        };

        return useMutation({
            mutationFn: handleForgetPassword,
            onError,
            onSuccess,
            retry: 0,
        });
    };

    const useHandleResetPassword = (token: string) => {
        function handleForgetPassword(
            data: z.infer<typeof resetSchema>
        ): Promise<z.infer<typeof forgetPasswordResponseSchema>> {
            return axios
                .post(`/api/v1/users/password/reset?token=${token}`, data)
                .then((res) => res.data);
        }
        const onSuccess = async (
            res: z.infer<typeof forgetPasswordResponseSchema>
        ) => {
            toast.success("Kindly check your mail to reset password");
        };
        const onError = () => {
            // toast.error(viewError(error.response.data.statusDescription));
        };

        return useMutation({
            mutationFn: handleForgetPassword,
            onError,
            onSuccess,
            retry: 0,
        });
    };

    const useHandleEmailVerificationTrigger = () => {
        function handleRegisterUser(
            data: z.infer<typeof emailVerificationTriggerSchema>
        ): Promise<z.infer<typeof emailVerificationTriggerSchema>> {
            return axios
                .post("/api/v1/users/email/verify", data)
                .then((res) => res.data);
        }
        const onSuccess = async () => {
            const searchParams = new URLSearchParams(window.location.search);
            const nextUrl = searchParams.get("next") || "/";
            navigate(`/auth-success?next=${nextUrl}`);
        };
        const onError = () => {
            // toast.error(viewError(error.response.data.statusDescription));
        };

        return useMutation({
            mutationFn: handleRegisterUser,
            onError,
            onSuccess,
            retry: 0,
        });
    };

    return {
        useHandleRegisterUser,
        useHandleLogin,
        useHandleEmailVerificationTrigger,
        useHandleForgetPassword,
        useHandleResetPassword,
    };
};

export default AuthService;
