import { supabase } from "@/services/supabase/client";

async function getSession() {
  const { data, error } = await supabase.auth.getSession();

  if (error) throw error;

  return data;
}

export default getSession;
