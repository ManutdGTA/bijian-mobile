import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Button } from "vant";
import { Tabbar, TabbarItem } from "vant";
Vue.config.productionTip = false;

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
