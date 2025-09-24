import { Trans } from "@lingui/react/macro";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import UpdatePasswordForm from "@/components/app/update-password/UpdatePasswordForm";
import { Text } from "@/components/ui/text";

function UpdatePasswordPage() {
  return (
    <SafeAreaView>
      <Link href="/">
        <Text className="text-center underline">
          <Trans>Back to / page</Trans>
        </Text>
      </Link>

      <UpdatePasswordForm />
    </SafeAreaView>
  );
}

export default UpdatePasswordPage;
