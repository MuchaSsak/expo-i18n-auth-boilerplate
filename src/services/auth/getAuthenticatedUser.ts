import { supabase } from "@/services/supabase/client";

async function getAuthenticatedUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw error;

  return data;
}

export default getAuthenticatedUser;
