import Vue from 'vue'
import Router from 'vue-router'
import appMain from '../pages/app-main'
import appShopping from '../pages/app-shopping'
import appFind from '../pages/app-find'
import appClassify from '../pages/app-classify'
import appMy from '../pages/app-my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appMain',
      component: appMain
    },
    {
      path: '/classify',
      name: 'calssify',
      component: appClassify
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: appShopping
    },
    {
      path: '/find',
      name: 'find',
      component: appFind
    },
    {
      path: 'my',
      name: 'my',
      component: appMy
    }
  ]
})
