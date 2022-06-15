const Axios = require("axios");

Axios.defaults.baseURL = "http://localhost:3000";
let token = localStorage.getItem("token");
Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

let changeEmail = (newEmail) => {
  return Axios.put("/users/", newEmail);
};

let changePassword = (newPassword) => {
  return Axios.put("/users/", newPassword);
};

export const UsersService = {
  changeEmail,
  changePassword,
};
