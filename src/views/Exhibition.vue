<template>
  <div class="exhibition">
    <nav class="ex-nav">
      <el-menu
        :default-active="curPath"
        mode="horizontal"
        router
        ref="tabs"
        active-text-color="#2a9bfe"
      >
        <el-menu-item index="/exhibition_views/exhibition-video"
          >视频</el-menu-item
        >
        <el-menu-item index="/exhibition_views/exhibition-phg"
          >摄影</el-menu-item
        >
        <el-menu-item index="/exhibition_views/exhibition-vision"
          >视觉</el-menu-item
        >
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
  name: 'exhibition',
  data() {
    return {};
  },
  computed: {
    curPath() {
      return this.$route.path;
    }
  }
  // beforeCreate() {
  //   this.$nextTick(() => {
  //     this.$el.classList.remove('router-view');
  //   });
  // },
  // beforeDestroy() {
  //   this.$nextTick(() => {
  //     this.$el.classList.add('router-view');
  //   });
  // }
};
</script>

<style lang="scss">
.exhibition {
  width: 100%;
  background-color: #ffffff;
}
.el-menu,
.el-menu--horizontal {
  border-bottom: solid 1px #e6e6e6;
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
.exhibition-main {
  width: 90.67%;
  position: relative;
  margin: 0 5%;
  max-width: 420px;
}
</style>
