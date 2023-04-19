import { BrowserRouter } from "react-router-dom";
import EditPage from "./EditPage";
import { render, screen } from "@testing-library/react";

describe("EditPage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <EditPage />
      </BrowserRouter>
    );
  });

  test("Should exist a h1 with a pencil emoji", () => {
    expect(screen.getByRole("heading", { name: "✏️" })).toBeDefined();
  });
});
