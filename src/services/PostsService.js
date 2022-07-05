const Axios = require("axios");

// Axios.defaults.baseURL = "http://localhost:3000";
// let token = localStorage.getItem("token");
// Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

let createPost = (credentials) => {
  return Axios.post("/posts/", credentials);
};

let getAllPosts = () => {
  return Axios.get("/posts/");
};

let editPost = (postId, credentials) => {
  return Axios.put(`/posts/${postId}`, credentials);
};

let deletePost = (postId) => {
  return Axios.delete(`/posts/${postId}`);
};

export const PostsService = {
  createPost,
  getAllPosts,
  editPost,
  deletePost,
};
