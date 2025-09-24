import AsyncStorage from "@react-native-async-storage/async-storage";

import { DEFAULT_THEME, SupportedTheme } from "@/lib/theme";

async function loadTheme() {
  try {
    const loadedTheme = (await AsyncStorage.getItem(
      "theme"
    )) as SupportedTheme | null;

    if (loadedTheme) return loadedTheme;
    else return DEFAULT_THEME;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default loadTheme;
