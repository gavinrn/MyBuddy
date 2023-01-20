function formChange(button) {
    const signUpForm = document.getElementById("sign-up-form");
    signUpForm.classList.toggle("display-none");
  
    const login = document.getElementById("login");
    login.classList.toggle("display-none");
  
    const signUp = document.getElementById("sign-up");
    signUp.classList.toggle("display-flex");
  
    const loginForm = document.getElementById("login-form");
    loginForm.classList.toggle("display-flex");
  
    const col1 = document.getElementById("col-1");
    const col2 = document.getElementById("col-2");
    col1.classList.toggle("order");
  
    if (button === "login") {
      col1.classList.add("bounce-left");
      col1.classList.remove("bounce-right");
  
      col2.classList.add("bounce-right");
      col2.classList.remove("bounce-left");
    } else {
      col1.classList.add("bounce-right");
      col1.classList.remove("bounce-left");
  
      col2.classList.add("bounce-left");
      col2.classList.remove("bounce-right");
    }
  }
  const email1 = document.getElementById("email-1");
  const emailSpan1 = document.getElementById("span-email-1");
  const email2 = document.getElementById("email-2");
  const emailSpan2 = document.getElementById("span-email-2");
  const password1 = document.getElementById("password-1");
  const passwordSpan1 = document.getElementById("span-password-1");
  const password2 = document.getElementById("password-2");
  const passwordSpan2 = document.getElementById("span-password-2");
  
  email1.addEventListener("input", () => {
    if (email1.value) {
      emailSpan1.classList.add("focus-span");
    } else {
      emailSpan1.classList.remove("focus-span");
    }
  });
  
  email2.addEventListener("input", () => {
    if (email2.value) {
      emailSpan2.classList.add("focus-span");
    } else {
      emailSpan2.classList.remove("focus-span");
    }
  });
  
  password1.addEventListener("input", () => {
    if (password1.value) {
      passwordSpan1.classList.add("focus-span");
    } else {
      passwordSpan1.classList.remove("focus-span");
    }
  });
  
  password2.addEventListener("input", () => {
    if (password2.value) {
      passwordSpan2.classList.add("focus-span");
    } else {
      passwordSpan2.classList.remove("focus-span");
    }
  });
  