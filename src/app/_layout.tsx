import "@/app/globals.css";
import "react-native-reanimated";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

import Providers from "@/components/layout/providers/Providers";
import useAppState from "@/hooks/tanstackQuery/useAppState";
import useOnlineManager from "@/hooks/tanstackQuery/useOnlineManager";
import { onAppStateChange } from "@/services/tanstackQuery/appStateChange";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

function RootLayout() {
  // Tanstack Query
  useOnlineManager();
  useAppState(onAppStateChange);

  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(unprotected)" options={{ headerShown: false }} />
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </Providers>
  );
}

export default RootLayout;
