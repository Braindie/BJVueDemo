<template>
  <base-layout :class="classes">
    <!-- 导航栏 -->
    <template slot="header">
        <hm-header 
            :preventGoBack="false" 
            title="Flexbox"
            :hasLeft="true"
        >
        </hm-header>
    </template>

    <template slot="main">
        <span>
            弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。
        </span>
        <div v-show="false" class="flex-direction">
            <div>元素1</div>
            <div>元素2</div>
            <div>元素3</div>
        </div>
        <div v-show="false" class="flex-wrap">
            <div>元素1元素1元素1元素1元素1元素1元素1</div>
            <div>元素222222222222222222</div>
            <div>元素3333333333333333</div>
        </div>

        <div v-show="false" class="flex-flow">
            <div>元素1</div>
            <div>元素2</div>
            <div>元素3</div>
        </div>

        <div v-show="false" class="justify-content">
            <div>元素11111111111111111111111111111111</div>
            <div>元素222222222222222222222222222222222222222222222</div>
            <div>元素3</div>
        </div>

        <div v-show="true" class="justify-content">
            <div class="item1">元素1</div>
            <div class="item2">元素2</div>
            <div class="item3">元素3</div>
        </div>


    </template>

  </base-layout>
</template>

<script>

const prefixCls = 'bj-main-flexbox';

export default {
    name: prefixCls,
    data() {
        return {
            prefixCls: prefixCls,
            input: '',
            titles:["推荐","最新","最热"]
        }
    },
    computed: {
      classes() {
        return [
          `${this.prefixCls}`
        ];
      }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .flex-direction {
        display: flex;
        // 主轴的方向
        // flex-direction: row;
        // flex-direction: row-reverse;
        // flex-direction: column;
        flex-direction: column-reverse;
    }

    .flex-wrap {
        display: flex;
        // 如何换行
        // flex-wrap: nowrap;
        // flex-wrap: wrap;
        flex-wrap: wrap-reverse;
    }

    .flex-flow {
        display: flex;
        // flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
        flex-flow: row, nowrap;
    }

    .justify-content {
        display: flex;
        // 主轴上的对其方式
        // justify-content: flex-start;
        // justify-content: flex-end;
        // justify-content: center;
        // justify-content: space-between;
        justify-content: space-around;

        // 交叉轴上如何对齐
        // align-items: flex-start;
        // align-items: flex-end;
        // align-items: center;
        align-items: baseline;
        // 默认
        // align-items: stretch;

        // align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
        // align-content: flex-start;
        align-content: center;
        flex-wrap: wrap;
    }

    .item1 {
        // order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
        // order: 3;

        // flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
        // flex-grow: 3;

        // flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
        // flex-shrink: 0;

        // flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
        flex-basis: 350px;

        //flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
        // flex: 0, 1, auto;

        // align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
        align-self: flex-end;
    }
</style>



