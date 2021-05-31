function validateLoginData (email, password) {
  if (!email) {
    return {
      error: true,
      message: "The email is invalid",
    };
  }

  return {
    error: false,
    message: "",
  };
}

export { validateLoginData };
