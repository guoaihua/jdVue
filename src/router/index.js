import Vue from 'vue'
import Router from 'vue-router'
import appMain from '../pages/app-main'
import appShopping from '../pages/app-shopping'
import appFind from '../pages/app-find'
import appClassify from '../pages/app-classify'
import classifyDeatail from '../pages/classifyDetail'
import login from '../pages/login'
import appMy from '../pages/app-my'
import confirmOrder from '../pages/confirmOrder'
import goods from '../pages/shops-page'
import users from '../pages/users-page'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
      component: appShopping,
      children: [
        {
          path: 'confirmOrder',
          name: 'confirmOrder',
          component: confirmOrder
        }
      ]
    },
    {
      path: '/find',
      name: 'find',
      component: appFind
    },
    {
      path: '/my',
      name: 'my',
      component: appMy,
      children: [
        {
          path: 'goods',
          name: 'goods',
          component: goods
        },
        {
          path: 'users',
          name: 'users',
          component: users
        }
      ],
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (store.state.sessionName) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
