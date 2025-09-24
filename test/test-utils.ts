import { render, type RenderOptions } from "@testing-library/react-native";
import React from "react";

import Providers from "@/components/layout/providers/Providers";

// Overwrite render function to include the app's providers
function customRender(
  ui: React.ReactElement<unknown, string | React.JSXElementConstructor<any>>,
  options?: RenderOptions
) {
  return render(ui, { wrapper: Providers, ...options });
}

export * from "@testing-library/react-native";
export { customRender as render };
