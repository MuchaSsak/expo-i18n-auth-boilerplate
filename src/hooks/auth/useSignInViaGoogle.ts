import { useLingui } from "@lingui/react/macro";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

import signInViaGoogle from "@/services/auth/signInViaGoogle";
import { queryClient } from "@/services/tanstackQuery/client";

function useSignInViaGoogle() {
  const { t } = useLingui();
  const mutation = useMutation({
    mutationKey: ["signInViaGoogle"],
    mutationFn: signInViaGoogle,

    onError: (error) =>
      Toast.show({
        type: "error",
        text1: t`Couldn't sign in!`,
        text2: error?.message,
      }),

    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: t`Logged in successfully!`,
      });

      // Update authenticated user
      queryClient.invalidateQueries({ queryKey: ["getAuthenticatedUser"] });

      // Push to home
      router.push("/");
    },
  });

  return mutation;
}

export default useSignInViaGoogle;
