<template>
  <header id="header">
      <div class="top-icon-left" v-if="backBar" @click="backpages(pageLink)" >
      </div>
      <h1 v-text="pageTitle"></h1>
      <div id="cartbtn" class="top-icon-right" v-if="cartBar" @click="editCart" v-text="txt">
      </div>
      <div id="menu" class="top-icon-right" v-if="menuBar" @click="showMenu">
        <svg width="60px" height="60px" viewBox="0 0 16 16" version="1.1">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Core" sketch:type="MSLayerGroup" transform="translate(-340.000000, -4.000000)" fill="#ffffff">
                    <g id="apps" transform="translate(340.000000, 4.000000)" sketch:type="MSShapeGroup">
                        <path d="M0,4 L4,4 L4,0 L0,0 L0,4 L0,4 Z M6,16 L10,16 L10,12 L6,12 L6,16 L6,16 Z M0,16 L4,16 L4,12 L0,12 L0,16 L0,16 Z M0,10 L4,10 L4,6 L0,6 L0,10 L0,10 Z M6,10 L10,10 L10,6 L6,6 L6,10 L6,10 Z M12,0 L12,4 L16,4 L16,0 L12,0 L12,0 Z M6,4 L10,4 L10,0 L6,0 L6,4 L6,4 Z M12,10 L16,10 L16,6 L12,6 L12,10 L12,10 Z M12,16 L16,16 L16,12 L12,12 L12,16 L12,16 Z" id="Shape"></path>
                    </g>
                </g>
            </g>
        </svg>
      </div>
  </header>
  <div class="showmenu" v-if="menuBar" v-show="dropmenu" transition="menu">
      <div class="inner">
     <ul class="navbar">
        <li v-link="{ path: '/', exact: true}"><i class="iconfont">&#xe61c;</i>首页</li>
        <li v-link="{ path:'/list',exact: true}"><i class="iconfont">&#xe619;</i>商品列表</li>
        <li v-link="{ path: '/cart', exact: true}"><i class="iconfont">&#xe612;</i>购物车</li>
        <li v-link="{ path: '/ucenter', exact: true}"><i class="iconfont">&#xe61a;</i>会员中心</li>
        <li v-link="{ path: '/ucenter/order', exact: true}"><i class="iconfont">&#xe614;</i>我的订单</li>
        <li v-link="{ path: '/cuxiao', exact: true}"><i class="iconfont">&#xe617;</i>促销商品</li>
        <li v-link="{ path: '/ucenter/collect', exact: true}"><i class="iconfont">&#xe607;</i>我的收藏</li>
        <li v-link="{ path: '/search', exact: true}"><i class="iconfont">&#xe60d;</i>商品搜索</li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
  props: ['pageTitle','cartBar','backBar','pageLink','menuBar'],
  data (){
    return {
      txt : '编辑',
      editStatus: false,
      dropmenu: false
    }
  },
  methods: {
    editCart (){
      let self = this;
          if(!self.editStatus){
             self.txt = '完成';
             self.editStatus = true;
          }else{
            self.txt = '编辑';
             self.editStatus = false;
          }
          self.$dispatch('cart-msg', self.editStatus)
    },
    backpages (link){
      let self = this;
      
      if(link === 'back'){
        window.history.go(-1);
      }else{
        self.$route.router.go('/'+link);
      }
    },
    showMenu (){
      let self = this;
      self.dropmenu = !self.dropmenu;
    }
  }
}
</script>
<style lang="sass">
  @import "../assets/sass/config.scss";
  #header{
    background-color: $themes-color;
    text-align: center;
    height: px2rem(100);
    line-height: px2rem(100);
    color:#fff;
    position:relative;
    h1{
      margin: 0;font-size: px2rem(32);

    }
  }
  .top-icon-right,.top-icon-left{
    position:absolute;
    top:0;right: 0;
    padding: 0 px2rem(20);
  }
  .top-icon-left{
    right: auto;
    left: 0;
    height: 100%;
    width: px2rem(90);
    &:before{
      display: block;
      content: '';
      position:absolute;
      width: px2rem(20);height: px2rem(20);
      border-top:4px solid #fff;
      border-left:4px solid #fff;
      top:50%;
      left:50%;
      -webkit-transform: translate(-50%,-50%) rotate(-45deg);
      transform: translate(-50%,-50%) rotate(-45deg);
    }
  }
  #menu svg{
      display: block;
      height: 0.6rem;
      margin-top: .4rem;
  }
  .showmenu{
    background:#f5f5f5;
    position: absolute;
    width: 100%;
    z-index:1000;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 10px;
  }
  /* 必需 */
.menu-transition {
   -webkit-transition: all .3s linear;
    transition: all .3s linear;
    opacity: 1;

}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.menu-enter, .menu-leave {
  opacity: 0;
    -webkit-transform: translate3d(0,-40px,0);
    transform: translate3d(0,-40px,0);
}
</style>