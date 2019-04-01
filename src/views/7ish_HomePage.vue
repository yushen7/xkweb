<template>
  <div class="homepage">
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="#60a6ff">
        <van-swipe-item v-for="(url,index) in bannerImgUrl" :key="index">
          <img v-lazy="url">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="subpage-l">
      <div
        class="subpage-item"
        v-for="(item,index) in itemList"
        :key="index"
        @click="enterSubPagesHandler(index)"
      >
        <div class="subpage-item-cover">
          <img :src="item.imgUrl" alt>
        </div>

        <div class="subpage-item-content">
          <h1 class="subpage-item-content-title">{{item.title}}</h1>
          <p class="subpage-item-content-introduction">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {
      bannerImgUrl: [
        require("@/assets/banner-2.png"),
        require("@/assets/banner-2.png"),
        require("@/assets/banner-2.png")
      ],
      itemList: [
        {
          title: "组织介绍",
          content: "小星空，大梦想，加入我们快速成长",
          imgUrl: require("@/assets/org-intro.png")
        },
        {
          title: "作品展",
          content: "视频、海报、周边、照片，你想要的应有尽有",
          imgUrl: require("@/assets/piece-show.png")
        },
        {
          title: "产品介绍",
          content: "APP改变校园生活",
          imgUrl: require("@/assets/pro-intro.png")
        },
        {
          title: "推文",
          content: "懂你更多",
          imgUrl: require("@/assets/ad-article.png")
        },

        {
          title: "",
          content: "",
          imgUrl: require("@/assets/ctus.png")
        }
      ],
      subPagesPath: ["/orgIntro", "/exhibition", "/proIntro", "/ad", "/ctus"]
    };
  },
  methods: {
    enterSubPagesHandler(index) {
      this.$router.push({ path: this.$data.subPagesPath[index] });
    }
  }
};
</script>

<style lang="scss" scoped>
.homepage {
  position: relative;
  margin: 10px auto 0;
  max-width: 420px;
  width: 90.67%;
}
.subpage-item {
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 5px 5px 7px #bbb;
  margin: 20px 0;
}
.subpage-item-cover {
  position: relative;
  img {
    width: 100%;
  }
}
.subpage-item-cover::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 97%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.2;
}
.subpage-item-content {
  background-color: #ffffff;
  color: #7f7f7f;
  padding: 0 18px;
  p,
  h1 {
    text-align: left;
    line-height: 8px;
  }
  .subpage-item-content-title {
    font-size: 1.25rem;
  }
  .subpage-item-content-introduction {
    font-size: 0.75rem;
  }
}
.van-swipe {
  .van-swipe-item {
    img {
      width: 100%;
      display: block;
    }
  }
}
.van-swipe__indicators {
  .van-swipe__indicator {
    width: 8px;
    height: 8px;
  }
}
</style>
