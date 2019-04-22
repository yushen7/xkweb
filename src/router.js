import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'homepage',
      component: () => import('./views/HomePage')
    }, {
      path: '/ctus',
      name: 'ctus',
      component: () => import('./views/ContactUs.vue')

    }, {
      path: '/exhibition',
      name: 'exhibition',
      component: () => import('./views/Exhibition.vue'),
      children: [{
        path: '/exhibition_views/exhibition-phg',
        name: 'exPhg',
        component: () => import('./views/exhibition_views/exhibition-phg')
      }, {
        path: '/exhibition_views/exhibition-video',
        name: 'exVideo',
        component: () => import('./views/exhibition_views/exhibition-video')
      }, {
        path: '/exhibition_views/exhibition-vision',
        name: 'exVision',
        component: () => import('./views/exhibition_views/exhibition-vision')
      }, ]
    }, {
      path: '/orgIntro',
      name: 'orgIntro',
      component: () => import('./views/chooseSection')
    }, {
      path: '/proIntro',
      name: 'proIntro',
      component: () => import('./views/ProductIntroduction')
    },
    {
      path: '/ad',
      name: 'ad',
      component: () => import('./views/Advertisement')
    },
    {
      path: '/OrgIntroduction',
      name: "OrgIntroduction",
      component: () => import('./views/OrgIntroduction')
    }
  ]
})
