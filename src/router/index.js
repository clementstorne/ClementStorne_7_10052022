import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
// import SinglePost from "../views/SinglePost.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    beforeEnter: () => {
      let token = localStorage.getItem("token");
      if (token) {
        return true;
      }
      router.push("/");
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    beforeEnter: () => {
      let token = localStorage.getItem("token");
      if (token) {
        return true;
      }
      router.push("/");
    },
  },
  // {
  //   path: "/post",
  //   name: "post",
  //   component: SinglePost,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
