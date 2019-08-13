import Vue from 'vue'
import Router from 'vue-router'

const MainPage = () => import('../pages/main/MainPage.vue').then(m => m.default || m);
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
        title:'布局'
      }
    },
    {
      path:'/minePage',
      name:'mine',
      component:MinePage,
      meta:{
        title:'功能'
      }
    },
    {
      path:'/animationPage',
      name:'animation',
      component:AnimationPage,
      meta:{
        title:'动画'
      }
    },
    {
      path:'/networkPage',
      name:'network',
      component:NetworkPage,
      meta:{
        title:'网络'
      }
    },
    {
      path:'/framePage',
      name:'frame',
      component:FramePage,
      meta:{
        title:'架构'
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
