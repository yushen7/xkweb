<template>
  <div class="ctus">
    <main class="ctus-content">
      <div class="content-item" v-for="(item,index) in items" :key="index">
          
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: require("@/assets/email.png"),
          content: "xiaozhi_yx@kidultyx.com"
        },
        { icon: require("@/assets/phone.png"), content: "18312014102" },
        {
          icon: require("@/assets/location.png"),
          content: "华南理工大学广州学院行政楼801"
        }
      ],
      flag: "星空学生创新中心| Copyright©2006-2019"
    };
  }
};
</script>

<style lang="scss">
html {
  background-image: url("");
}
</style>
