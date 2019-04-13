<template>
  <el-menu mode="horizontal" router default-active="1">
    <el-menu-item index="/exhibition_views/exhibition-video">视频</el-menu-item>
    <el-menu-item index="/exhibition_views/exhibition-phg">摄影</el-menu-item>
    <el-menu-item index="/exhibition_views/exhibition-vision">视觉</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  mounted() {
    console.log(this.$router);
  }
};
</script>

<style lang="scss">
</style>
