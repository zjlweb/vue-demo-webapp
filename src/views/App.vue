<template>
 <div class="section-block">
    <img class="logo" src="../assets/images/logo.png">
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
  ready (){
         
      
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
