const confirmPassword = document.getElementById("confirm-password");
const password = document.getElementById("password");
const email = document.getElementById("email");
const button = document.querySelector("div.lower-section button");
const form = document.querySelector("form");
const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value === password.value) {
    confirmPassword.setCustomValidity("");
  } else if (confirmPassword === "" || confirmPassword == null) {
    confirmPassword.setCustomValidity("Please confirm your password");
  } else {
    confirmPassword.setCustomValidity("Passwords do not match");
  }
});

password.addEventListener("input", () => {
  if (password.value === "" || password.value == null) {
    password.setCustomValidity("Password is required");
  } else if (password.validity.tooShort) {
    password.setCustomValidity("Password is too short!");
  } else {
    password.setCustomValidity("");
  }
});

email.addEventListener("input", () => {
  if (email.value === "" || email.value == null) {
    email.setCustomValidity("Please enter an email");
  } else if (!emailRe.test(email.value)) {
    email.setCustomValidity("Please enter a valid email");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    email.reportValidity();
    password.reportValidity();
    confirmPassword.reportValidity();
    e.preventDefault();
  } else {
    alert("Thank you for signing up");
  }
});
