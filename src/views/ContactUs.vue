<template>
  <div class="ctus">
    <div class="fixed-bg"></div>
    <main class="ctus-content">
      <div class="content-item" v-for="(item,index) in items" :key="index">
        <div class="item-icon">
          <img :src="item.icon" :alt="item.alt">
        </div>
        <p>{{item.content}}</p>
      </div>
    </main>
    <footer class="copyright">
      <p>{{flag}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ctus",
  data() {
    return {
      items: [
        {
          icon: require("@/assets/email.png"),
          content: "xiaozhi_yx@kidultyx.com",
          alt: "邮箱"
        },
        {
          icon: require("@/assets/phone.png"),
          content: "18312014102",
          alt: "电话"
        },
        {
          icon: require("@/assets/location.png"),
          content: "华南理工大学广州学院行政楼801",
          alt: "位置"
        }
      ],
      flag: "星空学生创新中心| Copyright©2006-2019"
    };
  }
};
</script>

<style lang="scss" scoped>
//根据窗口宽度做了一下适配 1vh = 1窗口高度/100
* {
  color: #ffffff;
}
.fixed-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -1;
  background-image: url("../assets/ctus-bg.png");
  background-size: 100% 100%;
}
// html {
//   background-image: url("../assets/ctus-bg.png");
//   background-size: 100% 100%;
//   height: 100%;
// }
main {
  margin-top: 22.48875562218891vh;
}
.content-item {
  padding-bottom: 2.998500749625187vh;
  p {
    font-size: 2.39880059970015vh;
    line-height: 2.998500749625187vh;
  }
}
.copyright {
  font-size: 1.799100449775112vh;
  position: fixed;
  bottom: 2.998500749625187vh;
  width: 100%;
}
</style>
