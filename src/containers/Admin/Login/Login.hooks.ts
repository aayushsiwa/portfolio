import { useState } from "react";
import { z } from "zod";
import { createClient } from "@/lib/supabase/client";

export const useLogin = () => {
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  /**
   * Handle submission of the login form: validate inputs, attempt authentication, update loading/errors state, and redirect on success.
   *
   * Validates the form's email and password against the login schema and, on validation failure, sets field-specific errors. On validation success, clears errors, sets the loading state while calling Supabase to sign in with trimmed credentials, then clears loading. If authentication succeeds, navigates to "/admin"; if it fails, sets a general error message.
   *
   * @param e - The form submission event for the login form
   */
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[String(err.path[0])] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password.trim(),
    });

    setLoading(false);

    if (!error) {
      window.location.href = "/admin";
    } else {
      setErrors({ general: error.message });
    }
  }

  return { handleLogin, errors, loading };
};
