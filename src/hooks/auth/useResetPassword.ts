import { useLingui } from "@lingui/react/macro";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

import resetPassword from "@/services/auth/resetPassword";

function useResetPassword() {
  const { t } = useLingui();
  const mutation = useMutation({
    mutationKey: ["resetPassword"],
    mutationFn: (email: string) => resetPassword(email),

    onError: (error) =>
      Toast.show({
        type: "error",
        text1: t`Couldn't reset the password!`,
        text2: error?.message,
      }),

    onSuccess: (_, email) => {
      Toast.show({
        type: "success",
        text1: t`Sent a password reset request!`,
      });

      router.push(`/reset-password-sent/${email}`);
    },
  });

  return mutation;
}

export default useResetPassword;
