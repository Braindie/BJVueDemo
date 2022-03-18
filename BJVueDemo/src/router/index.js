import Vue from "vue";
import Router from "vue-router";

const LayoutPage = () =>
  import("../pages/layout/LayoutPage.vue").then(m => m.default || m);
const MainListPage = () =>
  import("../pages/layout/mainList/MainListPage.vue").then(m => m.default || m);
const FlexboxPage = () =>
  import("../pages/layout/flexBox/FlexboxPage.vue").then(m => m.default || m);

const FunPage = () =>
  import("../pages/func/MinePage.vue").then(m => m.default || m);

const DrawPage = () =>
  import("../pages/draw/AnimationPage.vue").then(m => m.default || m);

const DataPage = () =>
  import("../pages/data/NetworkPage.vue").then(m => m.default || m);

const FramePage = () =>
  import("../pages/frame/FramePage.vue").then(m => m.default || m);

const Login = () =>
  import("../pages/login/Login.vue").then(m => m.default || m);

// 支持路由
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "Layout",
      component: LayoutPage,
      meta: {
        title: "Layout"
      }
    },
    {
      path: "/mineListPage",
      name: "mainList",
      component: MainListPage,
      meta: {
        title: "Layout1"
      }
    },
    {
      path: "/flexboxPage",
      name: "flexbox",
      component: FlexboxPage,
      meta: {
        title: "Layout2"
      }
    },
    {
      path: "/animationPage",
      name: "animation",
      component: DrawPage,
      meta: {
        title: "Draw"
      }
    },
    {
      path: "/networkPage",
      name: "network",
      component: DataPage,
      meta: {
        title: "Data"
      }
    },
    {
      path: "/framePage",
      name: "frame",
      component: FramePage,
      meta: {
        title: "Frame"
      }
    },
    {
      path: "/minePage",
      name: "mine",
      component: FunPage,
      meta: {
        title: "Func"
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "登录"
      }
    }
  ]
});
