import AsyncStorage from "@react-native-async-storage/async-storage";

import { type SupportedTheme } from "@/lib/theme";

async function saveTheme(newTheme: SupportedTheme) {
  try {
    await AsyncStorage.setItem("theme", newTheme);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default saveTheme;
