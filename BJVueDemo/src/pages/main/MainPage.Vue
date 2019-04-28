<template>
    <base-layout :class="classes">
        <!-- 导航栏 -->
        <template slot="header">
            <hm-header :preventGoBack="true" title="首页" rightTitle="登录" :hasRight="true" :hasLeft="false"></hm-header>
        </template>

        <template slot="main">
            <!-- 产品列表 -->
            <div v-for="(title, index) in titles" :key="index">
                <!-- 父组件向子组件传值 -->
                <mine-list-item :title='title'></mine-list-item>
            </div>
        </template>

        <!-- 标签栏 -->
        <template slot="footer">
            <bj-tabbar class="h-footer"></bj-tabbar>
        </template>
    </base-layout>
</template>
  

<script>

import MineListItem from "./mainListItem/MainListItem"

const prefixCls = 'bj-main';

export default {
    name: prefixCls,
    data() {
        return {
            prefixCls: prefixCls,
            input: '',
            titles:["推荐","最新","最热"]
        }
    },
    components: {
        MineListItem
    },
    computed: {
      classes() {
        return [
          `${this.prefixCls}`
        ];
      }
    },
    methods: {
        onIndexChange (newIndex, oldIndex) {
            console.log(newIndex, oldIndex)
        }
    }
}
</script>

<style lang="scss" scoped>
    .bj-index {
        box-sizing: border-box;
        padding-top: 95px;
        padding-bottom: 85px;
        background-color: white;
    }

</style>



