import Vue from 'vue'
import Router from 'vue-router'
import appMain from '../pages/app-main'
import appShopping from '../pages/app-shopping'
import appFind from '../pages/app-find'
import appClassify from '../pages/app-classify'
import classifyDeatail from '../pages/classifyDetail'
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
      component: appClassify,
      children: [
        {
          path: 'classifyDetail',
          name: 'classifyDetail',
          component: classifyDeatail
        }
      ]
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
