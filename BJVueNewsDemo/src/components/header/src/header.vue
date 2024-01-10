<template>
  <header :class="classes">
    <div class="container">
      <div class="logo">logo</div>
      <el-menu class="el-menu-demo" :default-active="activeIndex" mode="horizontal">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">商家服务</template>
          <el-menu-item index="2-1">服务1</el-menu-item>
          <el-menu-item index="2-2">服务2</el-menu-item>
          <el-menu-item index="2-3">服务3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">渠道合作</el-menu-item>
        <el-menu-item index="4">更多服务</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>


<script>
  const prefixCls = 'bj-header';

  export default {
    name: 'BjHeader',
    data() {
      return {
        prefixCls: prefixCls,
        activeIndex: "1"
      }
    },
    computed: {
      classes() {
        return `${prefixCls}`;
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>