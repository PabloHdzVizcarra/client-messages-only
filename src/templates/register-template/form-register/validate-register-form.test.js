import { validateRegisterForm } from "./validate-register-form";

describe("test in validateRegisterForm function", () => {
  test("should return error when name is not valid", () => {
    const mockName = "";
    const { error, message } = validateRegisterForm(mockName);

    expect(error).toBeTruthy();
    expect(message).toMatch(/name/);
  });

  test("should return error when lastname is not valid", () => {
    const mockName = "john";
    const mockLastname = 123;
    const { error, message } = validateRegisterForm(mockName, mockLastname);

    expect(error).toBeTruthy();
    expect(message).toMatch(/lastname/);
  });

  test("should return error when the email is not valid", () => {
    const mockName = "john";
    const mockLastname = "carter";
    const mockEmail = "error@email";
    const { error, message } = validateRegisterForm(mockName, mockLastname,
      mockEmail);

    expect(error).toBeTruthy();
    expect(message).toMatch(/email/);
  });

  test("should return error when the password is not valid", () => {
    const mockName = "john";
    const mockLastname = "carter";
    const mockEmail = "test@email.com";
    const mockPassword = "badPass";
    const { error, message } = validateRegisterForm(
      mockName,
      mockLastname,
      mockEmail,
      mockPassword,
    );

    expect(error).toBeTruthy();
    expect(message).toMatch(/password/);
  });
  test("the two passwords must be the same", () => {
    const mockName = "john";
    const mockLastname = "carter";
    const mockEmail = "test@email.com";
    const mockPassword = "admin123";
    const mockRepeatPassword = "admin124";
    const { error, message } = validateRegisterForm(
      mockName,
      mockLastname,
      mockEmail,
      mockPassword,
      mockRepeatPassword,
    );

    expect(error).toBeTruthy();
    expect(message).toMatch(/passwords/);
  });
  test("the error property must be false when all data are correct", () => {
    const mockName = "john";
    const mockLastname = "carter";
    const mockEmail = "test@email.com";
    const mockPassword = "admin123";
    const mockRepeatPassword = "admin123";
    const { error, message } = validateRegisterForm(
      mockName,
      mockLastname,
      mockEmail,
      mockPassword,
      mockRepeatPassword,
    );

    expect(error).toBeFalsy();
    expect(message).toMatch("");
  });

});
