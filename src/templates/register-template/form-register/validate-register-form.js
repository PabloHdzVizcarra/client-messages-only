/**
 * validate data to form
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @param {string} repeatPassword
 * @param {string} lastname
 */
function validateRegisterForm(
  name,
  lastname,
  email,
  password,
  repeatPassword) {
  if (!name || typeof name !== "string") {
    return {
      error: true,
      message: "the name is not valid"
    }
  }

  if (!lastname || typeof lastname !== "string") {
    return {
      error: true,
      message: "the lastname is not valid"
    }

  }
}

export { validateRegisterForm };
