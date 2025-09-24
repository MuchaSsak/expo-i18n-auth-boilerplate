import { Trans } from "@lingui/react/macro";
import { Link, Redirect } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import LoginForm from "@/components/app/login/LoginForm";
import { Text } from "@/components/ui/text";
import { useAuth } from "@/contexts/AuthContext";

function LoginPage() {
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

      <LoginForm />
    </SafeAreaView>
  );
}

export default LoginPage;
