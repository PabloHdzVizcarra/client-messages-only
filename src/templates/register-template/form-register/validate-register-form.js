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
      message: "the email is invalid",
    };
  }

  if (!password || password.length < 8 ) {
    return {
      error: true,
      message: "password length must be greater than 8"
    }
  }
}

export { validateRegisterForm };
