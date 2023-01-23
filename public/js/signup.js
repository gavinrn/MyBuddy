function getCursorPosition(event) {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";
const email = document.getElementById("email");
const emailSpan = document.getElementById("span-email");
const password = document.getElementById("password");
const passwordSpan = document.getElementById("span-password");

email.addEventListener("input", () => {
  if (email.value) {
    emailSpan.classList.add("focus-span");
  } else {
    emailSpan.classList.remove("focus-span");
  }
});

password.addEventListener("input", () => {
  if (password.value) {
    passwordSpan.classList.add("focus-span");
  } else {
    passwordSpan.classList.remove("focus-span");
  }
});
