import { Trans } from "@lingui/react/macro";
import { Link, Redirect } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import ConfirmEmailCard from "@/components/app/confirm-email/ConfirmEmailCard";
import { Text } from "@/components/ui/text";
import { useAuth } from "@/contexts/AuthContext";

function ConfirmEmailPage() {
  // Redirect is user is already logged in
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Redirect href="/" />;

  return (
    <SafeAreaView>
      <Link href="/">
        <Text className="text-center underline">
          <Trans>Back to / page</Trans>
        </Text>
      </Link>

      <ConfirmEmailCard />
    </SafeAreaView>
  );
}

export default ConfirmEmailPage;
