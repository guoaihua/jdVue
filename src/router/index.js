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
import orders from '../pages/orders-page'
import manage from '../pages/manage-page'
import logchange from '../pages/logchange-page'
import logistics from '../pages/logistics-page'
import goodsDetail from '../pages/goodsDetail'
import container from '../pages/container-page'
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
        },
        {
          path: 'goodsDetail',
          name: 'goodsDetail',
          component: goodsDetail
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
          component: confirmOrder,
          meta: {
            requireAuth: true
          }
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
          path: 'container',
          name: 'container',
          component: container,
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
            },
            {
              path: 'orders',
              name: 'orders',
              component: orders
            },
            {
              path: 'logistics',
              name: 'logistics',
              component: logistics
            },
            {
              path: 'logchange',
              name: 'logchange',
              component: logchange
            },
            {
              path: 'manage',
              name: 'manage',
              component: manage
            }
          ]
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
