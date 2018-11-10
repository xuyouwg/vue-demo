import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import cityInfo from '../components/cityInfo'
import detail from '../components/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cityInfo',
      name: 'cityInfo',
      component: cityInfo
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
