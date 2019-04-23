<template>
  <div id="app">
    <view-box>
      <transition>
        <router-view/>
      </transition>
    </view-box>
  </div>
</template>

<script>
export default {
  name: 'App',
  head: {
    title:'hello'
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
  /* @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less'; */

  .app {
    height: 100%;
  }
</style>
