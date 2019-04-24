import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('../pages/index.vue').then(m => m.default || m);
const mine = () => import('../pages/mine/index.vue').then(m => m.default || m);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      name:'index',
      component:index,
      meta:{
        title:'首页'
      }
    },
    {
      path:'/mine',
      name:'mine',
      component:mine,
      meta:{
        title:'个人中心'
      }
    },
    // mine_router
  ]
})
