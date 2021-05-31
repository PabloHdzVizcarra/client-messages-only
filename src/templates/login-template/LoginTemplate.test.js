import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import LoginTemplate from "./LoginTemplate";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";


describe("test in LoginTemplate component", () => {
  const history = createMemoryHistory();

  test("should display an alert when the form data is invalid", async () => {
    render(
      <Router history={history}>
        <LoginTemplate/>
      </Router>,
    );

    const inputEmail = screen.getAllByRole("textbox")[0];
    const buttonSubmit = screen.getByRole("button", {name: "Login"});

    userEvent.type(inputEmail, "error@email");
    userEvent.click(buttonSubmit);

    const errorAlert = await screen.findByTestId("alert-error");
    expect(errorAlert).toBeInTheDocument();
  });


  test("should display an alert when the form password data is invalid",
    async () => {
      render(
        <Router history={history}>
          <LoginTemplate/>
        </Router>,
      );

      const inputEmail = screen.getAllByRole("textbox")[0];
      const inputPassword = screen.getByTestId("input-password");
      const buttonSubmit = screen.getByRole("button", {name: "Login"});

      userEvent.type(inputEmail, "test@email.com");
      userEvent.type(inputPassword, "error");
      userEvent.click(buttonSubmit);

      const errorAlert = await screen.findByTestId("alert-error");
      expect(errorAlert).toBeInTheDocument();
    });

  test(
    "should remove the alert when the data is successfully passed to the form",
    async () => {
      render(
        <Router history={history}>
          <LoginTemplate/>
        </Router>,
      );

      const inputEmail = screen.getAllByRole("textbox")[0];
      const inputPassword = screen.getByTestId("input-password");
      const buttonSubmit = screen.getByRole("button", {name: "Login"});

      userEvent.type(inputEmail, "test@email.com");
      userEvent.type(inputPassword, "error");
      userEvent.click(buttonSubmit);

      const errorAlert = await screen.findByTestId("alert-error");
      expect(errorAlert).toBeInTheDocument();

      userEvent.type(inputPassword, "admin123");
      userEvent.click(buttonSubmit);

      await waitFor(() => {
        expect(errorAlert).not.toBeInTheDocument();
      });
    });
});
