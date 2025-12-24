// InterceptorInitialization.tsx
"use client";

import { useEffect } from "react";
import setup, { setCurrentAccessToken } from "@/lib/config/axios-interceptor";
import tokenService from "@/services/token.service";

export default function InterceptorInitialization({
  accessToken,
}: {
  accessToken: string;
}) {
  useEffect(() => {
    setup();
  }, []);

  useEffect(() => {
    // Use the provided accessToken or fallback to the one from TokenService
    const token = accessToken || tokenService.getLocalAccessToken();
    if (token) {
      setCurrentAccessToken(token);
    }
  }, [accessToken]);

  return null;
}