<template>
    <div>
        <x-header :left-options="{backText:''}" class="navbar">
            登录
        </x-header>
    </div>
</template>


<script>
import { XHeader } from 'vux'
export default {
    data() {
        return {

        }
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
    .navbar {
        background-color: orange;
    }
</style>