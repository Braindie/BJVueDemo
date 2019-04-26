<template>
    <base-layout :class="prefixCls">
        <template slot="header">
            <x-header :left-options="{backText:''}">
                登录
            </x-header>
        </template>

        <template slot="main">
            <group :class="[`${prefixCls}`-group]">
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
        background-color: aqua;

        &-group {
            background-color: orange;
            font-size: 10px;
        }
    }
</style>