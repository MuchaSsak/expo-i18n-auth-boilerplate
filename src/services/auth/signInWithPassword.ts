import { supabase } from "@/services/supabase/client";

export type SignInWithPasswordParams = {
  email: string;
  password: string;
};

async function signInWithPassword({
  email,
  password,
}: SignInWithPasswordParams) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default signInWithPassword;
