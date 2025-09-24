import { useQuery } from "@tanstack/react-query";

import getAuthenticatedUser from "@/services/auth/getAuthenticatedUser";

function useGetAuthenticatedUser() {
  const query = useQuery({
    queryKey: ["getAuthenticatedUser"],
    queryFn: getAuthenticatedUser,
  });

  return query;
}

export default useGetAuthenticatedUser;
