import { useQuery } from "@tanstack/react-query";

import getSession from "@/services/auth/getSession";

function useGetSession() {
  const query = useQuery({
    queryKey: ["getSession"],
    queryFn: getSession,
  });

  return query;
}

export default useGetSession;
