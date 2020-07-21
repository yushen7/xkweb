<template>
  <div class="ex-video exhibition-main">
    <div class="ex-video-main">
      <div class="ex-video-banner" v-if="videoIngs.length">
        <swiper
          :options="curSwiperOption"
          ref="curSwiper"
          @slidePrevTransitionStart="callHsySlidePrev"
          @slideNextTransitionStart="callHsySlideNext"
        >
          <swiper-slide
            class="banner-slide-item"
            v-for="(item, index) in videoIngs"
            :key="index"
          >
            <div class="banner-video-wrapper">
              <video-player
                class="video-palyer-box"
                ref="vp"
                :options="vpOptions[index]"
                @ready="videoReadyHandler"
              ></video-player>
            </div>
          </swiper-slide>
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        </swiper>
      </div>

      <div class="ex-video-content" v-if="videoHeaders.length">
        <swiper :options="hsySwiperOption" ref="hsySwiper">
          <!-- slides -->
          <swiper-slide
            class="content-slide-item"
            v-for="(current, currentIndex) in videoHeaders"
            :key="currentIndex"
            :id="['ex-video-content' + currentIndex]"
          >
            <div class="video-info">
              <div class="author-info">
                <div
                  class="author-info-avatar"
                  :style="{
                    backgroundImage: 'url(' + current[0].media_path + ')'
                  }"
                >
                  <!-- <img class="avatar-img" :src="current[0].media_path" alt /> -->
                </div>

                <div class="author-info-content">
                  <p class="author-name">{{ current[0].title }}</p>
                  <p class="author-tag">
                    {{ videoIngs[currentIndex][0].author }}
                  </p>
                </div>
              </div>
              <div class="video-intro">
                <p class="video-intro-title">
                  {{ videoIngs[currentIndex][0].title }}
                </p>
                <p class="video-intro-content">
                  {{ videoIngs[currentIndex][0].content }}
                </p>
              </div>
            </div>
            <div class="video-history hsy-list">
              <div
                class="hsy-item"
                v-for="(item, index) in videoJumps[currentIndex]"
                :key="index"
              >
                <div class="hsy-item-img-wrapper">
                  <a :href="item.url">
                    <img
                      class="hsy-item-cover"
                      :src="item.media_path"
                      v-lazy="item.media_path"
                      alt
                    />
                  </a>
                </div>
                <div class="hsy-item-content">
                  <p class="hsy-item-intro">{{ item.content }}</p>
                  <div class="hsy-item-tag">
                    <span class="hsy-item-tag-1">{{ item.tag }}</span>
                    <p class="hsy-item-tag-2"></p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';
export default {
  name: 'exVideo',
  data() {
    return {
      count: 0,
      videoHeaders: [],
      videoIngs: [],
      videoJumps: [],
      curSwiperOption: {
        free: true,
        loop: false,
        init: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      hsySwiperOption: {
        free: false,
        loop: true,
        allowTouchMove: false
      },
      //video的相关配置
      vpOptions: []
    };
  },
  created() {
    const url = '/videoshow';
    this.$http
      .get(url)
      .then(res => {
        console.log(res)
        this.videoHeaders = res.data.video.videoheader;
        this.videoIngs = res.data.video.videoing;
        this.videoJumps = res.data.video.videojump;
        const forEach = Array.prototype.forEach;
        forEach.call(this.videoIngs, item => {
          //videoPlayer的初始化
          this.vpOptions.push({
            muted: true,
            language: 'zh_cn',
            playbackRates: [0.5, 1.0, 1.5, 2.0],
            sources: [
              {
                type: 'video/mp4',
                src: item[0].url
              }
            ],
            poster: item[0].media_path,
            playsinline: true,
            aspectRatio: '16:9',
            nativeControlsForTouch: true
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    callHsySlidePrev() {
      this.$refs.hsySwiper.swiper.slidePrev();
    },
    callHsySlideNext() {
      this.$refs.hsySwiper.swiper.slideNext();
    },
    videoReadyHandler() {
      //等到videoPlayer初始化完成后再进行swiper的初始化
      //否则在loop模式下会造成第一张video和最后一张video没有src的情况
      this.$refs.curSwiper.swiper.init();
    }
  },
  mounted() {
    this.$parent.$el.style.overflowX = 'auto';
  },
  beforeDestroy() {
    this.$parent.$el.style.overflowX = 'hidden';
  },
  components: {
    videoPlayer
  }
};
</script>

<style lang="stylus" scoped>
.author-info
  display flex
  text-align left
  .author-info-avatar
    width 44px
    height 44px
    margin-right 5%
    border-radius 20px
    border 1px solid #eee
    margin-top 15px
    background-size cover
    background-position center center
    img
      width 100%
      height 100%


  .author-info-content
    p:nth-child(1)
      font-size 1rem
      line-height 95%

    p:nth-child(2)
      font-size 0.75rem
      color #bbb
      line-height 50%



.video-info
  border-bottom 1.2px solid #eee

.video-intro
  text-align left
  .video-intro-title
    font-size 1rem

  .video-intro-content
    font-size 0.75rem
    line-height 2


.hsy-list
  text-align left

.hsy-item
  margin 5px auto
  height 80px
  display flex

.hsy-item-img-wrapper
  box-sizing border-box
  width 35%
  height 66px
  padding-right 5%
  a
    img
      width 100%
      height 100%
      display block
      border-radius 10px



.hsy-item-content
  position relative
  width 65%
  font-size 0.75rem
  border-bottom 1.2px solid #eee
  p
    margin-top 5px


.hsy-item-tag
  display flex
  position absolute
  bottom 5px
  span
    font-size 0.75rem
    color #3a8ffc
    border 1px solid #3a8ffc
    border-radius 5px
    padding 3px 5px


.ex-video-banner
  padding 12px 0

.banner-video-wrapper
  display inline-block
  width 100%

.swiper-slide
  video
    border-radius 20px

  transition all 0.5s ease-in-out

.swiper-slide:not(.swiper-slide-active)
  transform scale(0.8)

.video-palyer-box
  border-radius 15px
  overflow hidden

.swiper-prev,
.swiper-next
  outline none

</style>
