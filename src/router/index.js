import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Welcome from '../pages/welcome'
import Reserve from '../pages/Reserve'
import ReserveDetail from '../pages/ReserveDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Welcome
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },{
      path: '/reserve',
      name: 'reserve',
      component: Reserve
    },{
      path: '/reserve/:id',
      name: 'reserveDetail',
      component: ReserveDetail
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition){
    //return desired position
    if(to.hash){
      return{
        selector: to.hash
      }
    }
    
  }
})
