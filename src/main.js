import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./vuex/store";
import * as API from "./api";
import "@vant/touch-emulator";
import { Popup, Field, Button, Dialog, CellGroup, Cell, Toast } from "vant";

Vue.use(Popup);
Vue.use(Field);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(CellGroup);
Vue.use(Cell);
Vue.use(Toast);

Vue.prototype.$API = API;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
