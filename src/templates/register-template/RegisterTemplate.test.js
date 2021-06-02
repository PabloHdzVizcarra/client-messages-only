import React from "react";
import { MemoryRouter } from "react-router-dom";
import {
    queryByTestId,
    render,
    screen, waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import RegisterTemplate from "./RegisterTemplate";
import userEvent from "@testing-library/user-event";

describe("test in RegisterTemplate component", () => {
  test("should display error alert when one input data is not valid",
    async () => {
      render(<RegisterTemplate/>, { wrapper: MemoryRouter });
      const submitButton = screen.getByRole("button");
      const inputName = screen.getByRole("textbox", { name: "Nombre" });

      userEvent.type(inputName, "as");
      userEvent.click(submitButton);

      expect(await screen.findByTestId(/alert-error/)).toBeInTheDocument();
    });
  test("should display error alert when lastname input data is not valid",
    async () => {
      render(<RegisterTemplate/>, { wrapper: MemoryRouter });
      const submitButton = screen.getByRole("button");
      const inputName = screen.getByRole("textbox", { name: "Nombre" });
      const inputLastname = screen.getByRole("textbox", { name: "Apellido" });

      userEvent.type(inputName, "john");
      userEvent.type(inputLastname, "as");
      userEvent.click(submitButton);

      expect(await screen.findByTestId(/alert-error/)).toBeInTheDocument();
    });
  // test("the alert should disappear when all data are successfully aggregated",
  //   async () => {
  //     render(<RegisterTemplate/>, { wrapper: MemoryRouter });
  //     const submitButton = screen.getByRole("button");
  //     const inputName = screen.getByRole("textbox", { name: "Nombre" });
  //     const inputLastname = screen.getByRole("textbox", { name: "Apellido" });
  //     const inputEmail = screen.getByRole("textbox", { name: "Email" });
  //     const inputPassword = screen.getByTestId("password1");
  //     const inputRepeatPassword = screen.getByTestId("password2");
  //
  //     userEvent.type(inputName, "john");
  //     userEvent.type(inputLastname, "carter");
  //     userEvent.type(inputEmail, "test@email.com");
  //     userEvent.type(inputPassword, "admin123");
  //     userEvent.type(inputRepeatPassword, "admin12");
  //
  //     userEvent.click(submitButton);
  //     expect(await screen.findByTestId(/alert-error/)).toBeInTheDocument();
  //
  //     userEvent.type(inputRepeatPassword, "admin123");
  //     userEvent.click(submitButton);
  //
  //     await waitFor(() => {
  //         expect(screen.getByTestId("alert-error")).not.toBeInTheDocument()
  //     })
  //   });
});
