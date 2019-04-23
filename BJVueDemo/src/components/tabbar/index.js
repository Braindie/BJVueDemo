import Tabbar from './src/tabbar.vue';

Tabbar.install = function (Vue) {
    Vue.component(Tabbar.name, Tabbar);
};

export default Tabbar;