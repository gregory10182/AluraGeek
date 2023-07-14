const searchBarInput = document.querySelector(".navbar-searchbar-input");
const searchBarButton = document.querySelector(".navbar-searchbar-button");

searchBarButton.addEventListener("click", () => {
  console.log(searchBarInput.value);
  location.href = `./search.html?searchString=${searchBarInput.value}`;
});
