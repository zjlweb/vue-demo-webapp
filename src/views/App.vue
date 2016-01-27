<template>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
  <div class="section-block">
      <ul class="navbar">
        <li v-link="{ path:'/list',exact: true}"><i class="iconfont">&#xe619;</i>商品列表</li>
        <li v-link="{ path: '/cuxiao', exact: true}"><i class="iconfont">&#xe617;</i>促销商品</li>
        <li v-link="{ path: '/cart', exact: true}"><i class="iconfont">&#xe612;</i>购物车</li>
        <li v-link="{ path: '/ucenter', exact: true}"><i class="iconfont">&#xe61a;</i>会员中心</li>
      
      </ul>
  </div>
 
  <div class="section-block">
    <div class="inner">
       <a class="button btn-important">警告</a>
     <a class="button btn-main">提示</a>
     <a class="button btn-trivial">正常</a>
     <a class="button btn-info disabled" @click="kk">成功</a>
     </div>
  </div>
  <div class="section-block">
       <button type="button" class="button btn-empty">loading</button>
   
  </div>
  <div class="inner">
  <div class="demo">
    
          <h3 class="title">我是标题名称</h3>
    <p>这里是正文描述，有很多文字</p>
     <h3>我是标题名称</h3>
    <p>这里是正文描述，有很多文字</p>
    </div>

  </div>


   <nv-alert></nv-alert>
  
</template>

<script>


export default {
  route:{
            data (transition){
              
            }
        },
  ready (){
    var swiper = new Swiper('.swiper-container', {
                  pagination: '.swiper-pagination',
                  paginationClickable: true,
                  spaceBetween: 10,
                  autoplay: 2500,
                  loop: true
              });
  },
  components: {
   
    "nvHead":require('../components/header.vue'),
    "nvAlert":require('../components/alert.vue')
  },
  methods: {
    kk (){
      alert('sss');
    }
  }
}
</script>
<style lang="sass">
@import "../assets/sass/base.scss";
.swiper-container{
  width: 100%;
  height: px2rem(380);
  position:relative;
  overflow: hidden;
      margin-left: auto;
    margin-right: auto;

}
.swiper-slide{
  text-align: center;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
        -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
}
.swiper-wrapper {
      position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-transform: translate3d(0,0,0);
    -o-transform: translate(0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  .swiper-slide:first-child{
    background-color:#ED5564;
  }
  .swiper-slide:nth-child(2){
    background-color:#FFCE55;
  }
  .swiper-slide:nth-child(3){
    background-color:#A0D468;
  }
  .swiper-slide:nth-child(4){
    background-color:#5D9CEC;
  }
  .swiper-slide:nth-child(5){
    background-color:#AC92ED;
  }
  .swiper-slide:nth-child(6){
    background-color:#A0D468;
  }
  .swiper-slide:nth-child(7){
    background-color:#FFCE55;
  }
  .swiper-slide:nth-child(8){
    background-color:#AC92ED;
  }
  .swiper-slide:last-child{
    background-color:#FB6E52;
  }

}
.swiper-pagination{
  position: absolute;
    text-align: center;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    -o-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    z-index: 10;
    bottom: 0;
    left: 0;
    width: 100%;
}
.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    display: inline-block;
    margin:0 3px;
    border-radius: 100%;
    background: #000;
    opacity: .2;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #666;
}
.dd{
  height: 300px;
  background: url(../assets/logo.png) no-repeat center center;
}
.demo{
    width: 5rem;
    height: 5rem;
    border:1px solid $border-color;
    background-color:#fff;
    h3.title{
      @include font-dpr(14px);
      font-weight: normal;
    }
    
}

</style>
