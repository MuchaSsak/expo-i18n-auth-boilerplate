import { zodResolver } from "@hookform/resolvers/zod";
import { Trans, useLingui } from "@lingui/react/macro";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
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
import { Text } from "@/components/ui/text";
import useResetPassword from "@/hooks/auth/useResetPassword";
import { emailSchema } from "@/lib/zodSchemas";

const resetPasswordSchema = z.object({
  email: emailSchema,
});

function ResetPasswordForm() {
  const { t } = useLingui();

  // Initialize the form with React Hook Form and Zod schema resolver
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  // Submit form
  const { mutate: resetPassword, isPending: isPendingResetPassword } =
    useResetPassword();
  function onSubmit(formData: z.output<typeof resetPasswordSchema>) {
    resetPassword(formData.email);
  }

  const isPending = isPendingResetPassword;

  return (
    <View className="gap-6">
      <Card className="shadow-none border-border/0 sm:border-border sm:shadow-sm sm:shadow-black/5">
        <CardHeader>
          <CardTitle className="text-xl text-center sm:text-left">
            <Trans>Forgot password?</Trans>
          </CardTitle>
          <CardDescription className="text-center sm:text-left">
            <Trans>Enter your email to reset your password</Trans>
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-6">
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
                    returnKeyType="send"
                    submitBehavior="submit"
                    onSubmitEditing={handleSubmit(onSubmit)}
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

            {/* Submit */}
            <Button
              disabled={isPending}
              isLoading={isPendingResetPassword}
              className="w-full"
              onPress={handleSubmit(onSubmit)}
              loaderClassName="text-primary-foreground"
            >
              <Text>
                <Trans>Reset your password</Trans>
              </Text>
            </Button>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}

export default ResetPasswordForm;
