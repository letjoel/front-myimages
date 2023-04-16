import NotFoundPage from "./NotFoundPage";
import { render, screen } from "@testing-library/react";

describe("NotFoundPage", () => {
  beforeEach(() => {
    render(<NotFoundPage />);
  });

  test("Should exist h1 `not found`", () => {
    expect(screen.getByRole("heading", { name: /not found/i })).toBeDefined();
  });
});
