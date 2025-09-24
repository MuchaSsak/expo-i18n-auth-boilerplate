import { zodResolver } from "@hookform/resolvers/zod";
import { msg } from "@lingui/core/macro";
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
import useSignUpViaPassword from "@/hooks/auth/useSignUpViaPassword";
import { isRunningInExpoGo } from "@/lib/constants";
import {
  confirmPasswordSchema,
  emailSchema,
  nameSchema,
  passwordSchema,
} from "@/lib/zodSchemas";

const registerFormSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: msg`Passwords must match`.message,
      path: ["confirmPassword"],
    }
  );

function RegisterForm() {
  const { t } = useLingui();

  // Initialize the form with React Hook Form and Zod schema resolver
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  // Submit form
  const { mutate: signOnViaPassword, isPending: isPendingSignUpViaPassword } =
    useSignUpViaPassword();

  function onSubmit(formData: z.output<typeof registerFormSchema>) {
    signOnViaPassword(formData);
  }

  const isPending = isPendingSignUpViaPassword;

  return (
    <View className="gap-6">
      <Card className="shadow-none border-border/0 sm:border-border sm:shadow-sm sm:shadow-black/5">
        <CardHeader>
          <CardTitle className="text-xl text-center sm:text-left">
            <Trans>Create your account</Trans>
          </CardTitle>
          <CardDescription className="text-center sm:text-left">
            <Trans>Welcome! Please fill in the details to get started.</Trans>
          </CardDescription>
        </CardHeader>

        <CardContent className="gap-6">
          {/* Sign up via password */}
          <View className="gap-6">
            {/* Name */}
            <View className="gap-1.5">
              <Label htmlFor="name">
                <Trans>Name</Trans>
              </Label>

              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, ...field } }) => (
                  <Input
                    {...field}
                    onChangeText={onChange}
                    id="name"
                    placeholder={t`John`}
                    autoComplete="name"
                    autoCapitalize="words"
                    returnKeyType="next"
                    submitBehavior="submit"
                    onSubmitEditing={() => emailInputRef.current?.focus()}
                    editable={!isPending}
                  />
                )}
              />

              {errors.name && (
                <Text variant="small" className="text-destructive">
                  {errors.name.message}
                </Text>
              )}
            </View>

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
                    ref={emailInputRef}
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
              <Label htmlFor="password">
                <Trans>Password</Trans>
              </Label>

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
                    returnKeyType="next"
                    submitBehavior="submit"
                    onSubmitEditing={() =>
                      confirmPasswordInputRef.current?.focus()
                    }
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

            {/* Confirm password */}
            <View className="gap-1.5">
              <Label htmlFor="confirmPassword">
                <Trans>Confirm password</Trans>
              </Label>

              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, ...field } }) => (
                  <Input
                    {...field}
                    onChangeText={onChange}
                    ref={confirmPasswordInputRef}
                    id="confirmPassword"
                    secureTextEntry
                    returnKeyType="send"
                    submitBehavior="submit"
                    onSubmitEditing={handleSubmit(onSubmit)}
                    editable={!isPending}
                  />
                )}
              />

              {errors.confirmPassword && (
                <Text variant="small" className="text-destructive">
                  {errors.confirmPassword.message}
                </Text>
              )}
            </View>

            {/* Submit */}
            <Button
              disabled={isPending}
              isLoading={isPendingSignUpViaPassword}
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
                Already have an account?{" "}
              </Text>
              <Pressable
                disabled={isPending}
                onPress={() => router.push("/login")}
              >
                <Text className="text-sm underline underline-offset-4">
                  Log in
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

export default RegisterForm;
