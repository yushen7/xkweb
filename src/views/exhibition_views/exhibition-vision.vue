<template>
  <div
    class="exhibition-vision exhibition-main"
    @touchstart.capture="ontouchstart"
    @touchmove.capture="ontouchmove"
  >
    <div class="vision-main">
      <vue-preview
        v-if="previewOpts.length"
        :slides="previewOpts"
        v-loading.fullscreen.lock="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      ></vue-preview>
    </div>
  </div>
</template>

<script>
import { clearInterval, setInterval, setTimeout } from 'timers';

export default {
  name: 'exhibitionVision',
  data() {
    return {
      previewOpts: [
        // {
        //   src:
        //     'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
        //   msrc:
        //     'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
        //   alt: 'picture1',
        //   title: 'Image Caption 1',
        //   w: 600,
        //   h: 400
        // }
      ],
      options: [],
      rates: [],
      wras: [],
      //计算一个页面所能盛放的div数量
      rendCount: 0,
      startI: 0,
      rendFlag: true,
      loading: true,
      isRended: 0,
      completeCount: 0,
      offset: 0,
      scrollData: {
        start: {
          x: 0,
          y: 0,
          t: 0
        },
        end: {
          x: 0,
          y: 0,
          t: 0
        },
        LIMIT: 80
      }
    };
  },
  computed:{
    isDone(){
      return this.rendFlag || !this.loading;
    }
  },
  methods: {
    ontouchstart(e) {
      if (isDone ) {
        return;
      }

      if (e.type === 'touchstart') {
        this.scrollData.start.y = e.targetTouches[0].clientY;
      }
    },
    ontouchmove(e) {
      if (isDone) {
        return;
      }

      if (e.type === 'touchmove') {
        const y = e.targetTouches[0].clientY;
        const isMoveToBottom = y - this.scrollData.start.y > 0 ? false : true;
        const isLimit =
          document.body.scrollHeight - window.innerHeight - window.scrollY <=
          this.scrollData.LIMIT
            ? true
            : false;
        this.scrollData.start.y = y;
        if (isMoveToBottom && isLimit) {
          this.rend();
        }
      }
    },
    //轮询获得图片原始尺寸
    ask(src, cb) {
      let intervalID = null;
      const status = {
        isLoaded: false,
        hasSize: false
      };
      const img = new Image();
      const cbWra = cb => {
        if (!status.isLoaded) {
          status.isLoaded = true;
          cb({
            img: img,
            status: status
          });
        }
      };
      img.src = src;
      img.className = 'fixed-img';
      if (img.complete) {
        cbWra(cb);
        return;
      }
      img.onload = () => {
        cbWra(cb);
        return;
      };

      const check = () => {
        if (img.naturalWidth || img.naturalHeight) {
          !status.hasSize &&
            cb({
              img: img,
              status: status
            });
          status.hasSize = true;
          clearInterval(intervalID);
        }
      };
      check();
      intervalID = setInterval(check, 30);
    },
    //初始化el大小
    initSize({ src, wras, index, completeCount }) {
      const innerWidth = window.innerWidth;
      const fixedRateWidth = 35;
      const wholeWidth = 94;
      const that = this;
      const cal = (curRate, offsetRate) => {
        return new Promise((resolve, reject) => {
          const rate =
            Math.round((offsetRate / (curRate + offsetRate)) * 100) - 3;
          let offsetw = rate;
          let curw = wholeWidth - offsetw;
          if (offsetw < fixedRateWidth) {
            offsetw = fixedRateWidth;

            curw = wholeWidth - fixedRateWidth;
          } else if (curw < fixedRateWidth) {
            curw = fixedRateWidth;
            offsetw = wholeWidth - fixedRateWidth;
          }
          resolve({
            curw,
            offsetw
          });
        });
      };
      const initPair = ({ img, status }) => {
        if (!status.hasSize) {
          const offset = index % 2 ? -1 : 1;
          that.rates[index] = img.naturalWidth / img.naturalHeight;
          that.previewOpts[index].w = innerWidth;
          that.previewOpts[index].h = innerWidth / that.rates[index];
          const curRate = that.rates[index];
          const offsetRate = that.rates[index + offset];
          if (offsetRate && curRate) {
            cal(curRate, offsetRate).then(dimension => {
              try {
                wras[index].style.width = dimension.curw + '%';
                wras[index + offset].style.width = dimension.offsetw + '%';
              } catch (err) {
                console.log('err:%o + wras:%o + index:%d', err, wras, index);
              }
            });
          }
        }
        if (status.isLoaded)
          this.loading = ++this.completeCount >= completeCount ? false : true;
      };
      that.ask(src, initPair);
    },
    ajax() {
      const url = '/visionshow';
      const prefix = this.$prefixUrl;
      this.$http
        .get(url)
        .then(res => {
          for (let i of res.data) {
            this.options.push({
              src: prefix + i.img_path,
              msrc: prefix + i.thumbnail,
              alt: i.title,
              title: i.title,
              w: 375,
              h: 375
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    rend() {
      //一次要渲染的数组
      const rendArr = this.options.slice(
        this.startI,
        this.startI + this.rendCount
      );
      this.rendFlag = rendArr.length == 0 ? false : true;
      //判断是否加载完
      if (!this.rendFlag) return;
      //取得实际渲染的个数
      this.offset = rendArr.length;
      this.loading = true;
      this.previewOpts.push(...rendArr);
      const start = this.startI;
      this.$nextTick(() => {
        const wras = document.querySelectorAll('figure');
        Array.prototype.forEach.call(rendArr, (item, index) => {
          this.initSize({
            src: item.msrc,
            wras: wras,
            index: start + index,
            completeCount: start + this.offset
          });
        });
      });
      this.startI += this.offset;
    }
    // scrollHandler() {
    //   if (
    //     this.scrollData.flag &&
    //     this.rendFlag &&
    //     !this.loading &&
    //     document.body.scrollHeight - window.innerHeight - window.scrollY <= 120
    //   ) {
    //     this.rend();
    //   }
    // }
  },
  mounted() {
    //计算一个页面能盛放的div个数
    //使用window.innerHeight - navigation的高度 除以 div高度（120px） + 上下外边距（15px）
    const navHeight = 40;
    this.rendCount = Math.ceil((window.innerHeight - navHeight) / 135) * 2;
    this.ajax();
    setTimeout(() => {
      this.loading = false;
      this.rend();
      // document.addEventListener('scroll', this.scrollHandler);
    }, 500);
  }
};
</script>

<style lang="scss">
main {
  position: relative;
}
.exhibition-vision {
  overflow-x: hidden;
}
figure {
  width: 47%;
  height: 120px;
  margin: 7.5px 1.5%;
  border-radius: 10px;
  float: left;
  overflow: hidden;
  box-shadow: 5px 5px 5px #eee;
  transition: width 0.5s ease-in-out;
  background-color: #ffffff;
  img {
    display: block;
    width: 100%;
    height: 100%;
    transition: opacity 0.6s ease-in-out;
    animation: fadein 1s 1;
  }
}
.loading-bg {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
}
.vision-main {
  margin-bottom: 10px;
}
// .vision-img-item-wrapper {
//   width: 47%;
//   height: 120px;
//   margin: 7.5px 1.5%;
//   border-radius: 10px;
//   float: left;
//   overflow: hidden;
//   box-shadow: 5px 5px 5px #eee;
//   transition: width 0.5s ease-in-out;
//   background-color: #ffffff;
// }
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

