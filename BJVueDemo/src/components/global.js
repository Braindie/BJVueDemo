import Vue from 'vue';

const requireComponent = require.context('.', true, /\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  if (componentConfig.default.name) {
    Vue.component(componentConfig.default.name, componentConfig.default || componentConfig);
  }
});
