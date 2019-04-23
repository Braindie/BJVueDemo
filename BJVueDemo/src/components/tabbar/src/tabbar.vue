<template>
  <tabbar v-model="index" @on-index-change="indexChange" class="bj-tabbar">
    <tabbar-item link="/">
      <i slot="icon" class="ku-icon" :class="index === 0 ? 'community_red' : 'community_gray'"></i>
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item link="/home/index">
      <i slot="icon" class="ku-icon" :class="index === 1 ? 'mine_red' : 'mine_gray'"></i>
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
        indexChange(index){
            this.index = index;
        }
    },
    created(){
        this.index = this.defaultIndex || 0;
    }
}
</script>

<style>

</style>
