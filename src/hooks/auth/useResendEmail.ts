import { useLingui } from "@lingui/react/macro";
import type { ResendParams } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

import resendEmail from "@/services/auth/resendEmail";

function useResendEmail() {
  const { t } = useLingui();
  const mutation = useMutation({
    mutationKey: ["resendEmail"],
    mutationFn: (credentials: ResendParams) => resendEmail(credentials),

    onError: (error) =>
      Toast.show({
        type: "error",
        text1: t`Couldn't resend the mail!`,
        text2: error?.message,
      }),

    onSuccess: () =>
      Toast.show({
        type: "success",
        text1: t`Successfully resent the mail!`,
      }),
  });

  return mutation;
}

export default useResendEmail;
