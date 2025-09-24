import { useColorScheme as useNativewindColorScheme } from "nativewind";
import { useEffect, useState } from "react";

import useLoadTheme from "@/hooks/theme/useLoadTheme";
import useSaveTheme from "@/hooks/theme/useSaveTheme";
import { DEFAULT_THEME, type SupportedTheme } from "@/lib/theme";
import { queryClient } from "@/services/tanstackQuery/client";

type ThemeObject = {
  theme: SupportedTheme;
  setTheme: (newTheme: SupportedTheme) => void;
};

function useTheme(): ThemeObject {
  /**
   * To support static rendering, this value needs to be re-calculated on the client side for web
   */
  const [, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const nativewindColorScheme = useNativewindColorScheme();
  const { data: loadedTheme } = useLoadTheme();
  const { mutate: saveTheme } = useSaveTheme();

  function handleSetTheme(newTheme: SupportedTheme) {
    // Save theme into AsyncStorage
    saveTheme(newTheme);

    // Update retrieved value from AsyncStorage optimistically
    queryClient.setQueryData(["loadTheme"], newTheme);

    // Set the new color scheme to Nativewind
    nativewindColorScheme.setColorScheme(newTheme);
  }

  return {
    setTheme: handleSetTheme,
    theme: loadedTheme ?? nativewindColorScheme.colorScheme ?? DEFAULT_THEME,
  };
}

export default useTheme;
