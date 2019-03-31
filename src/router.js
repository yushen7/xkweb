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
      components: () => import('./views/7ish_ContactUs')

    }, {
      path: '/exhibition',
      name: 'exhibition',
      components: () => import('./views/7ish_Exhibition')
    }, {
      path: '/orgIntro',
      name: 'orgIntro',
      components: () => import('./views/mason_OrgIntroduction')
    }, {
      path: '/proIntro',
      name: 'proIntro',
      components: () => import('./views/mason_ProductIntroduction')
    },
    {
      path: '/ad',
      name: 'ad',
      components: () => import('./views/7ish_Advertisement')
    }
  ]
})
