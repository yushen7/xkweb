<template>
  <div class="homepage">
    <div class="hp-cont">
      <div class="hp-banner" v-if="isImgsReady">
        <swiper :options="swpOption" ref="hswp">
          <swiper-slide
            class="hp-banner-slide-item"
            v-for="item in bannerData"
            :key="item.url"
          >
            <a :href="item.url">
              <img :src="item.img_path" :alt="item.title" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <div class="subpage-l" v-if="itemList.length">
        <div
          :class="{ 'subpage-item': true, rela: item.hover }"
          v-for="(item, index) in itemList"
          @click="enterSubPagesHandler(index)"
          :key="index"
        >
          <div
            class="subpage-item-cover"
            v-lazy:background-image="item.img_path"
            :style="{ backgroundImage: 'url(' + item.img_path + ')' }"
          >
            <!-- <img :src="item.img_path" alt v-lazy="item.img_path" /> -->
          </div>

          <div class="subpage-item-content" v-if="!item.hover">
            <h1 class="subpage-item-content-title">{{ item.title }}</h1>
            <p class="subpage-item-content-introduction">{{ item.s_title }}</p>
          </div>
          <div class="subpage-item-content-hover " v-else>
            <div class="hover-title">
              <p>
                {{ item.en }}
              </p>
              <p>
                {{ item.title }}
              </p>
            </div>
            <div class="hover-content">
              <p>
                {{ item.s_title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data() {
    return {
      swpOption: {
        free: false,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        init: true
      },
      bannerData: [],
      isImgsReady: false,
      itemList: [],
      subPagesPath: [
        '/orgIntro',
        '/exhibition_views/exhibition-vision',
        '/proIntro',
        '/ad',
        '/ctus'
      ],
      subPageItem: 'subpage-item'
    };
  },
  beforeCreate() {
    const url = '/homepageshow';
    this.$http.get(url).then(res => {
      const banner = res.data.homebanner;
      const content = res.data.homecontent;
      this.bannerData = banner;
      this.itemList = content;

    for (let i of content) {
      this.itemList[this.itemList.length - 1].hover = false;
    }

      this.itemList[this.itemList.length - 1].hover = true;
      this.itemList[this.itemList.length - 1].en = 'CONTACT US';
      this.isImgsReady = true;
    });
    // setTimeout(()=>{
    //    this.$refs.hswp.swiper.init();

    // },2000);
  },
  beforeDestroy() {
    this.$el.classList.add('router-view');
  },
  methods: {
    enterSubPagesHandler(index) {
      this.$router.push({ path: this.$data.subPagesPath[index] });
    }
  }
};
</script>

<style lang="scss">
// .fixed-bg {
//   background-color: #e2e2e2;
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   transition: background-color 0.5s ease-in-out;
// }
.homepage {
  width: 100%;
  background-color: #e2e2e2;
}
.hp-cont {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  max-width: 420px;
  width: 90%;
}
.subpage-item {
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 1px 4px 5px #bbb;
  margin: 20px 0;
}
.subpage-item-cover {
  position: relative;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 0.3s ease-in-out;
  img {
    height: 100%;
    width: 100%;
    display: block;
  }
}
.subpage-item-cover[lazy='loading'] {
  background-color: #1989fa;
  background-size: 44px 44px;
}
.subpage-item-cover[lazy='loaded'] {
  opacity: 1;
}
.rela {
  position: relative;
}
.subpage-item-cover::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.1;
  transition: background-color 0.5s ease-in-out;
}
.subpage-item-content {
  background-color: #ffffff;
  color: #7f7f7f;
  padding: 10px 18px;
  p,
  h1 {
    text-align: left;
    margin: 0;
  }
  .subpage-item-content-title {
    color: #000;
    font-size: 1.25rem;
    margin-bottom: 5px;
  }
  .subpage-item-content-introduction {
    font-size: 0.75rem;
  }
}
.subpage-item-content-hover {
  position: absolute;
  width: 96%;
  height: 100%;
  top: 0;
  left: 0;
  margin-left: 4%;
  text-align: left;
  .hover-title {
    margin-top: 12px;
    position: inherit;
    p {
      margin: 0;
    }
    p:nth-child(1) {
      font-size: 0.75rem;
      color: #dddddd;
    }
    p:nth-child(2) {
      color: #ffffff;
      font-size: 1.5rem;
    }
  }
  .hover-content {
    position: inherit;
    font-size: 0.75rem;
    bottom: 0;
    color: #dddddd;
  }
}
.swiper-pagination-bullet {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.swiper-pagination-bullet-active {
  border-radius: 25% !important;
  transform: scaleX(2);
  background-color: #60a6ff !important;
  opacity: 1;
}
.hp-banner {
  width: 100%;
  .swiper-container {
    height: 130px;
  }
}
.hp-banner-slide-item {
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    display: block;
    border-radius: 20px;
  }
}
.hp-banner-slide-item {
  transition: 0.2s transform ease-in-out;
}
.swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.8);
}
</style>
