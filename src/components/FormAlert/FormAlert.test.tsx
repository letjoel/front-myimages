import FormAlert from "./FormAlert";
import { render, screen } from "@testing-library/react";

describe("FormAlert", () => {
  test("Should exist a spinner with alt named loading when isError is false", () => {
    const alert = {
      msg: "Alert message",
      isError: false,
    };
    render(<FormAlert alert={alert} />);
    const img = screen.getByAltText("loading");
    expect(img).toBeDefined();
  });

  test("Should have orange background when isError is true", () => {
    const alert = {
      msg: "Alert message",
      isError: true,
    };
    render(<FormAlert alert={alert} />);
    const div = screen.getByRole("alert");
    const styles = window.getComputedStyle(div);
    expect(styles.backgroundColor).toBe("orange");
  });
});
