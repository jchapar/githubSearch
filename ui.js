"Use Strict";
class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Display Profile
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="profile-image-wrapper">
      <img src="${user.avatar_url}" alt="Profile Image" />
    </div>
    <div class="profile-user-wrapper">
      <div class="profile-name">${user.name}</div>
      <div class="username">@${user.login}</div>
      <div class="join-date">${user.created_at}</div>
    </div>
    <div class="profile-bio-wrapper">
      <div class="bio">${user.bio}</div>
      <div class="profile-stats">
        <div class="repos">
          <small class="title">Repos</small>
          <p class="number">${user.public_repos}</p>
        </div>
        <div class="followers">
          <small class="title">Followers</small>
          <p class="number">${user.followers}</p>
        </div>
        <div class="following">
          <small class="title">Following</small>
          <p class="number">${user.following}</p>
        </div>
      </div>
    </div>
    <div class="profile-social-wrapper">
      <div class="location">
        <img src="assets/icon-location.svg" alt="Location Image" />
        <a href="#">${user.location}</a>
      </div>
      <div class="location">
        <img src="assets/icon-twitter.svg" alt="Twitter Image" />
        <a href="#">@${user.twitter_username}</a>
      </div>
      <div class="location">
        <img src="assets/icon-website.svg" alt="Website Image" />
        <a href="#">${user.blog}</a>
      </div>
      <div class="location">
        <img src="assets/icon-company.svg" alt="Company Image" />
        <a href="#">${user.company}</a>
      </div>
    </div>
    `;
  }
}
