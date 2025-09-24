export type LanguageLocale = (typeof SUPPORTED_LANGUAGES)[number];
export const SUPPORTED_LANGUAGES = ["en", "pl", "pseudo"] as const;
export const DEFAULT_LANGUAGE: LanguageLocale = "en";

export const isPseudoLocalizationEnabled = (
  SUPPORTED_LANGUAGES as unknown as string[]
).includes("pseudo");
