import { useLingui } from "@lingui/react/macro";
import { UserAttributes } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

import updateUser from "@/services/auth/updateUser";

function useUpdatePassword() {
  const { t } = useLingui();

  const mutation = useMutation({
    mutationKey: ["updatePassword"],
    mutationFn: ({
      attributes,
      options,
    }: {
      attributes: UserAttributes;
      options?: { emailRedirectTo?: string };
    }) => updateUser(attributes, options),

    onError: (error) =>
      Toast.show({
        type: "error",
        text1: t`Couldn't update the password!`,
        text2: error?.message,
      }),

    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: t`Your password has been updated!`,
      });
      router.push("/login");
    },
  });

  return mutation;
}

export default useUpdatePassword;
