import "@/app/globals.css";
import "react-native-reanimated";

import { Redirect, Stack } from "expo-router";
import React from "react";

import { useAuth } from "@/contexts/AuthContext";

export const unstable_settings = {
  anchor: "(tabs)",
};

function ProtectedLayout() {
  // Protect routes
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Redirect href="/login" />;

  return (
    <Stack>
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}

export default ProtectedLayout;
