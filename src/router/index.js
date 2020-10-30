import Vue from 'vue'
import Router from 'vue-router'
import PageOutter from '@/components/PageOutter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageOutter',
      component: PageOutter
    }
  ]
})
