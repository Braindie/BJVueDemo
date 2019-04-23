<template>
    <base-layout :class="classes">
        <bj-tabbar class="h-footer"></bj-tabbar>
    </base-layout>
</template>

<script>
const prefixCls = 'hm-index';

export default {
    name: prefixCls,
    data() {
        return {
            prefixCls: prefixCls,

        }
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

