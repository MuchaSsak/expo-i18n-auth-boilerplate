import { focusManager } from "@tanstack/react-query";
import { type AppStateStatus, Platform } from "react-native";

export function onAppStateChange(status: AppStateStatus) {
  // Tanstack Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}
