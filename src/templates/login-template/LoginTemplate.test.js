import { render, screen } from "@testing-library/react";
import LoginTemplate from "./LoginTemplate";
import userEvent from "@testing-library/user-event";

describe("test in LoginTemplate component", () => {
  test("should display an alert when the form data is invalid", async () => {
    render(<LoginTemplate/>);

    screen.debug();
    const inputEmail = screen.getAllByRole("textbox")[0];
    const buttonSubmit = screen.getByRole("button");

    userEvent.type(inputEmail, "error@email");
    userEvent.click(buttonSubmit);

    const errorAlert = await screen.findByRole("alert-error");
    expect(errorAlert).toBeInTheDocument();
  });
});
