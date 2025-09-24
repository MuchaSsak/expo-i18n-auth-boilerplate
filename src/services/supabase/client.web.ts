import "react-native-url-polyfill/auto";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

import {
  SUPABASE_PUBLIC_ANON_KEY,
  SUPABASE_PUBLIC_URL,
} from "@/services/supabase/config";

const ExpoWebSecureStoreAdapter = {
  getItem: (key: string) => {
    return AsyncStorage.getItem(key);
  },
  setItem: (key: string, value: string) => {
    return AsyncStorage.setItem(key, value);
  },
  removeItem: (key: string) => {
    return AsyncStorage.removeItem(key);
  },
};

export const supabase = createClient(
  SUPABASE_PUBLIC_URL,
  SUPABASE_PUBLIC_ANON_KEY,
  {
    auth: {
      storage: ExpoWebSecureStoreAdapter,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
