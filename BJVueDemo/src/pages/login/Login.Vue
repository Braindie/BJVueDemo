<template>
    <base-layout :class="prefixCls">
        <template slot="header">
            <hm-header :preventGoBack="false" title="登录" hasRight:false hasLeft:true></hm-header>
        </template>

        <template slot="main">
            <group :class="[`${prefixCls}-group`]">
                <x-input v-model="mobile" type="text" :max="13" placeholder="手机号"></x-input>
                <x-input v-model="password" :type="type" placeholder="8-16位数字和字母组合">

                </x-input>
            </group>
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
            console.log("登录");
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
            padding-top: 50px;
            margin: 50px 90px 50px 90px;

            // .weui-cells {
            //     margin-top: 0;

            //     .weui-cell {
            //         padding: 20px 23px 20px 0;
            //         margin-top: 55px;

            //         .weui-cell__ft {
            //             .vux-x-input-right-full {
            //                 width: 140px;
            //                 height: 62px;
            //             }
            //         }
            //     }

            //     .weui-input {
            //         font-size: 28px;
            //     }
            // }
        }
    }
</style>