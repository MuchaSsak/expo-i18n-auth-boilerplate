import { useLingui } from "@lingui/react/macro";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

import signUpViaPassword, {
  SignUpViaPasswordParams,
} from "@/services/auth/signUpViaPassword";

function useSignUpViaPassword() {
  const { t } = useLingui();
  const mutation = useMutation({
    mutationKey: ["signUpViaPassword"],
    mutationFn: (params: SignUpViaPasswordParams) => signUpViaPassword(params),

    onError: (error) =>
      Toast.show({
        type: "error",
        text1: t`Couldn't create the account!`,
        text2: error?.message,
      }),

    onSuccess: (_, { email }) => router.push(`/confirm-email/${email}`),
  });

  return mutation;
}

export default useSignUpViaPassword;
