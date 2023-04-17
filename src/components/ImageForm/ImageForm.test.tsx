import ImageForm from "./ImageForm";
import { render, screen } from "@testing-library/react";

describe("ImageForm", () => {
  beforeEach(() => {
    render(<ImageForm />);
  });

  test("Should exist input for title", () => {
    const input = screen.getByRole("textbox", { name: /title/i });
    expect(input).toBeDefined();
  });

  test("Should exist input file", () => {
    expect(screen.getByLabelText("Upload image")).toBeDefined();
  });

  test("Should exist submit button", () => {
    expect(screen.getByRole("button", { name: /send/i })).toBeDefined();
  });
});
