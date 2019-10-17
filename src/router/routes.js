import Vue from "vue";
import VueRouter from "vue-router";

const Profile = () => import("../pages/Profile/Profile.vue");
const More = () => import("../pages/More/More.vue");
const Home = () => import("../pages/Home/Home.vue");

import Login from "../pages/Login/Login.vue";

import Aboutme from "../pages/Aboutme/Aboutme.vue";
import Education from "../pages/Education/Education.vue";
import General from "../pages/General/General.vue";
import Settings from "../pages/Settings/Settings.vue";
import NotFound from "../pages/NotFound/NotFound.vue";

Vue.use(VueRouter);

export default [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/home",
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: "/profile/aboutme",
    component: Aboutme
  },
  {
    path: "/profile/education",
    component: Education
  },
  {
    path: "/more",
    component: More,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: "/more/general",
    component: General
  },
  {
    path: "/more/settings",
    component: Settings
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/*",
    component: NotFound
  }
];
