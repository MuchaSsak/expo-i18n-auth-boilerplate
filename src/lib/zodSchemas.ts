import { msg } from "@lingui/core/macro";
import { z } from "zod";

// Name
export const nameSchema = z
  .string(msg`Name is required`.message)
  .min(5, {
    message: msg`Name must be at least 5 characters long`.message,
  })
  .max(50, {
    message: msg`Name must be at max 50 characters long`.message,
  })
  .regex(/^[a-zA-Z\s]*$/, {
    message: msg`Name may only contain letters`.message,
  });

// Email
export const emailSchema = z.email({
  error: msg`Please enter a valid email address`.message,
});

// Password
export const passwordSchema = z
  .string(msg`Password is required`.message)
  .min(12, {
    message: msg`Password must be at least 12 characters long`.message,
  })
  .max(64, { message: msg`Password must be at max 64 characters long`.message })
  .refine((password) => /[A-Z]/.test(password), {
    message: msg`Password must contain at least 1 upper case letter`.message,
  })
  .refine((password) => /[a-z]/.test(password), {
    message: msg`Password must contain at least 1 lower case letter`.message,
  })
  .refine((password) => /[0-9]/.test(password), {
    message: msg`Password must contain at least 1 number`.message,
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: msg`Password must contain at least 1 special character`.message,
  });

// Confirm password
export const confirmPasswordSchema = z.string(
  msg`Confirm password is required`.message
);
