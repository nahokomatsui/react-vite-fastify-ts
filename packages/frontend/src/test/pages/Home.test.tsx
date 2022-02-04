import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "../../pages/Home";
import { pingResponse } from "../mocks/api/handlers";

describe("Home", () => {
  test("shows data from api successfully", async () => {
    const { asFragment, findByText } = render(<Home />);
    await findByText(pingResponse);
    expect(asFragment()).toMatchSnapshot();
  });
});
