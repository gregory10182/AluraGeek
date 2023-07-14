const searchBarButton = document.querySelector(".navbar-search");
const searchBarButtonImg = document.querySelector(".navbar-search img");
const searchBar = document.querySelector(".navbar-searchbar");

searchBarButton.addEventListener("click", () => {
  if (searchBar.classList.contains("navbar-searchbar-inactive")) {
    searchBar.classList.add("navbar-searchbar-active");
    searchBar.classList.remove("navbar-searchbar-inactive");
    searchBarButtonImg.src = "../assets/cancel.svg";
  } else {
    searchBar.classList.add("navbar-searchbar-inactive");
    searchBar.classList.remove("navbar-searchbar-active");
    searchBarButtonImg.src = "../assets/search.svg";
  }
});
