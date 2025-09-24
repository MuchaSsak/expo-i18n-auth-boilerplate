import { t } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type LanguageLocale } from "@/lib/languages";
import allMessages from "@/locales/allMessages";

const languages = {
  en: () => t`English`,
  pl: () => t`Polish`,
  pseudo: () => t`Pseudo`,
} as const;

function LanguageSwitcher() {
  const { i18n } = useLingui();

  function handleSwitchLanguage(newLocale: LanguageLocale) {
    i18n.loadAndActivate({
      locale: newLocale,
      messages: allMessages[newLocale],
    });
  }

  const currentLanguageLabel = languages[i18n.locale as LanguageLocale]() ?? "";

  return (
    <Select
      value={{
        value: i18n.locale,
        label: currentLanguageLabel,
      }}
      onValueChange={(newLanguage) =>
        handleSwitchLanguage(newLanguage!.value as LanguageLocale)
      }
    >
      <SelectTrigger className="text-foreground">
        <SelectValue placeholder={i18n._("Select language")} />
      </SelectTrigger>

      <SelectContent sideOffset={8}>
        <SelectGroup>
          {Object.keys(languages).map((locale) => {
            return (
              <SelectItem
                value={locale}
                key={locale}
                label={languages[locale as LanguageLocale]() ?? ""}
              />
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageSwitcher;
