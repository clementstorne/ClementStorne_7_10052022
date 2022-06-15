const Axios = require("axios");

Axios.defaults.baseURL = "http://localhost:3000";
let token = localStorage.getItem("token");
Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

let createPost = (credentials) => {
  return Axios.post("/posts/", credentials);
};

let getAllPost = () => {
  return Axios.get("/posts/");
};

export const PostsService = {
  createPost,
  getAllPost,
};
