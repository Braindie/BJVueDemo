<template>
  <base-layout :class="classes">
    <template slot="header">
      <hm-header :preventGoBack="true" title="Data" :hasRight=false :hasLeft=false></hm-header>
    </template>

    <template slot="main">
      <x-button :class="[`${prefixCls}-button1`]" :gradients="['#1D62F0', '#19D5FD']" @click.native="handleLogin1">网络请求1</x-button>
      {{ info1 }}
      <x-button :class="[`${prefixCls}-button2`]" :gradients="['#1D62F0', '#19D5FD']" @click.native="handleLogin2">网络请求2</x-button>
      {{ info2 }}
    </template>

    <template slot="footer">
      <bj-tabbar :default-index="2" class="h-footer"></bj-tabbar>
    </template>
  </base-layout>
</template>

<script>
import axios from 'axios'

const prefixCls = 'bj-network';

export default {
  name: prefixCls,
  data() {
    return {
      prefixCls: prefixCls,
      info1: "",
      info2: "",
      loading: true,
      errored: false
    }
  },
  methods: {
      handleLogin1() {
        console.log('网络请求1');  
        //状态管理模式
        this.$store.dispatch('LoginByPassword').then(data => {
          console.log('文件名为fetch的axio请求');
          console.log(data);
          this.info1 = data.data;
        })
      },
      handleLogin2() {
        console.log('网络请求2');  
        this.$ajax.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(data => {
          console.log('文件名为ajax的axio请求');
          console.log(data);
          this.info2 = data.data;
        })
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
  .bj-network {
    box-sizing: border-box;
    padding-top: 95px;
    background-color: white;
    padding-bottom: 85px;

    &-button1 {
      width: 480px;
      margin: 40px auto 0;

      .weui-btn {
          font-size: 34px;
      }
    }
    &-button2 {
      width: 480px;
      margin: 40px auto 0;

      .weui-btn {
        font-size: 34px;
      }
    }
  }
</style>
