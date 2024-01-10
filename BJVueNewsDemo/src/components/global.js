import Vue from 'vue';

//基础组件的自动化全局注册（用的时候还要引入）
const requireComponent = require.context('.', true, /\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  if (componentConfig.default.name) {
    Vue.component(componentConfig.default.name, componentConfig.default || componentConfig);
  }
});
