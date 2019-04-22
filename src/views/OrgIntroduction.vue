<template>
  <div class="Application">
    <div class="header">
      <img :src="code.icon" class="headImg" />
      <p class="dec">{{ code.dec }}</p>
    </div>
    <div class="container">
      <div class="section">
        <h2>{{ code.section_1 }}</h2>
        <p class="detail">{{ code.detail_1 }}</p>
      </div>
      <div class="section">
        <h2>{{ code.section_2 }}</h2>
        <p class="detail">{{ code.detail_2 }}</p>
      </div>
      <div class="section">
        <h2>{{ code.section_3 }}</h2>
        <p class="detail">{{ code.detail_3 }}</p>
      </div>
    </div>
    <div class="fixed-bg"></div>
  </div>
</template>

<script>
export default {
  name: 'OrgIntrobution',
  components: {},
  data() {
    return {
      code: this.$route.params.id
    };
  },
  computed: {},
  methods: {},
  beforeCreate: function() {
    this.$nextTick(function() {
      let html = document.getElementsByTagName('body')[0];
      (html.style.backgroundImage =
        'url(' + require('@/assets/introductionBg.jpg') + ')'), // eslint-disable-line
        (html.style.backgroundSize = 'cover');
      html.style.backgroundRepeat = 'no-repeat';
      html.style.zIndex = '100';
    });
  },
  beforeDestroy: function() {
    let html = document.getElementsByTagName('body')[0];
    html.style.backgroundImage = 'none';
  }
};
</script>

<style scoped>
.headImg {
  margin: 0 auto;
  margin-top: 20px;
  height: 23vh;
}
.header {
  width: 100%;
  height: 33vh;
  text-align: center;
  box-shadow: 2px -134px 116px -36px rgba(217, 213, 213, 0.75) inset;
  -webkit-box-shadow: 2px -134px 116px -36px rgba(217, 213, 213, 0.75) inset;
  -moz-box-shadow: 2px -134px 106px -36px rgba(217, 213, 213, 0.75) inset;
}
.dec {
  color: rgb(255, 255, 255);
  font-size: 2.2vh;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
}
.container {
  margin-top: 10px;
}
.section {
  margin: 0 auto;
  margin-top: 6vh;
  width: 86%;
}
h2 {
  color: #006699;
  font-size: 2.6vh;
  font-weight: 900;
}
.detail {
  margin-top: 5px;
  color: #6d6a6a;
  font-size: 2vh;
  line-height: 3vh;
}
.fixed-bg {
  background-color: #ffffff;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
