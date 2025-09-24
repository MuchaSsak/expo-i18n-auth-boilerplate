import { SplashScreen } from "expo-router";

import { useAuth } from "@/contexts/AuthContext";

// Create a SplashScreenController component to display the Expo SplashScreen while the authentication session is loading
// https://supabase.com/docs/guides/auth/quickstarts/with-expo-react-native-social-auth?queryGroups=auth-store&auth-store=async-storage#create-the-splashscreencontroller
SplashScreen.preventAutoHideAsync();

function SplashScreenController() {
  const { isLoadingSession } = useAuth();

  if (!isLoadingSession) {
    SplashScreen.hideAsync();
  }

  return null;
}

export default SplashScreenController;
