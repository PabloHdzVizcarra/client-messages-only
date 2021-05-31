/**
 * validate data to form
 * @param {string} email
 * @param {string} password
 */
function validateLoginData (email, password) {
  const regexEmail = /^\S+@\S+\.\S+$/
  if (!regexEmail.test(email)) {
    return {
      error: true,
      message: "The email is invalid",
    };
  }

  if (password.length < 8 || password.length > 20) {
    return {
      error: true,
      message: "The password length must greater than 8 and less than 20",
    };
  }
  return {
    error: false,
    message: "",
  };
}

export { validateLoginData };
