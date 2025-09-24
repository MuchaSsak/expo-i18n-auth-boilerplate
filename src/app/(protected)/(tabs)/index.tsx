import { Trans } from "@lingui/react/macro";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { Text } from "@/components/ui/text";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import useSignOut from "@/hooks/auth/useSignOut";

function HomePage() {
  const { mutate: signOut, isPending: isPendingSignOut } = useSignOut();

  function handleSignOut() {
    signOut();
  }

  const isPending = isPendingSignOut;

  return (
    <View className="items-center justify-center flex-1 px-4 bg-background">
      <Text variant="muted" className="pb-2 text-sm italic">
        This text is not internationalized for comparison
      </Text>
      <Text
        variant="h1"
        className="px-2 font-bold rounded-md bg-primary text-primary-foreground"
      >
        <Trans>Welcome to Expo!</Trans>
      </Text>
      <Text variant="p" className="pb-2 text-center">
        <Trans>
          This boilerplate includes a simple authentication & authorization with
          automatic redirects via Supabase and Tanstack Query.
        </Trans>
      </Text>

      <Button disabled={isPending} variant="secondary">
        <Trans>
          <Text>Button from</Text>
          <Text
            variant="code"
            className="p-0 text-blue-500 dark:text-purple-400"
          >
            React Native Reusables!
          </Text>
        </Trans>
      </Button>

      <View className="flex-row gap-4 py-4">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </View>

      <Link disabled={isPending} href="/login">
        <Text className="text-center underline">
          <Trans>Go to the /login page</Trans>
        </Text>
      </Link>
      <Link disabled={isPending} href="/register">
        <Text className="text-center underline">
          <Trans>Go to the /register page</Trans>
        </Text>
      </Link>
      <Link disabled={isPending} href="/reset-password">
        <Text className="text-center underline">
          <Trans>Go to the /reset-password page</Trans>
        </Text>
      </Link>
      <Link disabled={isPending} href="/update-password">
        <Text className="text-center underline">
          <Trans>Go to the /update-password page</Trans>
        </Text>
      </Link>
      <Link disabled={isPending} href="/confirm-email/john.doe@example.com">
        <Text className="text-center underline">
          <Trans>Go to the /confirm-email/john.doe@example.com page</Trans>
        </Text>
      </Link>

      <Button
        disabled={isPending}
        isLoading={isPendingSignOut}
        onPress={handleSignOut}
        variant="secondary"
        className="mt-4"
      >
        <Text>
          <Trans>Log out</Trans>
        </Text>
      </Button>
    </View>
  );
}

export default HomePage;
