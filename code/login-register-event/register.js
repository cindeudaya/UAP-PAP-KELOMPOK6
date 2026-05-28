const registerInputs = document.querySelectorAll("input");

registerInputs.forEach(input => {

  input.addEventListener("focus", () => {
    input.style.borderColor = "#28734c";
  });

  input.addEventListener("blur", () => {
    input.style.borderColor = "#cfcfcf";
  });

});