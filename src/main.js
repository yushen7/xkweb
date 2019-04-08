import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'vant/lib/swipe/style';
import 'vant/lib/swipe-item/style';
import 'vant/lib/tab/style';
import 'vant/lib/tabs/style';
import {
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Lazyload
} from 'vant';
import 'vant/lib/';

Vue.config.productionTip = false;
Vue.use(Tab).use(Tabs);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload, {
  observer: true
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
