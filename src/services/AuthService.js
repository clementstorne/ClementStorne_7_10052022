const Axios = require("axios");

let login = (credentials) => {
  return Axios.post("http://localhost:3000/auth/login", credentials);
};

let signup = (credentials) => {
  return Axios.post("http://localhost:3000/users/", credentials);
};

let logout = () => {
  localStorage.removeItem("token");
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

export const AuthService = {
  login,
  signup,
  logout,
  saveToken,
  isLogged,
};
