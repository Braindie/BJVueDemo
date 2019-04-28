<template>
    <base-layout :class="classes">
        <template slot="header">
            <hm-header :preventGoBack="true" title="我的" :hasRight=false :hasLeft=false></hm-header>
        </template>

        <template slot="footer">
            <bj-tabbar class="h-footer"></bj-tabbar>
        </template>
    </base-layout>
</template>

<script>
import { XHeader } from 'vux'

const prefixCls = 'bj-mine';

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
    .mine-container {
        background-color: gray;
    }
    .navbar {
        background-color: orange;
    }

</style>
