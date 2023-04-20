import Banner from "./Banner";
import { render, screen } from "@testing-library/react";

describe("Banner", () => {
  beforeEach(() => {
    render(<Banner />);
  });

  test("Should exist heading with motto", () => {
    expect(
      screen.getByRole("heading", { name: /give space to your/i })
    ).toBeDefined();
  });

  test("Should exist heading with second motto", () => {
    expect(
      screen.getByRole("heading", {
        name: /keep your favourite images at your fingertips/i,
      })
    ).toBeDefined();
  });
});
