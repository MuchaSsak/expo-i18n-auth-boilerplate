import { t } from "@lingui/core/macro";
import { useLingui } from "@lingui/react/macro";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useTheme from "@/hooks/theme/useTheme";
import { SupportedTheme } from "@/lib/theme";

const themes = {
  dark: () => t`Dark`,
  light: () => t`Light`,
};

function ThemeSwitcher() {
  const { i18n } = useLingui();
  const { setTheme, theme } = useTheme();

  function handleSwitchTheme(newTheme: SupportedTheme) {
    setTheme(newTheme);
  }

  const currentThemeLabel = themes[theme as SupportedTheme]() ?? "";

  return (
    <Select
      value={{ value: theme, label: currentThemeLabel }}
      onValueChange={(newTheme) =>
        handleSwitchTheme(newTheme!.value as SupportedTheme)
      }
    >
      <SelectTrigger className="text-foreground">
        <SelectValue placeholder={i18n._("Select theme")} />
      </SelectTrigger>

      <SelectContent sideOffset={8}>
        <SelectGroup>
          {Object.keys(themes).map((supportedTheme) => {
            return (
              <SelectItem
                value={supportedTheme}
                key={supportedTheme}
                label={themes[supportedTheme as SupportedTheme]() ?? ""}
              />
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default ThemeSwitcher;
