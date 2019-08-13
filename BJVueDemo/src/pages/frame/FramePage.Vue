<template>
  <base-layout :class="classes">
    <template slot="header">
      <hm-header :preventGoBack="true" title="架构" :hasRight=false :hasLeft=false></hm-header>
    </template>

    <template slot="footer">
      <bj-tabbar :default-index="3" class="h-footer"></bj-tabbar>
    </template>
  </base-layout>
</template>

<script>
const prefixCls = 'bj-frame';

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
  .bj-frame {
    box-sizing: border-box;
    padding-top: 95px;
    background-color: white;
    padding-bottom: 85px;
  }
</style>
