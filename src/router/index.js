import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/Login')
    },
    {
      path: '/layout',
      component: Layout,
      redirect: '/layout/home',
      children: [
        {
          path: 'home',
          meta: {
            title: '首页'
          },
          component: ()=> import('@/views/Home')
        }
      ]
    }
  ]
})
 