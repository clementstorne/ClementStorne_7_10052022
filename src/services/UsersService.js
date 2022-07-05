const Axios = require("axios");

Axios.defaults.baseURL = "http://localhost:3000";

let getUserData = () => {
  const token = localStorage.getItem("token");
  Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return Axios.get("/users/activeUser");
};

let changeProfilePicture = (newProfilePictureUrl) => {
  return Axios.put("/users/", newProfilePictureUrl);
};

let changeEmail = (newEmail) => {
  return Axios.put("/users/", newEmail);
};

let changePassword = (newPassword) => {
  return Axios.put("/users/", newPassword);
};

export const UsersService = {
  getUserData,
  changeProfilePicture,
  changeEmail,
  changePassword,
};
