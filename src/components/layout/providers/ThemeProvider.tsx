import { ThemeProvider as RNThemeProvider } from "@react-navigation/native";
import { useColorScheme as useNativewindColorScheme } from "nativewind";
import React from "react";

import useTheme from "@/hooks/theme/useTheme";
import { NAV_THEME } from "@/lib/theme";

function ThemeProvider({ children }: React.PropsWithChildren) {
  const { theme } = useTheme();

  const { setColorScheme } = useNativewindColorScheme();
  setColorScheme(theme);

  return <RNThemeProvider value={NAV_THEME[theme]}>{children}</RNThemeProvider>;
}

export default ThemeProvider;
