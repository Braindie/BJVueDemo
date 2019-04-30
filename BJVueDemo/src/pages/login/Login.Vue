<template>
    <base-layout :class="prefixCls">
        <template slot="header">
            <hm-header :preventGoBack="false" title="登录" hasRight:false hasLeft:true></hm-header>
        </template>

        <template slot="main">
            <group :class="[`${prefixCls}-group`]">
                <x-input v-model="mobile" type="text" :max="13" placeholder="手机号"></x-input>
                <x-input v-model="password" :type="type" placeholder="8-16位数字和字母组合"></x-input>
            </group>

            <div :class="[`${prefixCls}-button`]">
                <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="handleLogin">登录</x-button>
            </div>
        </template>
    </base-layout>
</template>


<script>
import { XHeader } from 'vux'

const prefixCls = 'bj-login';

export default {
    name: prefixCls,
    data() {
        return {
            prefixCls,
            mobile: "",
            password: "",
            showpwd: false,
        }
    },
    computed: {
        type() {
            return this.showpwd ? '' : 'password';
        },
    },
    components: {
        XHeader
    },
    methods: {
        handleLogin(){
            console.log("登录"+this.mobile+this.password);
        }
    },
}
</script>

<style lang="scss" scoped>
    .bj-login {
        padding-top: 95px;
        background-color: white;

        &-group {
            background-color: orange;
            font-size: 28px;
            margin: 90px;


            .weui-cells {
                margin-top: 0;

                .weui-cell {
                    height: 90px;
                }

                .weui-input {
                    font-size: 40px;
                }
            }
        }

        &-button {
            width: 480px;
            margin: 40px auto 0;

            .weui-btn {
                font-size: 34px;
            }
        }
    }
</style>