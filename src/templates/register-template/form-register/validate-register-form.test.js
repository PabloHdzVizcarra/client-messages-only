import { validateRegisterForm } from "./validate-register-form";

describe("test in validateRegisterForm function", () => {
  test("should return error when name is not valid", () => {
    const mockName = "";
    const { error, message } = validateRegisterForm(mockName);

    expect(error).toBeTruthy();
    expect(message).toMatch(/name/);
  });
});
