<template>
  <div class="exhibition">
    <div class="fixed-bg"></div>
    <nav class="ex-nav">
      <van-tabs
        v-model="active"
        animated
        title-active-color="#2a9bfe"
        title-inactive-color="#666666"
        color="#2a9bfe"
      >
        <van-tab title="视频">
          <Vid/>
        </van-tab>

        <van-tab title="摄影">
          <Phg/>
        </van-tab>
        <van-tab title="视觉" lazy-render="false">
          <Vision/>
        </van-tab>
      </van-tabs>
    </nav>
  </div>
</template>

<script>
import Vision from "@/components/exhibition-vision";
import Phg from "@/components/exhibition-phg";
import Vid from "@/components/exhibition-video";
export default {
  name: "exhibition",
  data() {
    return {
      active: 1
    };
  },
  components: {
    Vision,
    Phg,
    Vid
  },
  mounted() {}
};
</script>

<style lang="scss">
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
