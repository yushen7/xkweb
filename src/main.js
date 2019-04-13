import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vant/lib/swipe/style";
import "vant/lib/swipe-item/style";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from "axios";
import {
  Swipe,
  SwipeItem
} from "vant";
import {
  Menu,
  MenuItem,
  Loading
} from "element-ui";
Vue.use(Loading.directive);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.config.productionTip = false;
Vue.use(Swipe).use(SwipeItem);
Vue.prototype.$http = axios;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
