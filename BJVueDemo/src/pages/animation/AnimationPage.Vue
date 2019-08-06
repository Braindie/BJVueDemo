<template>
  <base-layout :class="classes">
    <template slot="header">
      <hm-header :preventGoBack="true" title="动画" :hasRight=false :hasLeft=false></hm-header>
    </template>

    <template slot="footer">
      <bj-tabbar class="h-footer"></bj-tabbar>
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
