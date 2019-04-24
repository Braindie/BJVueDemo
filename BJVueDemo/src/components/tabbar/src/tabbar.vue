<template>
  <tabbar v-model="index" @on-index-change="indexChange" class="bj-tabbar">
    <tabbar-item link="/">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item link="/mine/">
      <span slot="label">我的</span>
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
            console.log('点击了'+index);
            this.index = index;
        }
    },
    created() {
        // console.log('生命周期');
        this.index = this.defaultIndex || 0;
    }
}
</script>

<style lang="scss">
//   @import "@/styles/common/var.scss";

//   .bj-tabbar {
//     height: 85px;

//     .weui-tabbar__label {
//       margin-top: 5px;
//     }

//     .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
//     .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,
//     .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
//       color: $primary;
//     }

//     .weui-tabbar__item {
//       padding-top: 10px;

//       .weui-tabbar__icon {
//         width: 36px;
//         height: 36px;

//         i {
//           font-size: 36px;
//         }
//       }

//       .weui-tabbar__label {
//         font-size: 18px;
//       }
//     }
//   }
</style>
