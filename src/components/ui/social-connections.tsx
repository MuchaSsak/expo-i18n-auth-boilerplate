import { Trans } from "@lingui/react/macro";
import { View } from "react-native";

import GoogleLogo from "@/components/icons/GoogleLogo";
import { Button, ButtonProps } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import useSignInViaGoogle from "@/hooks/auth/useSignInViaGoogle";
import { isRunningInExpoGo } from "@/lib/constants";

function SocialConnections(props: ButtonProps) {
  const { mutate: signInViaGoogle, isPending: isPendingSignInViaGoogle } =
    useSignInViaGoogle();

  const isPending = isPendingSignInViaGoogle;

  if (isRunningInExpoGo) return; // Google Sign in is not supported on Expo Go
  return (
    <View className="gap-2 sm:flex-row sm:gap-3">
      {/* Google */}
      <Button
        key="oauth_google"
        variant="outline"
        className="sm:flex-1"
        onPress={() => signInViaGoogle()}
        disabled={isPending}
        {...props}
      >
        <Icon className="size-4" as={GoogleLogo} />
        <Text>
          <Trans>Log in via Google</Trans>
        </Text>
      </Button>
    </View>
  );
}

export default SocialConnections;
