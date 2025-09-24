import { Trans } from "@lingui/react/macro";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import ResetPasswordForm from "@/components/app/reset-password/ResetPasswordForm";
import { Text } from "@/components/ui/text";

function ResetPasswordPage() {
  return (
    <SafeAreaView>
      <Link href="/">
        <Text className="text-center underline">
          <Trans>Back to / page</Trans>
        </Text>
      </Link>

      <ResetPasswordForm />
    </SafeAreaView>
  );
}

export default ResetPasswordPage;
