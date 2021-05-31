import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import LoginTemplate from "./LoginTemplate";
import userEvent from "@testing-library/user-event";

describe("test in LoginTemplate component", () => {
  test("should display an alert when the form data is invalid", async () => {
    render(<LoginTemplate/>);

    const inputEmail = screen.getAllByRole("textbox")[0];
    const buttonSubmit = screen.getByRole("button");

    userEvent.type(inputEmail, "error@email");
    userEvent.click(buttonSubmit);

    const errorAlert = await screen.findByTestId("alert-error");
    expect(errorAlert).toBeInTheDocument();
  });

  test("should display an alert when the form password data is invalid", async () => {
    render(<LoginTemplate/>);

    const inputEmail = screen.getAllByRole("textbox")[0];
    const inputPassword = screen.getAllByRole("textbox")[1];
    const buttonSubmit = screen.getByRole("button");

    userEvent.type(inputEmail, "test@email.com");
    userEvent.type(inputPassword, "error");
    userEvent.click(buttonSubmit);

    const errorAlert = await screen.findByTestId("alert-error");
    expect(errorAlert).toBeInTheDocument();
  })

  test("should remove the alert when the data is successfully passed to the form", async () => {
    render(<LoginTemplate/>);

    const inputEmail = screen.getAllByRole("textbox")[0];
    const inputPassword = screen.getAllByRole("textbox")[1];
    const buttonSubmit = screen.getByRole("button");

    userEvent.type(inputEmail, "test@email.com");
    userEvent.type(inputPassword, "error");
    userEvent.click(buttonSubmit);

    const errorAlert = await screen.findByTestId("alert-error");
    expect(errorAlert).toBeInTheDocument();

    userEvent.type(inputPassword, "admin123");
    userEvent.click(buttonSubmit);

    await waitForElementToBeRemoved(errorAlert).then(() => {
      expect(errorAlert).not.toBeInTheDocument()
    })
  })
});
