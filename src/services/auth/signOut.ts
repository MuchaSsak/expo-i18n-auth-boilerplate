import { supabase } from "@/services/supabase/client";

async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default signOut;
