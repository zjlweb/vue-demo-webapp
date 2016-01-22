<template>
    <div class="alert-loading" :class="alertType" v-show="show" transition>
        <div  class="alert-inner" v-text="content"></div>
    </div>

    <div class="confirm-dialog" v-show="confirmShow">
    <div class="ui-mask" @click="quit()"></div>
    <div class="confirm-box">
        <div class="confirm-title">
            <strong class="">提示信息</strong>
        </div>
        <div class="confirm-content">
            <div v-text="confirmContent"></div>
        </div>
        <div class="confirm-bot">
            <a href="javascript:;" class="confirm-btn default" @click="dispatch($event,  'oncancel')">取消</a>
            <a href="javascript:;" class="confirm-btn primary" @click="dispatch($event, 'onconfirm')">确定</a>
        </div>
    </div>
</div>

</template>
<script>
    export default {
        replace: true,
        props: ['content','show','alertType','confirmShow','confirmContent','confirmFunc'],
        ready (){
            setTimeout(function(){
            document.getElementById('loading').style.display = 'none';
          },200)
        },
        methods:{
          dispatch(event, eventStr) {
              this.$dispatch(eventStr);
              // this.show = false;
          },
          quit(){
             this.$dispatch('quitConfirm');
          }

        }
    }
</script>
<style lang="sass">
@import "../assets/sass/config.scss";
.ui-mask{
  background-color: rgba(0,0,0,.2);
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:10000;
}
.confirm-box{
  background: #fff;
  position:fixed;
  z-index:10001;
  width: 100%;
  top:0;
  color:#fff;
  text-align: center;
}
.confirm-title{
  padding: px2rem(10);
background-color:rgb(77, 130, 214);
}
.confirm-content{
  padding: px2rem(20);
  font-size: px2rem(30);
  background-color:rgb(77, 130, 214);
  color:#fff;
}
.confirm-bot{
    display: -webkit-box;
    width: 100%;
    a{
        -webkit-box-flex: 1;
        display: block;
        text-align: center;
        padding: px2rem(15);
        color:#fff;
    }
    a.default{
      background-color:rgb(87, 191, 87);
    }
    a.primary{
      background-color:rgb(225, 113, 91);
    }
}
/**弱提示样式*/
.alert-loading {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    background-color: rgba(0,0,0,0.1);
    text-align: center;
    &.alert .alert-inner {
             background-color: #FF8E32;
        }


    .alert-inner {
        margin: 0 auto;
        text-align: center;
        width: 100%;left: 0;
        top:-100px;
        height: px2rem(100);
        line-height: px2rem(100);
        background-color: rgba(87, 191, 87,1);
        color: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.498039) 0px 0px 10px 0px;
        vertical-align: middle;

    }
}
/* 必需 */
.v-transition .alert-inner{
  -webkit-transition: all 2s out-ease-in;
  transition: all 2s out-ease-in;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  animation: bounce-in 2s;

  
}
@keyframes bounce-in {
  100%,0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  40%,80% {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
}
</style>