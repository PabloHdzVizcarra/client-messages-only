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
  })
});
