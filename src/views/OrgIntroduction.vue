<template>
  <div class="org-introduction router-view">
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
  </div>
</template>

<script>
import icon1 from '../assets/technology.png';
import icon2 from '../assets/media.png';
import icon3 from '../assets/judge.png';
export default {
  name: 'OrgIntrobution',
  components: {},
  data() {
    return {
      code: {},
      pages: [
        {
          dec: {
            icon: icon1,
            dec: '技术研发中心下分安卓、iOS及网页三个方向，是星空核心技术所在',
            section_1: '安卓方向',
            detail_1:
              '主要负责安卓的手机应用开发与维护，开发技术讨论社区“觉浅”、开发星校巴、TOT恶搞证件等；',
            section_2: '网页方向',
            detail_2:
              '分为前端与后端，共同开发及维护网页进行，主要工作有快乐班级投票网页开发、办公室预约系统、大数据；',
            section_3: 'iOS方向',
            detail_3:
              '主要针对苹果手机的应用开发与维护，开发星名片简单版及开发iOS恶搞证件。'
          }
        },
        {
          dec: {
            icon: icon2,
            dec: '文化传媒中心下分视觉、视频及摄影三个方向',
            section_1: '视觉方向',
            detail_1:
              '主要负责星空海报设计，体现星空高端设计水平，例如日常的节日banner、新生的作品展、2018的招新设计、2018的毕业季设计及星空网的UI设计',
            section_2: '视频方向',
            detail_2:
              '主要负责星空宣传影片的制作和后期处理，今年新开街坊栏目“同学，你有空吗”',
            section_3: '摄影方向',
            detail_3:
              '主要负责向公众号提供摄影图及培训新人摄影触觉，整体提高星空平面拍摄水平。'
          }
        },
        {
          dec: {
            icon: icon3,
            dec: '运营策划中心下分策划、新媒体及星产品三个方向',
            section_1: '策划方向',
            detail_1:
              '负责办公例如有行政工作及内部事务、策划全校性毕业季活动等。',
            section_2: '公关方向',
            detail_2:
              '主要对内协调各中心的工作，对外加强与组织间的联系，负责形象培训及提升星空形象。',
            section_3: '新媒体方向',
            detail_3:
              '通过公众号星空us及微博@星空us进行推广，是星空对外的宣传平台，助力组织形象与文化建设。',
            section_4: '产品方向',
            detail_4:
              '负责星空产品扣死及现有产品的运营及维护，致力于打造最优的用户体验。'
          }
        }
      ]
    };
  },
  computed: {},
  methods: {},
  beforeCreate: function() {
    this.$nextTick(function() {
      let html = document.querySelectorAll('.org-introduction')[0];
      (html.style.backgroundImage =
        'url(' + require('@/assets/introductionBg.jpg') + ')'), // eslint-disable-line
        (html.style.backgroundSize = '100% 100%');
      html.style.backgroundRepeat = 'no-repeat';
      html.style.zIndex = '100';
    });
  },
  created() {
    let hash = this.$route.hash;
    if (!this.$route.hash) {
      hash = '#0';
    }
    this.code = this.pages[hash.slice(hash.length - 1, hash.length)].dec;
  },
  beforeDestroy: function() {
    let html = document.getElementsByTagName('body')[0];
    html.style.backgroundImage = 'none';
  }
};
</script>

<style lang="stylus" scoped>
.org-introduction {
  background-color: #ffffff;
}
* {
  text-align: left;
}
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
}
.dec {
  color: white;
  font-size: 2.2vh;
  width: 90%;
  margin: 0 auto;
  line-height: 3vh;
}
.container {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 10px auto 0 auto;
}
.section {
  position: relative;
}
h2 {
  color: #006699;
  font-size: 2.6vh;
  font-weight: 900;
  line-height: 2.6vh;
}
.detail {
  margin-top: 5px;
  color: #6d6a6a;
  font-size: 2vh;
  line-height: 3vh;
}
</style>
