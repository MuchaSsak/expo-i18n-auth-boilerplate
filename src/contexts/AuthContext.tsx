import type { Session } from "@supabase/supabase-js";
import { useURL } from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import React, { createContext, useContext, useEffect, useState } from "react";

import useGetSession from "@/hooks/auth/useGetSession";
import createSessionFromURL from "@/services/auth/createSessionFromURL";
import { supabase } from "@/services/supabase/client";

/**
 * Types
 */
type AuthContextValue = {
  session?: Session | null;
  isLoadingSession: boolean;
  isAuthenticated: boolean;
};

/**
 * Initialize context
 */
const AuthContext = createContext<AuthContextValue>({
  session: undefined,
  isLoadingSession: true,
  isAuthenticated: false,
});

/**
 * Provider
 */
export default function AuthProvider({ children }: React.PropsWithChildren) {
  const { data, isLoading: isLoadingSession } = useGetSession();
  const [session, setSession] = useState<Session | undefined | null>(
    () => data?.session
  );

  // Required for web
  WebBrowser.maybeCompleteAuthSession();

  // Handle linking into this RN app from an email app.
  const url = useURL(); // I Have Wasted I Do Not Know How Many Hours Just Because I Have Been Using useLinkingURL Which The Documentation Said To Do So But Turns Out This Deprecated Hook Is The Solution To My Night Problems. Why.
  if (url) createSessionFromURL(url);

  // Fetch the session once, and subscribe to auth state changes
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        isLoadingSession,
        isAuthenticated: session !== undefined && session !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth was used outside of AuthProvider!");
  return context;
}
