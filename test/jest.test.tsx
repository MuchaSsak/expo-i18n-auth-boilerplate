import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react-native";

import { Text } from "@/components/ui/text";

describe("jest test suite", () => {
  it("works", () => {
    expect(1).toBe(1);
  });
});

describe("react native testing library test suite", () => {
  it("works", () => {
    render(<Text testID="foo">bar</Text>);

    const foo = screen.getByTestId("foo");

    expect(foo).toHaveTextContent("bar");
  });
});
