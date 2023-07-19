const inputs = document.querySelectorAll(".inputV");
const sendMessage = document.querySelector(".contact-form-button");

let inputValidator = {
  Nombre: false,
  Email: false,
  Asunto: false,
  Mensaje: false,
};

const inputValidation = (input) => {
  if (!input.validity.valid) {
    inputValidator[input.placeholder] = false;
    if (input.type !== "email") {
      input.parentElement.classList.add("inputContainerInvalid");
    } else if (input.validity.valueMissing) {
      input.nextElementSibling.nextElementSibling.textContent =
        "El campo correo no puede estar vacio";
      input.parentElement.classList.add("inputContainerInvalid");
    } else if (input.validity.patternMismatch) {
      input.nextElementSibling.nextElementSibling.textContent =
        "El formato del correo no es valido";
      input.parentElement.classList.add("inputContainerInvalid");
    }
  } else {
    inputValidator[input.placeholder] = true;
    input.parentElement.classList.remove("inputContainerInvalid");
  }
};

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    inputValidation(input.target);
  });
});
