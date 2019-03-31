import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'vant/lib/swipe/style';
import 'vant/lib/swipe-item/style';
Vue.config.productionTip = false;
import {
  Swipe,
  SwipeItem,
  Lazyload
} from 'vant';

Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
