"Use Strict";

const toggleLight = document.querySelector(".toggle-light");
const toggleDark = document.querySelector(".toggle-dark");
const htmlElement = document.documentElement;

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
