<template>
  <base-layout :class="classes">
    <!-- 导航栏 -->
    <template slot="header">
      <hm-header
        :preventGoBack="true"
        title="Layout"
        rightTitle="登录"
        :hasRight="true"
        :hasLeft="false"
      >
      </hm-header>
    </template>

    <template slot="main">
      <!-- 列表 -->
      <div v-for="(title, index) in titles" :key="index">
        <div @click="selectCellAction(index)">
          {{ title }}
        </div>
      </div>
    </template>

    <!-- 标签栏 -->
    <template slot="footer">
      <bj-tabbar :default-index="0" class="h-footer"></bj-tabbar>
    </template>
  </base-layout>
</template>

<script>
const prefixCls = "bj-main";

export default {
  name: prefixCls,
  data() {
    return {
      prefixCls: prefixCls,
      input: "",
      titles: ["cell", "flex"]
    };
  },
  computed: {
    classes() {
      return [`${this.prefixCls}`];
    }
  },
  methods: {
    selectCellAction(index) {
      console.log(index);
      if (index === 0) {
        this.$router.push({ path: "/mineListPage" });
      } else if (index === 1) {
        this.$router.push({ path: "/flexboxPage" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bj-index {
  box-sizing: border-box;
  padding-top: 95px;
  padding-bottom: 85px;
  background-color: white;
}
</style>
