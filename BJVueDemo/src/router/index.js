import Vue from 'vue'
import Router from 'vue-router'

const MainPage = () => import('../pages/main/MainPage.vue').then(m => m.default || m);
const MainListPage = () => import('../pages/main/mainList/MainListPage.vue').then(m => m.default || m);
const FlexboxPage = () => import('../pages/main/Flexbox/FlexboxPage.vue').then(m => m.default || m);

const MinePage = () => import('../pages/mine/MinePage.vue').then(m => m.default || m);

const AnimationPage = () => import('../pages/animation/AnimationPage.vue').then(m => m.default || m);

const NetworkPage = () => import('../pages/network/NetworkPage.vue').then(m => m.default || m);

const FramePage = () => import('../pages/frame/FramePage.vue').then(m => m.default || m);

const Login = () => import('../pages/login/Login.vue').then(m => m.default || m);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      name:'main',
      component:MainPage,
      meta:{
        title:'Layout'
      }
    },
    {
      path:'/mineListPage',
      name:'mainList',
      component:MainListPage,
      meta:{
        title:'Layout1'
      }
    },
    {
      path:'/flexboxPage',
      name:'flexbox',
      component:FlexboxPage,
      meta:{
        title:'Layout2'
      }
    },
    {
      path:'/animationPage',
      name:'animation',
      component:AnimationPage,
      meta:{
        title:'Draw'
      }
    },
    {
      path:'/networkPage',
      name:'network',
      component:NetworkPage,
      meta:{
        title:'Data'
      }
    },
    {
      path:'/framePage',
      name:'frame',
      component:FramePage,
      meta:{
        title:'Frame'
      }
    },
    {
      path:'/minePage',
      name:'mine',
      component:MinePage,
      meta:{
        title:'Func'
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
