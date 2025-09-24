import { makeRedirectUri } from "expo-auth-session";

import { supabase } from "@/services/supabase/client";

export type SignUpViaPasswordParams = {
  email: string;
  name: string;
  password: string;
};

async function signUpViaPassword({
  email,
  name,
  password,
}: SignUpViaPasswordParams) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,

      options: {
        emailRedirectTo: makeRedirectUri({ path: "/login" }),
        data: {
          name,
        },
      },
    });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default signUpViaPassword;
