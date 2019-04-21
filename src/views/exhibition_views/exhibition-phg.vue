<template>
  <div class="exhibition-phg exhibition-main">
    <div class="phg-one"></div>
    <div class="phg-list" v-if="photos.length">
      <div
        class="phg-list-item"
        v-for="(item, index) in photos"
        :key="index"
        :style="itemStyles"
      >
        <div class="item-img-wrapper">
          <img
            class="item-img-content"
            :src="['http://kuoteo.com' + item.thumbnail]"
            v-image-preview="['http://kuoteo.com' + item.media_path]"
            preview-title-enable="true"
            preview-nav-enable="true"
            :alt="item.title"
          />
        </div>
        <div class="item-info">
          <img
            class="item-info-avatar"
            :src="['http://kuoteo.com' + item.thum_header]"
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
      photos: [],
      itemStyles: []
    };
  },
  methods: {
    updateSrcs() {
      const count = 2;
      for (let i = 0; i < count; i++) {
      }
    },
    scrollHandler() {
      document.body.scrollHeight - window.innerHeight - window.scrollY <= 120 &&
        this.updateSrcs();
    },
    ajax() {
      const url = this.$http
        .get('http://kuoteo.com/api/photoshow')
        .then(res => {
          console.log(res.data.photo);
          this.photos = res.data.photo;
        });
    }
  },
  mounted() {
    this.ajax();
    document.addEventListener('scroll', this.scrollHandler);
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

