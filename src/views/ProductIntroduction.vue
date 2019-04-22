<template>
  <div class="Application">
    <application v-for="item in list" :key="item.id" :list="item"></application>
  </div>
</template>

<script>
import application from './pro_views/applicationItem';
import xingHope from '../assets/xingHope.png';
import jueqian from '../assets/jueqian.png';
import xingCard from '../assets/xingCard.png';
import xingYaoqing from '../assets/xingYaoqing.png';
import xingYin from '../assets/xingYin.png';

export default {
  name: 'init',
  components: {
    application
  },
  data() {
    return {
      list: [
        {
          src: xingHope,
          title: '星愿',
          dec: '让他人实现你的愿望'
        },
        {
          src: xingCard,
          title: '星名片',
          dec: '校内通讯录'
        },
        {
          src: jueqian,
          title: '觉浅',
          dec: '校内技术交流论坛'
        },
        {
          src: xingYaoqing,
          title: '星邀请',
          dec: '华广毕业季邀请函'
        },
        {
          src: xingYin,
          title: '猩印',
          dec: '华广毕业季邀请函'
        }
      ]
    };
  },
  computed: {},
  methods: {},
  beforeCreate: function() {
    this.$nextTick(function() {
      let html = document.getElementsByTagName('body')[0];
      html.style.background = '#e8e8e8';
    });
  }
};
</script>

<style scoped>
.Application {
  margin: 0;
  padding: 0;
  background: #e8e8e8;
}
</style>
