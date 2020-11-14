const view = {};
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "mainPage":
      document.querySelector(".main").innerHTML = compoment.mainPage;
      document.getElementById("register-btn").addEventListener("click", () => {
        view.setActiveScreen("registerPage");
      });
      document.getElementById("login-btn").addEventListener("click", () => {
        view.setActiveScreen("loginPage");
      });
      const menuIcon = document.querySelector(".hamburger-menu");
      const navs = document.querySelector(".navs");
      const navbar = document.querySelector(".navbar");
      menuIcon.addEventListener("click", () => {
        navs.classList.toggle("change");
        navbar.classList.toggle("change");
      });
      break;
    case "registerPage":
      document.querySelector(".main").innerHTML = compoment.registerPage;
      document
        .getElementById("redirect-login")
        .addEventListener("click", () => {
          view.setActiveScreen("loginPage");
        });
      // document.getElementById("home-back").addEventListener("click", () => {
      //   view.setActiveScreen("mainPage");
      // });
      const registerForm = document.getElementById("register-form");
      registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const dataRegister = {
          username: registerForm.username.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        controller.register(dataRegister);

        registerForm.username.addEventListener('click', () => {
          registerForm.username.classList.remove('shakeErr')
            document.querySelector('#username-error').style.visibility  = "hidden";
        })
        registerForm.email.addEventListener('click', () => {
          registerForm.email.classList.remove('shakeErr')
          document.querySelector('#email-error').style.visibility  = "hidden";
        })
        registerForm.password.addEventListener('click', () => {
          registerForm.password.classList.remove('shakeErr')
            document.querySelector('#password-error').style.visibility  = "hidden";
        })
        registerForm.confirmPassword.addEventListener('click', () => {
          registerForm.confirmPassword.classList.remove('shakeErr')
          document.querySelector('#cf-password-error').style.visibility  = "hidden";
        })
      
      });
      break;
    case "loginPage":
      document.querySelector(".main").innerHTML = compoment.loginPage;
      document
        .getElementById("redirect-register")
        .addEventListener("click", () => {
          view.setActiveScreen("registerPage");
        });
      // document.getElementById("home-back").addEventListener("click", () => {
      //   view.setActiveScreen("mainPage");
      // });
      const loginForm = document.getElementById("login-form");
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const dataRegister = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.login(dataRegister);

        // console.log(loginForm.password.value)
        loginForm.email.addEventListener('click', () => {
          loginForm.email.classList.remove('shakeErr')
            document.querySelector('#email-error').style.visibility  = "hidden";
        })
        loginForm.password.addEventListener('click', () => {
          loginForm.password.classList.remove('shakeErr')
          document.querySelector('#password-error').style.visibility  = "hidden";
        })
      });
     


      break;
    case "loginSuccess":
      document.querySelector(".main").innerHTML = compoment.loginSuccess;
      break;
  }
};
view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message;
};
