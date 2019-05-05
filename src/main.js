import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from "axios";
import {
  Menu,
  MenuItem,
  Loading
} from "element-ui";
import VuePreview from 'vue-preview';
import env from './utilities/detectEnv.js';
//引入vant组件库
import {
  Lazyload
} from 'vant';
import 'vant/lib/image-preview/style';
import ImagePreview from 'vant/lib/image-preview';
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {
    top: 0,
    bottom: 0
  },
  captionEl: true,
  fullscreenEl: true,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
});
Vue.use(Lazyload, {
  preLoad: 1.3,
  loading: require('@/assets/loading2.gif')
});
Vue.use(Loading.directive);
Vue.use(ImagePreview);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
axios.defaults.baseURL = env.baseUrl;
Vue.prototype.$http = axios;
Vue.prototype.$prefixUrl = env.prefixUrl;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
