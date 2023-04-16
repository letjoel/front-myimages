import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  test("Should exist a nav element", () => {
    expect(screen.getByRole("navigation")).toBeDefined();
  });

  test("Should exist a link to home", () => {
    expect(screen.getByRole("link", { name: "Home" })).toBeDefined();
  });

  test("Should exist a link to contact", () => {
    expect(screen.getByRole("link", { name: "Contact" })).toBeDefined();
  });

  test("Should exist an image with alt attribute equal to 'logo'", () => {
    expect(screen.getByRole("img", { name: "logo" })).toBeDefined();
  });
});
