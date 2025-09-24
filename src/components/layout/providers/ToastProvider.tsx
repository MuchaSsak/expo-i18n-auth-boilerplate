import React from "react";
import Toast, {
  ErrorToast,
  InfoToast,
  SuccessToast,
  type ToastConfig,
} from "react-native-toast-message";

import { THEME } from "@/lib/theme";

const toastConfig: ToastConfig = {
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{ fontSize: 16, color: THEME.red[900] }}
      text2Style={{ fontSize: 12, color: THEME.red[900] }}
      text2NumberOfLines={2}
      style={{
        borderLeftColor: THEME.red[500],
      }}
    />
  ),

  success: (props) => (
    <SuccessToast
      {...props}
      text1Style={{ fontSize: 16, color: THEME.green[900] }}
      text2Style={{ fontSize: 12, color: THEME.green[900] }}
      text2NumberOfLines={2}
      style={{
        borderLeftColor: THEME.green[500],
      }}
    />
  ),

  info: (props) => (
    <InfoToast
      {...props}
      text1Style={{ fontSize: 16, color: THEME.blue[900] }}
      text2Style={{ fontSize: 12, color: THEME.blue[900] }}
      text2NumberOfLines={2}
      style={{
        borderLeftColor: THEME.blue[500],
      }}
    />
  ),
};

function ToastProvider({ children }: React.PropsWithChildren) {
  return (
    <>
      {children}

      <Toast topOffset={56} visibilityTime={6000} config={toastConfig} />
    </>
  );
}

export default ToastProvider;
