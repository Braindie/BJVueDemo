<template>
    <div class="film-item">
        <div class="film-title">
            <span>{{ title }}</span>
        </div>
        <div v-for="item in 3" :key="item" class="item-detial">
            详情
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title:""
    }
}
</script>

<style>
    .film-item{
        background-color: orange;
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .film-title{
        padding-top: 10px;
        text-align: center;
    }

    .item-detial{
        text-align: center;
        background-color: rgb(240, 230, 88);
        height: 80px;
        margin: 20px;
    }

</style>
