import { DarkTheme, DefaultTheme, type Theme } from "@react-navigation/native";
import TAILWIND_COLORS from "tailwindcss/colors";

export type SupportedTheme = (typeof SUPPORTED_THEMES)[number];
export const SUPPORTED_THEMES = ["light", "dark"] as const;
export const DEFAULT_THEME: SupportedTheme = "light";

export const THEME = {
  /**
   * TailwindCSS colors
   */
  ...TAILWIND_COLORS,

  /**
   * Light theme
   */
  light: {
    background: "hsl(0 0% 100%)",
    foreground: "hsl(0 0% 3.9%)",
    card: "hsl(0 0% 100%)",
    cardForeground: "hsl(0 0% 3.9%)",
    popover: "hsl(0 0% 100%)",
    popoverForeground: "hsl(0 0% 3.9%)",
    primary: "hsl(161, 100%, 42%)",
    primaryForeground: "hsl(0 0% 98%)",
    secondary: "hsl(0 0% 96.1%)",
    secondaryForeground: "hsl(0 0% 9%)",
    muted: "hsl(0 0% 96.1%)",
    mutedForeground: "hsl(0 0% 45.1%)",
    accent: "hsl(0 0% 96.1%)",
    accentForeground: "hsl(0 0% 9%)",
    destructive: "hsl(0 84.2% 60.2%)",
    border: "hsl(0 0% 89.8%)",
    input: "hsl(0 0% 89.8%)",
    ring: "hsl(0 0% 63%)",
    radius: "0.625rem",
    chart1: "hsl(12 76% 61%)",
    chart2: "hsl(173 58% 39%)",
    chart3: "hsl(197 37% 24%)",
    chart4: "hsl(43 74% 66%)",
    chart5: "hsl(27 87% 67%)",
  },

  /**
   * Dark theme
   */
  dark: {
    background: "hsl(0 0% 3.9%)",
    foreground: "hsl(0 0% 98%)",
    card: "hsl(0 0% 3.9%)",
    cardForeground: "hsl(0 0% 98%)",
    popover: "hsl(0 0% 3.9%)",
    popoverForeground: "hsl(0 0% 98%)",
    primary: "hsl(161, 100%, 42%)",
    primaryForeground: "hsl(0 0% 9%)",
    secondary: "hsl(0 0% 14.9%)",
    secondaryForeground: "hsl(0 0% 98%)",
    muted: "hsl(0 0% 14.9%)",
    mutedForeground: "hsl(0 0% 63.9%)",
    accent: "hsl(0 0% 14.9%)",
    accentForeground: "hsl(0 0% 98%)",
    destructive: "hsl(0 70.9% 59.4%)",
    border: "hsl(0 0% 14.9%)",
    input: "hsl(0 0% 14.9%)",
    ring: "hsl(300 0% 45%)",
    radius: "0.625rem",
    chart1: "hsl(220 70% 50%)",
    chart2: "hsl(160 60% 45%)",
    chart3: "hsl(30 80% 55%)",
    chart4: "hsl(280 65% 60%)",
    chart5: "hsl(340 75% 55%)",
  },
};

export const NAV_THEME: Record<SupportedTheme, Theme> = {
  /**
   * Light navigation theme
   */
  light: {
    ...DefaultTheme,
    colors: {
      background: THEME.light.background,
      border: THEME.light.border,
      card: THEME.light.card,
      notification: THEME.light.destructive,
      primary: THEME.light.primary,
      text: THEME.light.foreground,
    },
  },

  /**
   * Dark navigation theme
   */
  dark: {
    ...DarkTheme,
    colors: {
      background: THEME.dark.background,
      border: THEME.dark.border,
      card: THEME.dark.card,
      notification: THEME.dark.destructive,
      primary: THEME.dark.primary,
      text: THEME.dark.foreground,
    },
  },
};
