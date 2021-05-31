import { validateLoginData } from "./validate-data-helper";

describe("test in validateLoginData function", () => {
  test("should return error and messages when email dont pass regex validation",
    () => {
      const mockEmail = "email@error";
      const { error, message } = validateLoginData(mockEmail, "");

      expect(error).toBeTruthy();
      expect(message).toMatch(/email/);
    });

  test(
    "should return an error and message with the password is less than 8 and greater than 20",
    () => {
      const mockEmail = "test@test.com";
      const mockPassword = "error";
      const { error, message } = validateLoginData(mockEmail, mockPassword);

      expect(error).toBeTruthy();
      expect(message).toMatch(/password/);
    });

  test("should return a confirmation message when all data is valid", () => {
    const mockEmail = "test@test.com";
    const mockPassword = "admin123";
    const { error, message } = validateLoginData(mockEmail, mockPassword);

    expect(error).toBeFalsy();
    expect(message).toEqual("");
  });
});
