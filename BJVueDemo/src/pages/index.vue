<template>
    <div>
        <!-- 视图层 -->
        <router-view></router-view>
        <!-- 底部选项卡 -->
        <tabbar>
            <tabbar-item>
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item>
                <span slot="label">书影音</span>
            </tabbar-item>
            <tabbar-item>
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
  

<script>

import { Tabbar, TabbarItem } from 'vux'
export default {
    name: 'hello',
    data() {
        return {
            
        }
    },
    components: {
        Tabbar,
        TabbarItem
    },
    methods:{
        goPage(path){
            console.log('hello');
            this.$router.push(path);
        }
    }
}
</script>

<style>

</style>
