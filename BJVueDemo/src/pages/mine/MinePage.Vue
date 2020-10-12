<template>
    <base-layout :class="classes">
        <template slot="header">
            <hm-header :preventGoBack="true" title="Func" :hasRight=false :hasLeft=false></hm-header>
        </template>
        <template slot="main">
          <div class="bjmine-content">
            你好
          </div>
            <div class="bjmine-pagination">
                <pagination
                    v-model="currentPage"
                    :total-page="totalPage"
                    :max-size="4"
                    size="lg"
                    align="center"
                    :direction-links="true"
                />
            </div>
        </template>
        <template slot="footer">
            <bj-tabbar :default-index="4" class="h-footer"></bj-tabbar>
        </template>
    </base-layout>
</template>

<script>
import { Pagination } from 'uiv'

const prefixCls = 'bj-mine';

export default {
    name: prefixCls,
    components: {
        Pagination
    },
    data() {
        return {
            loading: true,
            totalPage: 18,
            currentPage: 1
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

<style lang="scss">
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  @import "~bootstrap-sass/assets/stylesheets/_bootstrap.scss";
    .bj-mine {
        
        box-sizing: border-box;
        padding-top: 95px;
        background-color: white;
        padding-bottom: 85px;

        .bjmine-content {
            width: 100%;
            height: 600px;
            padding-top: 100px;
            background: gray;
        }

        .bjmine-pagination {
            text-align: center;
            background-color: #EBC755;

            .pagination {
                margin: rem(20) 0 0;

                > li > a {
                border: none;
                color: #AF6F25;
                background: #FFFFFF;
                font-weight: bolder;
                margin: 0 rem(10);
                font-size: rem(20);
                padding: rem(5) rem(12);
                }

                >.active > a {
                color: #EBC755;
                background: #AF6F25;
                }
            }
        }
    }
</style>
