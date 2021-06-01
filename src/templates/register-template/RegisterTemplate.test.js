import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import RegisterTemplate from "./RegisterTemplate";
import userEvent from "@testing-library/user-event";

describe("test in RegisterTemplate component", () => {
  test("should display error alert when one input data is not valid",
    async () => {
      render(<RegisterTemplate/>, { wrapper: MemoryRouter });
      const submitButton = screen.getByRole("button");
      const inputName = screen.getByRole("textbox", {name: "Nombre"});

      userEvent.type(inputName, "as");
      userEvent.click(submitButton)

      expect(await screen.findByTestId(/alert-error/)).toBeInTheDocument();
    });
  test("should display error alert when lastname input data is not valid",
    async () => {
      render(<RegisterTemplate/>, { wrapper: MemoryRouter });
      const submitButton = screen.getByRole("button");
      const inputName = screen.getByRole("textbox", {name: "Nombre"});
      const inputLastname = screen.getByRole("textbox", {name: "Apellido"});

      userEvent.type(inputName, "john");
      userEvent.type(inputLastname, "as");
      userEvent.click(submitButton)

      expect(await screen.findByTestId(/alert-error/)).toBeInTheDocument();
    });
});
