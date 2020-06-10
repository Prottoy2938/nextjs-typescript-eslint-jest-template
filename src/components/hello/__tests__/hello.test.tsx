import React from "react";
import Hello from "../hello";
import TestRenderer from "react-test-renderer";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

describe("Index", () => {
  it("should match the snapshot", () => {
    const testRenderer = TestRenderer.create(<Hello name="Prottay Rudra" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it("Should have the right content", () => {
    const { getByTestId } = render(<Hello name="Prottay Rudra" />);
    const title = getByTestId("title");
    expect(title).toHaveTextContent("Hello");
  });
});
