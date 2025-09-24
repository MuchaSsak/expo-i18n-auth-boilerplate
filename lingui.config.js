import { defineConfig } from "@lingui/cli";

import {
  DEFAULT_LANGUAGE,
  isPseudoLocalizationEnabled,
  SUPPORTED_LANGUAGES,
} from "./src/lib/languages";

export default defineConfig({
  sourceLocale: DEFAULT_LANGUAGE,
  pseudoLocale: isPseudoLocalizationEnabled ? "pseudo" : undefined,
  locales: SUPPORTED_LANGUAGES,
  fallbackLocales: {
    default: SUPPORTED_LANGUAGES,
  },
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
});
