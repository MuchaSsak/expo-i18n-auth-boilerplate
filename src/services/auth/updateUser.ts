import { type UserAttributes } from "@supabase/supabase-js";

import { supabase } from "@/services/supabase/client";

async function updatePassword(
  attributes: UserAttributes,
  options?: { emailRedirectTo?: string }
) {
  try {
    const { error } = await supabase.auth.updateUser(attributes, options);

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default updatePassword;
