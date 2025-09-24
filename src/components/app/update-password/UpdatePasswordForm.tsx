import { zodResolver } from "@hookform/resolvers/zod";
import { msg } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput, View } from "react-native";
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
import useUpdatePassword from "@/hooks/auth/useUpdatePassword";
import { confirmPasswordSchema, passwordSchema } from "@/lib/zodSchemas";

const updatePasswordSchema = z
  .object({
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

function UpdatePasswordForm() {
  // Initialize the form with React Hook Form and Zod schema resolver
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updatePasswordSchema),
  });

  const confirmPasswordInputRef = useRef<TextInput>(null);

  const { mutate: updatePassword, isPending: isPendingUpdatePassword } =
    useUpdatePassword();
  function onSubmit(formData: z.output<typeof updatePasswordSchema>) {
    updatePassword({ attributes: { password: formData.password } });
  }

  const isPending = isPendingUpdatePassword;

  return (
    <View className="gap-6">
      <Card className="shadow-none border-border/0 sm:border-border sm:shadow-sm sm:shadow-black/5">
        <CardHeader>
          <CardTitle className="text-xl text-center sm:text-left">
            <Trans>Update your password</Trans>
          </CardTitle>
          <CardDescription className="text-center sm:text-left">
            <Trans>Enter a new password in order to change it</Trans>
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-6">
          <View className="gap-6">
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
              isLoading={isPendingUpdatePassword}
              className="w-full"
              onPress={handleSubmit(onSubmit)}
              loaderClassName="text-primary-foreground"
            >
              <Text>
                <Trans>Update password</Trans>
              </Text>
            </Button>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}

export default UpdatePasswordForm;
