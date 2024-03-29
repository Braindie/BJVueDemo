// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

//引入矢量图标
import "@/assets/fonts/iconfont.css";

//引入组件
import "./global";

//引入全局样式
import "./styles/index.scss";

//引入淘宝自适应插件
import "lib-flexible";

import axios from "axios";

// import 'bootstrap/dist/css/bootstrap.min.css';
import * as uiv from "uiv";

//引入ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//自定义全局组件（import 导入后的变量名 from 加载路径）
import Tabbar from "./components/tabbar"; //这个应该是路由路径
import BaseLayout from "./components/base-layout"; //这个应该是路由路径
import Header from "./components/header"; //这个应该是路由路径

Vue.use(Tabbar);
Vue.use(BaseLayout);
Vue.use(Header);

Vue.use(ElementUI);
Vue.use(uiv);

//root不在作为根组件，作为容器，加载三方组件（App.vue才是跟组件）
Vue.config.productionTip = false;

/*
  程序入口，加载各种公共组件，默认页面通过router展示
*/
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
