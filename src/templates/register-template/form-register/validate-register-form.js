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

  const regexEmail = /^\S+@\S+\.\S+$/
  if (!regexEmail.test(email)) {
    return {
      error: true,
      message: "The email is invalid",
    };
  }
}

export { validateRegisterForm };
