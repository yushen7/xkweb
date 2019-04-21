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
import VuePreview from 'vue-preview';
import VuePreviewDirective from 'vue-directive-image-previewer';
import 'vue-directive-image-previewer/dist/assets/style.css';
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {
    top: 0,
    bottom: 0
  },
  captionEl: true,
  fullscreenEl: true,
  shareEl: true,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
});
Vue.use(VuePreviewDirective, {
  animate: {
    duration: 300,
    delay: 0
  }

});
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
