import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("Should exist a text `Imagine`", () => {
    const input = screen.getByText(/imagine/i);
    expect(input).toBeDefined();
  });

  test("Should exist a text `Privacy policy`", () => {
    const input = screen.getByText(/privacy policy/i);
    expect(input).toBeDefined();
  });

  test("Should exist a text `Sitemap`", () => {
    const input = screen.getByText(/sitemap/i);
    expect(input).toBeDefined();
  });
});
