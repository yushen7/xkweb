<template>
  <div id="app">
    <transition>
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
    console.log(this.$router);
  }
};
</script>

<style lang="scss">
html {
  background-color: #e2e2e2;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
