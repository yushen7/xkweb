<template>
  <div class="exhibition-phg exhibition-main">
    <div class="phg-one"></div>
    <div class="phg-list">
      <div class="phg-list-item" v-for="(item,index) in srcs" :key="index" :style="itemStyles">
        <div class="item-img-wrapper">
          <img class="item-img-content" :src="item" alt>
        </div>
        <div class="item-info">
          <img class="item-info-avatar" :src="authors[index]" alt="zzz">
          <div class="item-info-content">
            <p class="item-info-author">Zephyr</p>
            <p class="item-info-tag">摄影/摆拍/etc</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exhibition-phg",
  data() {
    return {
      srcs: [
        require("@/assets/photo-imgs/huangjiafu_photo1.jpg"),
        require("@/assets/photo-imgs/huangjiafu_photo1.jpg"),
        require("@/assets/photo-imgs/huangjiafu_photo2.jpg"),
        require("@/assets/photo-imgs/huangjiafu_photo3.jpg"),
        require("@/assets/photo-imgs/huangjiafu_photo4.jpg"),
        require("@/assets/photo-imgs/huangjiafu_photo5.jpg"),
        require("@/assets/photo-imgs/huangjiafu_photo6.jpg"),
        require("@/assets/photo-imgs/huangjiafu_photo7.jpg"),
        require("@/assets/photo-imgs/huangjiafu_photo8.jpg"),
        require("@/assets/photo-imgs/huangjiafu_photo9.jpg"),
        require("@/assets/photo-imgs/moleling_photo5.jpg"),
        require("@/assets/photo-imgs/moleling_photo6.jpg"),
        require("@/assets/photo-imgs/moleling_photo7.jpg"),
        require("@/assets/photo-imgs/moleling_photo8.jpg"),
        require("@/assets/photo-imgs/moleling_photo9.jpg")
      ],
      authors: [
        require("@/assets/photo-imgs/huangjiafu.jpg"),
        require("@/assets/photo-imgs/moleling.jpg")
      ],
      itemStyles: []
    };
  },
  methods: {
    updateSrcs() {
      const count = 2;
      for (let i = 0; i < count; i++) {
        const src = require("@/assets/photo-imgs/moleling_photo9.jpg");
        this.srcs.push(src);
      }
    },
    scrollHandler() {
      document.body.scrollHeight - window.innerHeight - window.scrollY <= 120 &&
        this.updateSrcs();
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollHandler);
  }
};
</script>

<style lang="scss" scoped>
$mg-lr: 4.5%;
img {
  display: block;
}
.phg-one {
  width: 96%;
}
.phg-list {
  column-count: 2;
  column-gap: $mg-lr;
}
.phg-one,
.phg-list-item {
  box-shadow: 4px 4px 4px #eee;
  margin: 10px 0;
  border-radius: 10px;
}
.phg-list-item {
  box-sizing: border-box;
  break-inside: avoid;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  .item-info {
    img {
      width: 23px;
      height: 23px;
      padding: 0 5px;
      float: left;
      border-radius: 100%;
    }
    p {
      text-align: left;
      line-height: 75%;
      font-size: 0.75rem;
    }
  }
  .item-img-wrapper {
    img {
      width: 100%;
    }
  }
}
</style>

