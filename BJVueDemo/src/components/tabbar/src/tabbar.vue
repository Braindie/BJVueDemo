<template>
  <tabbar v-model="tabbarIndex" style="position: fixed">
    <tabbar-item @on-item-click="gotoTabbarPage(0)">
        <!-- <img slot="icon" src="../../../assets/community_gray.png">
        <img slot="icon-active" src="../../../assets/community_red.png"> -->
        <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item @on-item-click="gotoTabbarPage(1)">
        <!-- <img slot="icon" src="../../../assets/mine_gray.png">
        <img slot="icon-active" src="../../../assets/mine_red.png"> -->
        <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';

export default {
    name: 'bj-tabbar',
    props: {

    },
    components: {
        Tabbar,
        TabbarItem
    },
    data() {
        return {
            tabbarIndex: 0
        }
    },
    methods: {
        gotoTabbarPage (tabbarIndex) {
            if (tabbarIndex == 0) {
                this.$router.push({path:'/'});
            }else{
                this.$router.push({path:'/minePage'})
            }
            console.log(tabbarIndex);
        }
    }
}
</script>

<style lang="scss">

</style>
