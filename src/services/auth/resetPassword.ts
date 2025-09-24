import { makeRedirectUri } from "expo-auth-session";

import { supabase } from "@/services/supabase/client";

async function resetPassword(email: string) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: makeRedirectUri({ path: "/update-password" }),
    });

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default resetPassword;
