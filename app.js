"Use Strict";

// Variables
const toggleLight = document.querySelector(".toggle-light");
const toggleDark = document.querySelector(".toggle-dark");
const htmlElement = document.documentElement;
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const errorMsg = document.querySelector("#error-message");

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

// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// Load Octocat profile
document.addEventListener("DOMContentLoaded", () => {
  github.getUser("Octocat").then((data) => {
    ui.showProfile(data.profileData);
  });
});

// Get Search Input
searchBtn.addEventListener("click", (e) => {
  console.log(searchInput.value);

  const userText = searchInput.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profileData.message === "Not Found") {
        errorMsg.style.display = "block";
        setTimeout(function () {
          errorMsg.style.display = "none";
          clearFields();
        }, 3000);
      } else {
        ui.showProfile(data.profileData);
        clearFields();
      }
    });
  }
  e.preventDefault();
});

// Clear input fields
function clearFields() {
  searchInput.value = "";
}
