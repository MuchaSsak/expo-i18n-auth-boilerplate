import { Platform, TextInput, type TextInputProps } from "react-native";

import useTheme from "@/hooks/theme/useTheme";
import { THEME } from "@/lib/theme";
import { cn } from "@/lib/utils";

function Input({
  className,
  placeholder,
  ...props
}: TextInputProps & React.RefAttributes<TextInput>) {
  const { theme } = useTheme();

  return (
    <TextInput
      cursorColor={THEME[theme].primary}
      selectionColor={THEME[theme].primary}
      className={cn(
        "dark:bg-input/30 border-input bg-background text-foreground flex h-10 w-full min-w-0 flex-row items-center rounded-md border px-3 py-1 text-base leading-5 shadow-sm shadow-black/5 sm:h-9",
        props.editable === false &&
          cn("opacity-25 select-none pointer-events-none"),
        Platform.select({
          web: cn(
            "selection:bg-primary placeholder:text-muted-foreground selection:text-primary-foreground outline-none transition-[color,box-shadow] md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
          ),
          native: "placeholder:text-muted-foreground/50",
        }),
        className
      )}
      {...props}
      placeholder={props.editable ? placeholder : undefined}
    />
  );
}

export { Input };
