<template>
    <div>
        <x-header :left-options="{showBack: false}" class="navbar">
            首页
            <router-link to="/login" tag="a" slot="right" style="color: white" link="/mine/index">登录</router-link>
        </x-header>
        <div class="content">
            <div v-for="(title, index) in titles" :key="index">
                <!-- 父组件向子组件传值 -->
                <mine-list-item :title=title></mine-list-item>
            </div>
        </div>
        <bj-tabbar class="h-footer"></bj-tabbar>
    </div>
</template>
  

<script>
import { XHeader, Tabbar, TabbarItem } from 'vux'
import MineListItem from "./mainListItem/MainListItem"

const prefixCls = 'hm-index';

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
        XHeader,
        Tabbar,
        TabbarItem,
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
    .home-container {
        background-color: purple;
    }
    .navbar {
        background-color: orange;
    }
    .content{
        background-color: white;
        position: absolute;
        top: 46px;
        bottom: 53px;
        overflow-y: auto;
        width: 100%;
    }
    

</style>



