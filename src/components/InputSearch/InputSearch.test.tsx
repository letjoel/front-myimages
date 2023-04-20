import { BrowserRouter } from "react-router-dom";
import InputSearch from "./InputSearch";
import { render, screen } from "@testing-library/react";

describe("InputSearch", () => {
  beforeEach(() => {
    render(<InputSearch />);
  });

  test("Should render input of type text", () => {
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDefined;
  });
});
