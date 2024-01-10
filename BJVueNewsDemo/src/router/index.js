import Vue from 'vue';
import Router from 'vue-router';

const main = () => import('../views/index.vue').then(m => m.default || m);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: main,
      meta: {
        title: '首页'
      }
    }
  ]
})
