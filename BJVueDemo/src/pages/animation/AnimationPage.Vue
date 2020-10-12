<template>
  <base-layout :class="classes">
    <template slot="header">
      <hm-header :preventGoBack="true" title="Draw" :hasRight=false :hasLeft=false></hm-header>
    </template>

    <template slot="footer">
      <bj-tabbar :default-index="1" class="h-footer"></bj-tabbar>
    </template>
  </base-layout>
</template>

<script>
const prefixCls = 'bj-animation';

export default {
  name: prefixCls,
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    classes() {
      return [
        `${this.prefixCls}`
      ];
    },
  },
}
</script>

<style lang="scss" scoped>
  .bj-animation {
    box-sizing: border-box;
    padding-top: 95px;
    background-color: white;
    padding-bottom: 85px;
  }
</style>
