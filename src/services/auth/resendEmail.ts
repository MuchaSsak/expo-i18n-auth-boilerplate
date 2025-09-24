import type { ResendParams } from "@supabase/supabase-js";

import { supabase } from "@/services/supabase/client";

async function resendEmail(credentials: ResendParams) {
  try {
    const { error } = await supabase.auth.resend(credentials);

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default resendEmail;
