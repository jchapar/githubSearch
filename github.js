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
