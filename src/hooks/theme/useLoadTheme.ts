import { useQuery } from "@tanstack/react-query";

import loadTheme from "@/services/theme/loadTheme";

function useLoadTheme() {
  const query = useQuery({
    queryKey: ["loadTheme"],
    queryFn: loadTheme,
  });

  return query;
}

export default useLoadTheme;
