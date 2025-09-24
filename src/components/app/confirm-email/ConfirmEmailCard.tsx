import { Trans } from "@lingui/react/macro";
import { makeRedirectUri } from "expo-auth-session";
import * as Linking from "expo-linking";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import useResendEmail from "@/hooks/auth/useResendEmail";

function ConfirmEmailCard() {
  const { email } = useLocalSearchParams<{ email: string }>();

  const { mutate: resendEmail, isPending: isPendingResendEmail } =
    useResendEmail();

  function handleResendEmail() {
    resendEmail({
      email,
      type: "signup",
      options: {
        emailRedirectTo: makeRedirectUri({ path: "/login" }),
      },
    });
  }

  const isPending = isPendingResendEmail;

  return (
    <View className="gap-6">
      <Card className="pb-4 shadow-none border-border/0 sm:border-border sm:shadow-sm sm:shadow-black/5">
        <CardHeader>
          <CardTitle className="text-xl text-center sm:text-left">
            <Trans>Confirm your email</Trans>
          </CardTitle>
          <CardDescription className="text-center sm:text-left">
            Enter the link sent to {email}
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-6">
          <View className="gap-6">
            <View className="gap-3">
              <Button
                className="w-full"
                disabled={isPending}
                onPress={() => Linking.openURL(`mailto:${email}`)}
              >
                <Text>
                  <Trans>Check inbox</Trans>
                </Text>
              </Button>

              <Button
                disabled={isPending}
                isLoading={isPendingResendEmail}
                variant="secondary"
                className="w-full"
                onPress={handleResendEmail}
              >
                <Text>
                  <Trans>Resend email</Trans>
                </Text>
              </Button>
            </View>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}

export default ConfirmEmailCard;
