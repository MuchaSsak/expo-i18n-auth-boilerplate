import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import React from "react";

import { DEFAULT_LANGUAGE } from "@/lib/languages";
import allMessages from "@/locales/allMessages";

// Load default language
i18n.loadAndActivate({
  locale: DEFAULT_LANGUAGE,
  messages: allMessages[DEFAULT_LANGUAGE],
});

function LinguiProvider({ children }: React.PropsWithChildren) {
  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}

export default LinguiProvider;
