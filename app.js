"Use Strict";

// Variables
const toggleLight = document.querySelector(".toggle-light");
const toggleDark = document.querySelector(".toggle-dark");
const htmlElement = document.documentElement;
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

// Theme Toggle
toggleLight.addEventListener("click", () => {
  htmlElement.setAttribute("data-theme", "light");
  toggleLight.classList.remove("active");
  toggleDark.classList.add("active");
});

toggleDark.addEventListener("click", () => {
  htmlElement.setAttribute("data-theme", "dark");
  toggleLight.classList.add("active");
  toggleDark.classList.remove("active");
});

// Get Search Input
searchBtn.addEventListener("click", (e) => {
  console.log(searchInput.value);
  e.preventDefault();
});
