const controller = {};
controller.register = ({ username, email, password, confirmPassword }) => {
  if (username === "") {
    view.setErrorMessage("username-error", "Please input first name");
  } else {
    view.setErrorMessage("username-error", "");
  }
  if (email === "") {
    view.setErrorMessage("email-error", "Please input email");
  } else {
    view.setErrorMessage("email-error", "");
  }
  if (password === "") {
    view.setErrorMessage("password-error", "Please input password");
  } else {
    view.setErrorMessage("password-error", "");
  }
  if (confirmPassword === "") {
    view.setErrorMessage("cf-password-error", "Please input confirm password");
  } else if (password !== confirmPassword) {
    view.setErrorMessage("cf-password-error", "Password didn't match");
  } else {
    view.setErrorMessage("cf-password-error", "");
  }
  if (
    username !== "" &&
    email !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    password === confirmPassword
  ) {
    const dataRegister = {
      username,
      email,
      password,
    };
    model.register(dataRegister);
  }
};
controller.login = ({ email, password }) => {
  if (email === "") {
    view.setErrorMessage("email-error", "Please input email");
  } else {
    view.setErrorMessage("email-error", "");
  }
  if (password === "") {
    view.setErrorMessage("password-error", "Please input password");
  } else {
    view.setErrorMessage("password-error", "");
  }
  if (email !== "" && password !== "") {
    model.login({ email, password });
  }
};
