"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

/**
 * Sign in with email + password.
 * Called from the /admin/login page.
 * Returns a result object — the caller handles redirect on the client side.
 */
export async function signIn(
  email: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password,
  });

  if (error) {
    if (
      error.message.toLowerCase().includes("invalid") ||
      error.message.toLowerCase().includes("credentials")
    ) {
      return { success: false, error: "Incorrect email or password. Please try again." };
    }
    return { success: false, error: error.message };
  }

  return { success: true };
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
