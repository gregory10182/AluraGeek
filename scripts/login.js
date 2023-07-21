import { userServices } from "../services/user-service.js";

const login = await userServices.login("user1@alurageek.com", "user1");

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  const login = await userServices.login(
    data.get("email"),
    data.get("password")
  );

  if (typeof login === "object") {
    localStorage.setItem("tkn", login.accessToken);
    location.href = "../admin.html";
  } else console.log(login);
});
