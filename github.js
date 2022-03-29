"Use Strict";

class Github {
  constructor() {
    this.client_id = "57301e21d10995829374";
    this.client_secret = "b25bc7d55528e28699897780695dea488652347f";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    console.log(profileData);

    return {
      profileData,
    };
  }
}

{
  /* <script src="github.js"></script>
<script src="ui.js"></script>
<script src="app.js"></script> */
}

//APP JS CODE!!!!!!!
// // // Init Github
// const github = new Github();
// // Init UI
// const ui = new UI();

// // Load Octocat profile
// document.addEventListener("DOMContentLoaded", () => {
//   github.getUser("Octocat").then((data) => {
//     ui.showProfile(data.profileData);
//   });
// });

// // Get Search Input
// searchBtn.addEventListener("click", (e) => {
//   console.log(searchInput.value);

//   const userText = searchInput.value;

//   if (userText !== "") {
//     github.getUser(userText).then((data) => {
//       if (data.profileData.message === "Not Found") {
//         errorMsg.style.display = "block";
//         setTimeout(function () {
//           errorMsg.style.display = "none";
//           clearFields();
//         }, 3000);
//       } else {
//         ui.showProfile(data.profileData);
//         clearFields();
//       }
//     });
//   }
//   e.preventDefault();
// });

// // Clear input fields
// function clearFields() {
//   searchInput.value = "";
// }
