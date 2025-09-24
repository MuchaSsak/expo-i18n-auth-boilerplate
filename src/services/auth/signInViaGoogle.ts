import { t } from "@lingui/core/macro";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

import { supabase } from "@/services/supabase/client";

// This data is safe to store in the code
GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  webClientId:
    "776553462530-japkk5kbmdvkpn68uertcvhfvnt6rvqs.apps.googleusercontent.com",
});

async function signInViaGoogle() {
  try {
    // 1) Get the user's info from Google including their ID token
    await GoogleSignin.hasPlayServices();
    const { data: userInfo } = await GoogleSignin.signIn();

    if (userInfo?.idToken) {
      // 2) Authenticate the user with this token
      const { error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: userInfo.idToken,
      });

      if (error) throw error;
    } else {
      throw new Error(t`No user ID token present`);
    }
  } catch (err: any) {
    switch (err?.code) {
      case statusCodes.SIGN_IN_CANCELLED:
        throw new Error(t`Logging in was cancelled`);
      case statusCodes.IN_PROGRESS:
        throw new Error(t`Logging in was interrupted`);
      case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
        throw new Error(t`Google Play Services are currently not available`);
      default:
        throw new Error(
          t`Something went wrong whilst trying to log in via Google`
        );
    }
  }
}

export default signInViaGoogle;
