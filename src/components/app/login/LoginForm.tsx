import { zodResolver } from "@hookform/resolvers/zod";
import { Trans, useLingui } from "@lingui/react/macro";
import { router } from "expo-router";
import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, type TextInput, View } from "react-native";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import SocialConnections from "@/components/ui/social-connections";
import { Text } from "@/components/ui/text";
import useSignInWithPassword from "@/hooks/auth/useSignInWithPassword";
import { isRunningInExpoGo } from "@/lib/constants";
import { emailSchema, passwordSchema } from "@/lib/zodSchemas";

const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

function LoginForm() {
  const { t } = useLingui();

  // Initialize the form with React Hook Form and Zod schema resolver
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const passwordInputRef = useRef<TextInput>(null);

  // Submit form
  const { mutate: signInWithPassword, isPending: isPendingSignInWithPassword } =
    useSignInWithPassword();
  function onSubmit(formData: z.output<typeof loginFormSchema>) {
    signInWithPassword(formData);
  }

  const isPending = isPendingSignInWithPassword;

  return (
    <View className="gap-6">
      <Card className="shadow-none border-border/0 sm:border-border sm:shadow-sm sm:shadow-black/5">
        <CardHeader>
          <CardTitle className="text-xl text-center sm:text-left">
            <Trans>Log in to your app</Trans>
          </CardTitle>
          <CardDescription className="text-center sm:text-left">
            <Trans>Welcome back! Please log in to continue</Trans>
          </CardDescription>
        </CardHeader>

        <CardContent className="gap-6">
          {/* Sign in with password */}
          <View className="gap-6">
            {/* Email */}
            <View className="gap-1.5">
              <Label htmlFor="email">
                <Trans>Email</Trans>
              </Label>

              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, ...field } }) => (
                  <Input
                    {...field}
                    onChangeText={onChange}
                    id="email"
                    placeholder={t`john.doe@example.com`}
                    keyboardType="email-address"
                    autoComplete="email"
                    autoCapitalize="none"
                    returnKeyType="next"
                    submitBehavior="submit"
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                    editable={!isPending}
                  />
                )}
              />

              {errors.email && (
                <Text variant="small" className="text-destructive">
                  {errors.email.message}
                </Text>
              )}
            </View>

            {/* Password */}
            <View className="gap-1.5">
              <View className="flex-row items-center">
                <Label htmlFor="password">
                  <Trans>Password</Trans>
                </Label>

                {/* Forgot password link */}
                <Button
                  variant="link"
                  size="sm"
                  className="h-4 px-1 py-0 ml-auto web:h-fit sm:h-4"
                  onPress={() => router.push("/reset-password")}
                  disabled={isPending}
                >
                  <Text className="font-normal leading-4">
                    <Trans>Forgot your password?</Trans>
                  </Text>
                </Button>
              </View>

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, ...field } }) => (
                  <Input
                    {...field}
                    onChangeText={onChange}
                    ref={passwordInputRef}
                    id="password"
                    secureTextEntry
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(onSubmit)}
                    editable={!isPending}
                  />
                )}
              />

              {errors.password && (
                <Text variant="small" className="text-destructive">
                  {errors.password.message}
                </Text>
              )}
            </View>

            {/* Submit */}
            <Button
              disabled={isPending}
              isLoading={isPendingSignInWithPassword}
              className="w-full"
              onPress={handleSubmit(onSubmit)}
              loaderClassName="text-primary-foreground"
            >
              <Text>
                <Trans>Continue</Trans>
              </Text>
            </Button>
          </View>

          {/* Register link */}
          <View className="flex-row items-center justify-center">
            <Trans>
              <Text className="text-sm text-center">
                Don&apos;t have an account?{" "}
              </Text>
              <Pressable
                disabled={isPending}
                onPress={() => router.push("/register")}
              >
                <Text className="text-sm underline underline-offset-4">
                  Register now
                </Text>
              </Pressable>
            </Trans>
          </View>

          {/* Social connections */}
          {!isRunningInExpoGo && (
            <>
              <View className="flex-row items-center">
                <Separator className="flex-1" />
                <Text className="px-4 text-sm text-muted-foreground">
                  <Trans>or</Trans>
                </Text>
                <Separator className="flex-1" />
              </View>
              <SocialConnections disabled={isPending} />
            </>
          )}
        </CardContent>
      </Card>
    </View>
  );
}

export default LoginForm;
