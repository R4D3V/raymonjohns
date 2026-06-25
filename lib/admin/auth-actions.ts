"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

/**
 * Sign in with email + password.
 * Called from the /admin/login page.
 * Throws a plain string error message on failure so the form can display it.
 */
export async function signIn(
  email: string,
  password: string,
  next = "/admin/products"
): Promise<void> {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password,
  });

  if (error) {
    // Surface a friendly message — don't leak "Invalid login credentials" etc.
    if (
      error.message.toLowerCase().includes("invalid") ||
      error.message.toLowerCase().includes("credentials")
    ) {
      throw new Error("Incorrect email or password. Please try again.");
    }
    throw new Error(error.message);
  }

  redirect(next);
}

/**
 * Sign out the current user and redirect to the login page.
 * Safe to call from a Server Action (form submit or button).
 */
export async function signOut(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
