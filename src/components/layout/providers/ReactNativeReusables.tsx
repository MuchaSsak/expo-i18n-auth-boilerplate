import { PortalHost } from "@rn-primitives/portal";
import React from "react";

function ReactNativeReusables({ children }: React.PropsWithChildren) {
  return (
    <>
      {children}

      <PortalHost />
    </>
  );
}

export default ReactNativeReusables;
