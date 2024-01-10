<template>
  <div class="pc-full-layout">
    <bj-header></bj-header>
    <slot></slot>
  </div>
</template>

<script>
  const prefixCls = 'bj-full-layout'
  export default {
    name: prefixCls,
    data() {
      return {
        prefixCls
      }
    },
  }
</script>