const loginInputs = document.querySelectorAll("input");

loginInputs.forEach(input => {

  input.addEventListener("focus", () => {
    input.style.borderColor = "#28734c";
  });

  input.addEventListener("blur", () => {
    input.style.borderColor = "#cfcfcf";
  });

});

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {

  alert("Login berhasil!");

});