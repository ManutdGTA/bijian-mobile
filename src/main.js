import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Button } from "vant";
import { Tabbar, TabbarItem } from "vant";
import { Badge } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
import { Dialog } from "vant";
import { Tab, Tabs } from "vant";
import { List } from "vant";
import { PullRefresh } from "vant";
import { Cell, CellGroup } from "vant";
import { DropdownMenu, DropdownItem } from "vant";
import { Progress } from 'vant';
import { Field } from 'vant';

Vue.use(Field);
Vue.use(Progress);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(PullRefresh);
Vue.use(List);

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Badge);
Vue.use(Dialog);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
