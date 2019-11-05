import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/tabbar/HomeContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/search', component: SearchContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },

    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo', component: NewsInfo }
  ],
  linkActiveClass: 'mui-active'
})
