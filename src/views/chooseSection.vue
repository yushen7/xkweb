<template>
  <div class="mid-center">
    <div class="stack-wrapper">
      <stack ref="stack" :stackinit="stackinit"></stack>
    </div>
  </div>
</template>
<script>
import stack from './org_intro_views/stack';
import cardOne from '../assets/card_1bu_03.png';
import cardTwo from '../assets/card_2bu_03.png';
import cardThree from '../assets/card_3bu_03.png';
export default {
  name: 'chooseSection',
  data() {
    return {
      someList: [],
      stackinit: {
        visible: 3
      }
    };
  },
  mounted() {
    let that = this;
    setTimeout(function() {
      that.someList = [
        {
          html: '<img src="' + cardOne + '" alt="01" @click="change">',
          name: this.code
        },
        {
          html: '<img src="' + cardTwo + '" alt="02" @click="change">',
          name: this.media
        },
        {
          html: '<img src="' + cardThree + '" alt="03" @click="change(judge)">',
          name: this.judge
        }
      ];
    }, 500);
  },
  components: {
    stack
  },
  methods: {
    change() {},
    prev() {
      this.$refs.stack.$emit('prev');
    },
    next() {
      this.$refs.stack.$emit('next');
    }
  }
};
</script>
<style lang="scss" scoped>
.mid-center {
  width: 100%;
}
.stack-wrapper {
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
  z-index: 1000;
  width: 320px;
  height: 580px;
  padding: 0;
  list-style: none;
  pointer-events: none;
}
.controls {
  position: relative;
  width: 200px;
  text-align: center;
  display: flex; /*Flex布局*/
  display: -webkit-flex; /* Safari */
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 50px;
}
.controls .button {
  border: none;
  background: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  width: 50px;
  height: 50px;
  z-index: 100;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  background: #fff;
}
.controls .text-hidden {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  color: transparent;
  display: block;
}
</style>
