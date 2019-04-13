<template>
  <div class="exhibition">
    <div class="fixed-bg"></div>
    <nav class="ex-nav">
      <el-menu
        :default-active="curPath"
        mode="horizontal"
        router
        ref="tabs"
        active-text-color="#2a9bfe"
      >
        <el-menu-item index="/exhibition_views/exhibition-video">视频</el-menu-item>
        <el-menu-item index="/exhibition_views/exhibition-phg">摄影</el-menu-item>
        <el-menu-item index="/exhibition_views/exhibition-vision">视觉</el-menu-item>
      </el-menu>
    </nav>
    <main>
      <transition>
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: "exhibition",
  data() {
    return {
      curPath: ""
    };
  },
  mounted() {
    this.curPath = this.$route.path;
    this.$refs.tabs.activeIndex = this.curPath;
  }
};
</script>

<style lang="scss">
.el-menu,
.el-menu--horizontal {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  max-width: 420px;
}
.el-menu-item {
  width: 40px;
  height: 40px !important;
  line-height: 40px !important;
  padding: 0;
  margin: 0 10px !important;
}
.fixed-bg {
  background-color: #ffffff;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.van-tabs__nav {
  border-color: rgb(42, 155, 254);
  width: 50%;
  margin: 0 auto;
}
.exhibition-main {
  width: 90.67%;
  position: relative;
  margin: 0 auto;
  max-width: 420px;
}
</style>
