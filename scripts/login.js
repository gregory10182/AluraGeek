import { userServices } from "../services/user-service.js";

const loginForm = document.querySelector(".login-form");
const messageAlert = document.querySelector("#messageAlert");
const message = document.querySelector(".messageAlert-text");

const displayMessage = (fetchMessage) => {
  message.innerHTML = fetchMessage;
  messageAlert.classList.remove("inactive");
  messageAlert.classList.add("messageAlert");

  setTimeout(() => {
    messageAlert.classList.remove("messageAlert");
    messageAlert.classList.add("inactive");
  }, 2500);
};

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  const login = await userServices.login(
    data.get("email"),
    data.get("password")
  );

  if (login.status === 200) {
    login
      .json()
      .then((res) => {
        displayMessage("Inicio de sesion exitoso");
        localStorage.setItem("tkn", JSON.stringify(res));

        setTimeout(() => {
          location.href = "../admin.html";
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (login.status === 400) {
    login.json().then((res) => {
      displayMessage(res);
    });
  }
});
