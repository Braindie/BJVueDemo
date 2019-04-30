<template>
    <base-layout :class="classes">
        <template slot="header">
            <hm-header :preventGoBack="true" title="我的" :hasRight=false :hasLeft=false></hm-header>
        </template>

        <template slot="main">
            <x-button :class="[`${prefixCls}-button`]" :gradients="['#1D62F0', '#19D5FD']" @click.native="handleLogin">请求</x-button>
            {{ info }}
        </template>

        <template slot="footer">
            <bj-tabbar class="h-footer"></bj-tabbar>
        </template>
    </base-layout>
</template>

<script>
import axios from 'axios'

const prefixCls = 'bj-mine';

export default {
    name: prefixCls,
    data() {
        return {
            prefixCls: prefixCls,
            info: "",
            loading: true,
            errored: false
        }
    },
    methods: {
        handleLogin() {
          console.log('网络请求');  

            // this.$axios({
            //     method:'post',
            //     url:'http://v.juhe.cn/toutiao/index/',
            //     data:({
            //         key:"c76f60c92d392d0a59d7cac0cae97a44"
            //     })
            // }).then((response) =>{          //这里使用了ES6的语法
            //     console.log(response)       //请求成功返回的数据
            // }).catch((error) =>{
            //     console.log(error)       //请求失败返回的数据
            // })

            // axios.get('http://v.juhe.cn/toutiao/index?key=c76f60c92d392d0a59d7cac0cae97a44')
            //     .then(response => {
            //         this.info = response.data.bpi
            //     })
            //     .catch(error => {
            //         console.log(error)
            //         this.errored = true
            //     })
            //     .finally(() => this.loading = false);

            // axios.post('http://v.juhe.cn/toutiao/index/',{
            //     key:'c76f60c92d392d0a59d7cac0cae97a44'
            // })
            // .then(function (response) {
            //     console.log(response);
            //     this.info = response;
            // })
// https://api.coindesk.com/v1/bpi/currentprice.json
            // axios.get('http://v.juhe.cn/toutiao/index?key=c76f60c92d392d0a59d7cac0cae97a44')
            // .then(function (response) {
            //     console.log(response);
            //     this.info = response;
            // })


            // fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
            //     method: 'GET'
            // }).then((value) => {
            //     console.log(value);

            //     return value.text()
                
            // }).then((res) => {
            //     console.log(res);
            //     // console.log(typeof(res))
            //     // console.log(JSON.parse(res))
            // })

            this.$store.dispatch('LoginByPassword')//状态管理模式
                .then(data => {
                    console.log(data);
                    this.info = data;
                })
                .catch(() => {

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
    .bj-mine {
        padding-top: 95px;
        background-color: white;

        &-button {
            width: 480px;
            margin: 40px auto 0;

            .weui-btn {
                font-size: 34px;
            }
        }
    }
</style>
