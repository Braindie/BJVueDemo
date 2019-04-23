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
        indexChange(index){
            console.log(index);
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
