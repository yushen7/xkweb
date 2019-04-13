<template>
  <div class="exhibition-vision exhibition-main">
    <div class="vision-main"></div>
    <div
      class="loading-bg"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      v-show="loading"
    ></div>
  </div>
</template>

<script>
import { clearInterval, setInterval, setTimeout } from "timers";
export default {
  name: "exhibitionVision",
  /*
  props:{
    items:[]
  },*/
  data() {
    return {
      //items的内容放在父组件获取，通过props传进来
      items: [
        require("@/assets/vision-imgs/vision1.jpg"),
        require("@/assets/vision-imgs/vision2.jpg"),
        require("@/assets/vision-imgs/vision3.jpg"),
        require("@/assets/vision-imgs/vision4.jpg"),
        require("@/assets/vision-imgs/vision5.jpg"),
        require("@/assets/vision-imgs/vision6.jpg"),
        require("@/assets/vision-imgs/vision7.jpg"),
        require("@/assets/vision-imgs/vision8.jpg"),
        require("@/assets/vision-imgs/vision9.jpg"),
        require("@/assets/vision-imgs/vision10.jpg"),
        require("@/assets/vision-imgs/vision11.jpg"),
        require("@/assets/vision-imgs/vision12.jpg"),
        require("@/assets/vision-imgs/vision13.jpg"),
        require("@/assets/vision-imgs/vision14.jpg"),
        require("@/assets/vision-imgs/vision15.jpg"),
        require("@/assets/vision-imgs/vision16.jpg"),
        require("@/assets/vision-imgs/vision17.jpg"),
        require("@/assets/vision-imgs/vision18.jpg"),
        require("@/assets/vision-imgs/vision19.jpg"),
        require("@/assets/vision-imgs/vision20.jpg"),
        require("@/assets/vision-imgs/vision21.jpg"),
        require("@/assets/vision-imgs/vision22.jpg"),
        require("@/assets/vision-imgs/vision23.jpg"),
        require("@/assets/vision-imgs/vision24.jpg"),
        require("@/assets/vision-imgs/vision25.jpg"),
        require("@/assets/vision-imgs/vision26.jpg"),
        require("@/assets/vision-imgs/vision27.jpg"),
        require("@/assets/vision-imgs/vision28.jpg"),
        require("@/assets/vision-imgs/vision29.jpg"),
        require("@/assets/vision-imgs/vision30.jpg"),
        require("@/assets/vision-imgs/vision31.jpg"),
        require("@/assets/vision-imgs/vision32.jpg"),
        require("@/assets/vision-imgs/vision1.jpg"),
        require("@/assets/vision-imgs/vision2.jpg"),
        require("@/assets/vision-imgs/vision3.jpg"),
        require("@/assets/vision-imgs/vision4.jpg"),
        require("@/assets/vision-imgs/vision5.jpg"),
        require("@/assets/vision-imgs/vision6.jpg"),
        require("@/assets/vision-imgs/vision7.jpg"),
        require("@/assets/vision-imgs/vision8.jpg"),
        require("@/assets/vision-imgs/vision9.jpg"),
        require("@/assets/vision-imgs/vision10.jpg"),
        require("@/assets/vision-imgs/vision11.jpg"),
        require("@/assets/vision-imgs/vision12.jpg"),
        require("@/assets/vision-imgs/vision13.jpg"),
        require("@/assets/vision-imgs/vision14.jpg"),
        require("@/assets/vision-imgs/vision15.jpg"),
        require("@/assets/vision-imgs/vision16.jpg"),
        require("@/assets/vision-imgs/vision17.jpg"),
        require("@/assets/vision-imgs/vision18.jpg"),
        require("@/assets/vision-imgs/vision19.jpg"),
        require("@/assets/vision-imgs/vision20.jpg"),
        require("@/assets/vision-imgs/vision21.jpg"),
        require("@/assets/vision-imgs/vision22.jpg"),
        require("@/assets/vision-imgs/vision23.jpg"),
        require("@/assets/vision-imgs/vision24.jpg"),
        require("@/assets/vision-imgs/vision25.jpg"),
        require("@/assets/vision-imgs/vision26.jpg"),
        require("@/assets/vision-imgs/vision27.jpg"),
        require("@/assets/vision-imgs/vision28.jpg"),
        require("@/assets/vision-imgs/vision29.jpg"),
        require("@/assets/vision-imgs/vision30.jpg"),
        require("@/assets/vision-imgs/vision31.jpg"),
        require("@/assets/vision-imgs/vision32.jpg")
      ],
      rates: {},
      imgWrappers: [],
      //计算一个页面所能盛放的div数量
      rendCount: 0,
      itemsIndex: 0,
      rendFlag: true,
      loading: true,
      isRended: 0
    };
  },
  computed: {},
  created() {},
  watch: {
    rendFlag() {
      document.removeEventListener("scroll", this.scrollHandler);
    }
  },
  methods: {
    getRate(url, index) {
      const fixedRateWidth = 35;
      const wholeWidth = 94;
      const that = this;
      let intervalID = null;
      let isDone = false;
      const count = offset => {
        const preRate = this.rates[`${index + offset}`];
        const curRate = this.rates[`${index}`];
        const rate = Math.round((preRate / (curRate + preRate)) * 100) - 3;
        let preRateWidth = rate;
        let curRateWidth = wholeWidth - preRateWidth;
        if (preRateWidth < fixedRateWidth) {
          preRateWidth = fixedRateWidth;
          curRateWidth = wholeWidth - fixedRateWidth;
        } else if (curRateWidth < fixedRateWidth) {
          curRateWidth = fixedRateWidth;
          preRateWidth = wholeWidth - fixedRateWidth;
        }

        this.imgWrappers[index].style.width = curRateWidth + "%";
        this.imgWrappers[index + offset].style.width = preRateWidth + "%";
      };
      const layout = () => {
        this.rates[`${index}`] = img.naturalWidth / img.naturalHeight;
        index % 2 &&
          this.rates[`${index}`] &&
          this.rates[`${index - 1}`] &&
          count(-1);
        !(index % 2) &&
          this.rates[`${index}`] &&
          this.rates[`${index + 1}`] &&
          count(1);
        clearInterval(intervalID);
        isDone = true;
      };
      const img = new Image();
      img.src = url;
      img.className = "fixed-img";

      img.onload = () => {
        that.isRended++;
        that.imgWrappers[index].appendChild(img);
        console.log(that.itemsIndex);
        that.isRended == that.itemsIndex && (that.loading = false);
      };
      if (img.complete) {
        !isDone && layout();
      }

      const check = () => {
        if (img.naturalWidth || img.naturalHeight) {
          !isDone && layout();
          clearInterval(intervalID);
        }
      };
      check();
      intervalID = setInterval(check, 30);
    },
    appendImgWrappers(mountedEl = this.$el, count = 2) {
      let i = 0;
      for (; i < count; i++) {
        let imgWrapper = document.createElement("div");
        imgWrapper.className = "vision-img-item-wrapper";
        imgWrapper.setAttribute("index", this.itemsIndex + i);
        this.imgWrappers.push(imgWrapper);
        mountedEl.appendChild(imgWrapper);
      }
    },
    rend() {
      const rendArr = this.items.slice(
        this.itemsIndex,
        this.itemsIndex + this.rendCount
      );
      this.rendFlag = rendArr.length == 0 ? false : true;
      //判断是否加载完
      if (!this.rendFlag) return;
      this.loading = true;

      this.appendImgWrappers(this.$el.firstChild, rendArr.length);
      Array.prototype.forEach.call(rendArr, (item, index) => {
        this.getRate(item, this.itemsIndex + index);
      });
      this.itemsIndex += rendArr.length;
    },
    scrollHandler() {
      this.rendFlag &&
        !this.loading &&
        document.body.scrollHeight - window.innerHeight - window.scrollY <=
          120 &&
        this.rend();
    }
  },

  mounted() {
    //计算一个页面能盛放的div个数
    //使用window.innerHeight - navigation的高度 除以 div高度（120px） + 上下外边距（15px）
    const navHeight = 40;
    this.rendCount = Math.ceil((window.innerHeight - navHeight) / 135) * 2;
    setTimeout(() => {
      this.loading = false;
      this.rend();
      document.addEventListener("scroll", this.scrollHandler);
    }, 500);
  },
  render() {}
};
</script>

<style lang="scss">
.loading-bg {
  position: fixed;
  z-index: 2000;
  bottom: 0;
  width: 100%;
  height: 100%;
  max-width: 420px;
  transition: opacity 0.5s ease-in-out;
}
.vision-main {
  margin-bottom: 10px;
}
.vision-img-item-wrapper {
  width: 47%;
  height: 120px;
  margin: 7.5px 1.5%;
  border-radius: 10px;
  float: left;
  overflow: hidden;
  box-shadow: 5px 5px 5px #eee;
  transition: width 0.5s ease-in-out;
  background-color: #ffffff;
}
.fixed-img {
  display: block;
  width: 100%;
  height: 100%;
  transition: opacity 0.6s ease-in-out;
  animation: fadein 1s 1;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

