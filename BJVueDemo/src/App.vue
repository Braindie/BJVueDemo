<template>
  <div class="wrapper">
    <!-- <router-view/> -->

    <view-box>
      <transition>
        <router-view/>
      </transition>
    </view-box>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" scoped>
// scoped限制只在本组件使用

  //全局样式
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';

  .wrapper {
    height: 100%;
  }
</style>
