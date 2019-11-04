import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/tabbar/HomeContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'HomeContainer',
      component: HomeContainer
    },
    { path: '/home', component: HomeContainer },
    { path: '/search', component: SearchContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer }
  ],
  linkActiveClass: 'mui-active'
})
