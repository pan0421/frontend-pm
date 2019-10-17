import Vue from "vue";
import VueRouter from "vue-router";
import store from "../vuex/store";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

const paths = ["/home", "/profile", "/more"];

router.beforeEach((to, from, next) => {
  if (paths.indexOf(to.path) !== -1) {
    if (!store.state.user.token) {
      return next("/login");
    }
  }
  next();
});

export default router;
