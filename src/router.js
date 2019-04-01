import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'homepage',
      component: () => import('./views/7ish_HomePage')
    }, {
      path: '/ctus',
      name: 'ctus',
      component: () => import('./views/7ish_ContactUs.vue')

    }, {
      path: '/exhibition',
      name: 'exhibition',
      component: () => import('./views/7ish_Exhibition.vue')
    }, {
      path: '/orgIntro',
      name: 'orgIntro',
      component: () => import('./views/mason_OrgIntroduction')
    }, {
      path: '/proIntro',
      name: 'proIntro',
      component: () => import('./views/mason_ProductIntroduction')
    },
    {
      path: '/ad',
      name: 'ad',
      component: () => import('./views/7ish_Advertisement')
    }
  ]
})
