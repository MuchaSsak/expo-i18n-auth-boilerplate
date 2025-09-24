import { Trans } from "@lingui/react/macro";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import ResetPasswordSentCard from "@/components/app/reset-password-sent/ResetPasswordSentCard";
import { Text } from "@/components/ui/text";

function ResetPasswordSent() {
  return (
    <SafeAreaView>
      <Link href="/">
        <Text className="text-center underline">
          <Trans>Back to / page</Trans>
        </Text>
      </Link>

      <ResetPasswordSentCard />
    </SafeAreaView>
  );
}

export default ResetPasswordSent;
