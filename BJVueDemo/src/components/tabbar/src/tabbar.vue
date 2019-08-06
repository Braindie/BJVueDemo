<template>
  <tabbar v-model="index" @on-index-change="indexChange" class="bj-tabbar">
    <tabbar-item link="/">
      <i slot="icon" class="ku-icon" :class="index === 0 ? 'icon-tab_home_select' : 'icon-tab_home_regular'"></i>
      <span slot="label">布局</span>
    </tabbar-item>
    <tabbar-item link="/animationPage">
      <i slot="icon" class="ku-icon" :class="index === 2 ? 'icon-tab_home_select' : 'icon-tab_home_regular'"></i>
      <span slot="label">动画</span>
    </tabbar-item>
    <tabbar-item link="/networkPage">
      <i slot="icon" class="ku-icon" :class="index === 3 ? 'icon-tab_home_select' : 'icon-tab_home_regular'"></i>
      <span slot="label">网络</span>
    </tabbar-item>
    <tabbar-item link="/framePage">
      <i slot="icon" class="ku-icon" :class="index === 4 ? 'icon-tab_home_select' : 'icon-tab_home_regular'"></i>
      <span slot="label">架构</span>
    </tabbar-item>
    <tabbar-item link="/minePage">
      <i slot="icon" class="ku-icon" :class="index === 5 ? 'icon-tab_home_select' : 'icon-tab_home_regular'"></i>
      <span slot="label">功能</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';

export default {
  name: 'bj-tabbar',
  props: {
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      index: 0
    }
  },
  methods: {
    indexChange(index) {
      this.index = index;
    },
  },
  create() {
    this.index = this.defaultIndex || 0;
  }
}
</script>


<style lang="scss">
  @import "@/styles/common/var.scss";

  .bj-tabbar {
    height: 85px;

    .weui-tabbar__label {
      margin-top: 5px;
    }

    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,
    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
      color: $primary;
    }

    .weui-tabbar__item {
      padding-top: 10px;

      .weui-tabbar__icon {
        width: 36px;
        height: 36px;

        i {
          font-size: 36px;
        }
      }

      .weui-tabbar__label {
        font-size: 18px;
      }
    }
  }
</style>

