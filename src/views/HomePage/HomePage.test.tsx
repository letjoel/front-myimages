import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";

describe("HomePage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  test("Should exist h1 `all heading`", () => {
    expect(screen.getByRole("heading", { name: /all images/i })).toBeDefined();
  });

  test("Should exist button `add image`", () => {
    expect(screen.getByRole("button", { name: /add image/i })).toBeDefined();
  });
});
