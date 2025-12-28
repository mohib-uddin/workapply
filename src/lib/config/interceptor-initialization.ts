// InterceptorInitialization.tsx
// This file is kept for backward compatibility but is no longer needed
// The interceptor now automatically gets tokens from tokenService
// You can remove this file if it's not used anywhere

import setup from "@/lib/config/axios-interceptor";

export default function InterceptorInitialization() {
  // Setup interceptors once
  setup();
  return null;
}