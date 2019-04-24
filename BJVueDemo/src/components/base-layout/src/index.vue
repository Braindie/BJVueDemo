<template>
  <div class="base-layout">
    <!-- 页头 -->
    <header>
      <slot name="header"></slot>
    </header>
    <!-- 内容 -->
    <main :id="mainId">
      <slot name="main"></slot>
    </main>
    <!-- 页脚 -->
    <footer>
      <slot name="footer"></slot>
    </footer>
    <!-- 其他 -->
    <!-- <slot></slot> -->
  </div>
</template>

<script>
  const COMPONENT_NAME = 'base-layout';

  export default {
    name: COMPONENT_NAME,
    props: {
      mainId: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
  .base-layout {
    // position: fixed;
    // top: 0;
    // left: 0;
    position: relative;
    height: 100%;
    width: 100%;
    // background-color: red;

    > header {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
    }

    > main {
      height: calc(100% - 1px);
      width: 100%;
      z-index: 1;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }

    > footer {
      position: absolute !important;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 11;
      right: 0;
    }
  }
</style>
