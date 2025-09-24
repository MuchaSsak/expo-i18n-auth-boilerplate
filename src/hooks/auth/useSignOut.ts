import { useLingui } from "@lingui/react/macro";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

import signOut from "@/services/auth/signOut";
import { queryClient } from "@/services/tanstackQuery/client";

function useSignOut() {
  const { t } = useLingui();
  const mutation = useMutation({
    mutationKey: ["signOut"],
    mutationFn: signOut,

    onError: (error) =>
      Toast.show({
        type: "error",
        text1: t`Couldn't log out!`,
        text2: error?.message,
      }),

    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: t`Logged out successfully!`,
      });

      // Update authenticated user
      queryClient.invalidateQueries({ queryKey: ["getAuthenticatedUser"] });

      // Push to /login
      router.push("/login");
    },
  });

  return mutation;
}

export default useSignOut;
