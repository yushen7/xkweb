<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HomePage from '@/views/HomePage';
export default {
  name: 'app',
  created() {
    this.$router.addRoutes([
      {
        path: '*',
        name: '404',
        component: () => import('./views/HomePage')
      }
    ]);
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-enter {
  transform: translateX(75%);
}
.slide-enter-to,
.slide-leave {
  opacity: 1;
  transform: translateX(0);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-75%);
}
.router-view,
.slide-enter-active,
.slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
}

img[lazy='loading'] {
  opacity: 0.5;
  width: 32px !important;
  height: 32px !important;
}
img[lazy='loaded'] {
  opacity: 1;
}
img {
  transition: all 0.3s ease-in-out;
}
</style>
