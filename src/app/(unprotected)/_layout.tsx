import "@/app/globals.css";
import "react-native-reanimated";

import { Stack } from "expo-router";
import React from "react";

function UnprotectedLayout() {
  return (
    <Stack>
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="reset-password/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="reset-password-sent/[email]"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="update-password/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="confirm-email/[email]"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="register/index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default UnprotectedLayout;
