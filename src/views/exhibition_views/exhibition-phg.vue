<template>
  <div
    class="exhibition-phg exhibition-main"
    @touchstart.capture="ontouchstart"
    @touchmove.capture="ontouchmove"
  >
    <div class="phg-one"></div>
    <van-image-preview
      v-model="preview.show"
      :images="preview.images"
      :start-position="preview.startPosition"
      :lazy-load="preview.lazyLoad"
      @change="previewOnChangeHandler"
    >
    </van-image-preview>
    <div
      class="phg-list"
      v-if="photos.length"
      v-loading.fullscreen.lock="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <div
        class="phg-list-item"
        v-for="(item, index) in photos"
        @click="showBig"
        :key="index"
      >
        <div class="item-img-wrapper">
          <img
            class="item-img-content"
            :alt="item.title"
            :index="index"
            v-lazy="item.thumbnail"
            @load.capture.prevent="imageOnLoadHandler"
          />
        </div>
        <div class="item-info">
          <img
            class="item-info-avatar"
            v-lazy="item.thum_header"
            :alt="item.title"
          />
          <div class="item-info-content">
            <p class="item-info-author">{{ item.author }}</p>
            <p class="item-info-tag">{{ item.tag }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exhibition-phg',
  data() {
    return {
      tmpPhotos: [],
      photos: [],
      preview: {
        images: [],
        show: false,
        startPosition: 0,
        lazyLoad: true
      },
      scrollData: {
        start: {
          x: 0,
          y: 0,
          t: Date.now()
        },
        end: {
          x: 0,
          y: 0,
          t: 0
        },
        LIMIT: 80
      },
      rendFlag: true,
      rendCount: 8,
      startI: 0,
      loading: true,
      imageOnLoadCount: 0,
      LASTe: null
    };
  },
  methods: {
    imageOnLoadHandler(e) {
      if (e.target.getAttribute('lazy') !== 'loaded') return;

      ++this.imageOnLoadCount;
      //因为有些图片不在视界内，会被v-lazy指令判定为loading不加载，所以此时this.rendcount - 2治标不治本=-=
      if (this.imageOnLoadCount >= this.rendCount - 2) {
        this.imageOnLoadCount = 0;
        this.loading = false;
      }
    },
    ontouchstart(e) {
      if (!this.rendFlag) {
        return;
      }
      if (e.type === 'touchstart') {
        this.scrollData.start.y = e.targetTouches[0].clientY;
      }
    },
    ontouchmove(e) {
      if (
        !this.rendFlag ||
        (Date.now() - this.scrollData.start.t) / 1000 <= 1 ||
        this.loading
      ) {
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
          this.updateSrcs();
        }
      }
    },
    showBig(e) {
      e.preventDefault();
      this.preview.show = true;
      this.preview.startPosition = parseInt(e.target.getAttribute('index'));
    },
    updateSrcs() {
      if (this.startI >= this.tmpPhotos.length) {
        this.rendFlag = false;
        return;
      }
      this.loading = true;
      this.photos.push(
        ...this.tmpPhotos.slice(this.startI, this.startI + this.rendCount)
      );
      this.startI += this.rendCount;
      this.scrollData.start.t = Date.now();
    },
    ajax() {
      const url = '/photoshow';
      this.$http.get(url).then(res => {
        const photos = res.data.photo;
        for (let i of photos) {
          i.thum_header =  i.thum_header;
          i.thumbnail =  i.thumbnail;
          i.media_path =  i.media_path;
          this.preview.images.push(i.media_path);
        }
        this.tmpPhotos = photos;
        this.updateSrcs();
      });
    },
    previewOnChangeHandler(index) {
      this.imageIndex = index;
    }
  },
  mounted() {
    this.ajax();
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollHandler);
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

