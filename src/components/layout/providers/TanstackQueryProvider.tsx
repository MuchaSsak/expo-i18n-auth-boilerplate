import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import { queryClient } from "@/services/tanstackQuery/client";

function TanstackQueryProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackQueryProvider;
