import { useMutation } from "@tanstack/react-query";

import { SupportedTheme } from "@/lib/theme";
import saveTheme from "@/services/theme/saveTheme";

function useSaveTheme() {
  const mutation = useMutation({
    mutationKey: ["saveTheme"],
    mutationFn: (newTheme: SupportedTheme) => saveTheme(newTheme),
  });

  return mutation;
}

export default useSaveTheme;
