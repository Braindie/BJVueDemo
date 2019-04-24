<template>
    <base-layout class="home-container">
        <template slot="main">
            <x-header :left-options="{showBack: false}" class="navbar">首页</x-header>
            <bj-tabbar class="h-footer"></bj-tabbar>
        </template>
    </base-layout>
</template>
  

<script>
import { XHeader } from 'vux'

const prefixCls = 'hm-index';

export default {
    name: prefixCls,
    data() {
        return {
            prefixCls: prefixCls,

        }
    },
    components: {
        XHeader
    },
    computed: {
      classes() {
        return [
          `${this.prefixCls}`
        ];
      }
    },
}
</script>

<style lang="scss" scoped>
    .home-container {
        background-color: purple;
    }
    .navbar {
        background-color: orange;
    }

</style>



