const user = JSON.parse(localStorage.getItem("tkn"));
const loginButton = document.querySelector(".navbar-button");
const loggedUser = document.querySelector("#navbar-loggedUser");
const userId = document.querySelector(".navbar-loggedUser-id");
const logoutButton = document.querySelector(".navbar-loggedUser-logout");

if (user !== null) {
  loginButton?.classList.add("inactive");
  loginButton?.classList.remove("navbar-button");

  userId.innerHTML = `User: ${user.user.id}`;
  loggedUser.classList.remove("inactive");
  loggedUser.classList.add("navbar-loggedUser");
} else {
  loggedUser.classList.add("inactive");
  loggedUser.classList.remove("navbar-loggedUser");
  loginButton?.classList.remove("inactive");
  loginButton?.classList.add("navbar-button");
}

userId.addEventListener("click", () => {
  location.href = "./admin.html";
});

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("tkn");

  setTimeout(() => {
    location.reload();
  }, 500);
});
