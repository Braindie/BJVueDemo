<template>
  <div class="hm-header">
    <x-header 
      :left-options="{ backText:'', preventGoBack: preventGoBack}" 
      @on-click-back="hanldeClickBack"
    >
      <div :slot="`left`" v-if="hasLeft">
        <i class="ku-icon icon-left"></i>
      </div>
      {{ title }}
      <div slot="right" v-if="hasRight" @click="rightAction">
        {{ rightTitle }}
      </div>
    </x-header>
    <div class="zhan-wei"></div>
  </div>
</template>

<script>
  export default {
    name: 'hm-header',
    props: {
      title: {
        type: String,
        default: ''
      },
      rightTitle: {
        type: String,
        default: ''
      },
      preventGoBack: {
        type: Boolean,
        default: false
      },
      hasRight: {
        type: Boolean,
        default: false
      },
      hasLeft: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
          
      }
    },
    methods: {
      hanldeClickBack() {
        this.$emit('handleClickBack')
      },
      rightAction() {
        this.$router.push({path:'/login'})
      }
    },
    created() {
      console.log('header');
    }
  }
</script>

<style lang="scss">
  @import "@/styles/common/var.scss";

  .hm-header {
    position: relative;
    height: 95px;

    .vux-header {
      position: absolute;
      top: 0;
      width: 100%;
      height: 95px;
      padding: 0;
      background-color: $primary;
      z-index: 1000;

      h1 {
        height: 95px;
        line-height: 95px;
        font-size: 30px;
      }

      .vux-header-left {

        .left-arrow::before {
          display: none;
        }

        .left-arrow {
          width: 70px;
          height: 70px;
        }

        i {
          font-size: 30px;
          color: #fff;
          line-height: 70px;
        }
      }

      .vux-header-right {
        height: 95px;
        top: 0;
        right: 30px;
        display: flex;
        align-items: center;

        .hm-header-right {
          position: relative;

          i {
            font-size: 30px;
            color: #fff;
          }

          .arrow {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 70px;
            right: 0;
            background: #fff;
            border-top: 1PX solid #e1e1e1;
            border-left: 1PX solid #e1e1e1;
            transform: rotate(45deg);
            z-index: 10001;
          }

          .hm-header-right-groups {
            overflow: hidden;
            position: absolute;
            top: 80px;
            right: -25px;
            width: 280px;
            border-radius: 10px;
            z-index: 1000;
            border: 1PX solid #e1e1e1;

            .arrow {
              content: '';
              display: block;
              position: absolute;
              width: 20px;
              height: 20px;
              top: -11px;
              left: 50%;
              margin-left: -10px;
              background: #fff;
              border-top: 1PX solid #e1e1e1;
              border-left: 1PX solid #e1e1e1;
              transform: rotate(45deg);
              z-index: -1;
            }

            .hm-header-right-group {
              .weui-cells {
                margin-top: 0;

                &::before,
                &::after {
                  height: 0;
                  border: none;
                }

                .weui-cell {
                  padding: 20px 0 20px 30px;

                  .weui-cell__ft {
                    font-size: 26px;
                    text-align: left;

                    i {
                      font-size: 30px;
                      color: #1288f8;
                      margin-right: 20px;
                    }

                    &::after {
                      display: none;
                    }
                  }

                  &::before {
                    border-top: 1PX solid #e1e1e1;
                    left: 0;
                  }
                }
              }
            }
          }
        }
      }
    }

    .zhan-wei {
      position: relative;
      top: 0;
      left: 0;
      height: 95px;
      width: 100%;
    }
  }
</style>
