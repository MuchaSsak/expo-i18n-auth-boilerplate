import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import LinguiProvider from "@/components/layout/providers/LinguiProvider";
import ReactNativeReusables from "@/components/layout/providers/ReactNativeReusables";
import TanstackQueryProvider from "@/components/layout/providers/TanstackQueryProvider";
import ThemeProvider from "@/components/layout/providers/ThemeProvider";
import ToastProvider from "@/components/layout/providers/ToastProvider";
import SplashScreenController from "@/components/layout/SplashScreenController";
import AuthProvider from "@/contexts/AuthContext";

function Providers({ children }: React.PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <LinguiProvider>
        <TanstackQueryProvider>
          <ThemeProvider>
            <AuthProvider>
              <ToastProvider>
                <ReactNativeReusables>
                  {children}

                  <SplashScreenController />
                </ReactNativeReusables>
              </ToastProvider>
            </AuthProvider>
          </ThemeProvider>
        </TanstackQueryProvider>
      </LinguiProvider>
    </SafeAreaProvider>
  );
}

export default Providers;
