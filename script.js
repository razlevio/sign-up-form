const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const passwordOne = document.querySelector("#password");
  const passwordTwo = document.querySelector("#verifyPassword");
  const errorLabel = document.querySelector(".pass-error-msg");
  if (passwordOne.value !== passwordTwo.value) {
    e.preventDefault();
    passwordOne.classList.add("error");
    passwordTwo.classList.add("error");
    errorLabel.style.display = "block";
  }
});
