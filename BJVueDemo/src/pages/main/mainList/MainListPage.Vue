<template>
  <base-layout :class="classes">
    <!-- 导航栏 -->
    <template slot="header">
        <hm-header 
            :preventGoBack="false" 
            title="自定义Cell"
            :hasLeft="true"
        >
        </hm-header>
    </template>

    <template slot="main">
        <!-- 产品列表 -->
        <div v-for="(title, index) in titles" :key="index">
            <mine-list-item :title='title'></mine-list-item>
        </div>
    </template>

  </base-layout>
</template>

<script>

import MineListItem from "./MainListItem"

const prefixCls = 'bj-main-list';

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
