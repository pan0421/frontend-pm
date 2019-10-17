import axios from "axios";
import qs from "qs";
import { Toast } from "vant";

import store from "../vuex/store";
import router from "../router";

const instance = axios.create({
  timeout: 20000
});

instance.interceptors.request.use(config => {
  const { method, data } = config;
  if (method.toLowerCase() === "post" && data && typeof data === "object") {
    config.data = qs.stringify(data);
  }
  const { needToken } = config.headers;
  if (needToken) {
    const token = store.state.user.token;
    if (token) {
      config.headers.Authorization = token;
    } else {
      const error = new Error("No token");
      error.status = 401;
      throw error;
    }
  }
  return config;
});

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (!error.response) {
      if (error.status === 401) {
        if (router.currentRoute.path !== "/login") {
          router.replace("/login");
          Toast(error.message);
        } else {
          Toast("User at login page");
        }
      }
    } else {
      const status = error.response.status;
      if (status === 401) {
        if (router.currentRoute.path !== "/login") {
          store.dispatch("logout");
          router.replace("/login");
          Toast(error.response.data.message);
        } else {
          Toast("expired token, User at login page");
        }
      } else if (status === 404) {
        Toast("Status 404, data not available");
      } else {
        Toast("Error: " + error.message);
      }
    }

    return new Promise(() => {});
  }
);

export default instance;
