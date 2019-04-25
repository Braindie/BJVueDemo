import Vue from 'vue'
import Router from 'vue-router'

const MainPage = () => import('../pages/main/MainPage.vue').then(m => m.default || m);
const MinePage = () => import('../pages/mine/MinePage.vue').then(m => m.default || m);
const Login = () => import('../pages/login/Login.vue').then(m => m.default || m);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      name:'index',
      component:MainPage,
      meta:{
        title:'首页'
      }
    },
    {
      path:'/minePage',
      name:'mine',
      component:MinePage,
      meta:{
        title:'个人中心'
      }
    },
    {
      path:'/login',
      name:'login',
      component:Login,
      meta:{
        title:'登录'
      }
    }
  ]
})
