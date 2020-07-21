<template>
  <div class="item">
    <div class="container">
      <img :src="list.src" class="itemImg" />
      <h2 class="name">{{ list.title }}</h2>
      <p class="dec">{{ list.dec }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'applicationItem',
  props: ['list'],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.item {
  margin-top: 4.5vh;
}
.itemImg {
  width: 100%;
  width: 13vh;
  height: 13vh;
}
.container {
  position: relative;
  width: 78%;
  height: 15vh;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  box-shadow: 0 4px 30px #cacaca;
}
.itemImg {
  position: absolute;
  z-index: 99;
  left: -3vh;
  top: -2.5vh;
}
.name {
  position: absolute;
  left: 13vh;
  top: 3vh;
  font-size: 3vh;
  line-height: 3vh;
}
.dec {
  position: absolute;
  left: 13vh;
  top: 8.5vh;
  color: #8a8484;
  line-height: 2vh;
  font-size: 2vh;
}
</style>
