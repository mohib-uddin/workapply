import { z } from "zod";
import { auditSchema } from "@/lib/schema/index";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  termsAccepted: z.boolean().refine((val) => val, {
    message: "You must accept the terms and conditions to proceed.",
  }),
  password: z.string(),
  confirmPassword: z.string(),
});

export const registerPayloadSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});
export const forgetSchema = z.object({
  email: z.string().email(),
  redirectUri: z.string(),
});
export const resetSchema = z.object({
  password: z.string(),
  confirmPassword: z.string(),
});

export const userRoleSchema = z.object({
  id: z.string(),
  name: z.string(),
  permissions: z.array(z.string()),
  timestamp: auditSchema,
});

export const userSchema = z.object({
  id: z.number(),
  sourceId: z.string(),
  name: z.string(),
  email: z.string(),
  verified: z.boolean(),
  profile: z.string(),
  audit: auditSchema,
  resumeUploaded:z.boolean()
});

export const loginResponseSchema = z.object({
  accessToken: z.string(),
  user: userSchema,
});
export const forgetPasswordResponseSchema = z.object({});

export const emailVerificationTriggerSchema = z.object({
  email: z.string().email(),
  redirectUri: z.string(),
  failureUri: z.string(),
});