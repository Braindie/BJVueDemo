import BaseLayout from './src';

BaseLayout.install = function(Vue) {
  Vue.component(BaseLayout.name, BaseLayout);
};

export default BaseLayout;
