<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from "@/views/7ish_HomePage";
export default {
  name: "app",
  components: { HomePage }
};
</script>

<style lang="scss">
html {
  background-color: #e2e2e2;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
