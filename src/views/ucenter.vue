<template>
	<nv-head page-title="个人中心" back-bar="true" page-link=""></nv-head>	
	<div class="draggable-header-view"
    @mousedown="startDrag" @touchstart="startDrag"
    @mousemove="onDrag" @touchmove="onDrag"
    @mouseup="stopDrag" @touchend="stopDrag" @mouseleave="stopDrag">
    <svg class="bg" width="100%" height="100%">
      <path :d="headerPath" fill="#ff6600"></path>
    </svg>
    <div class="header">
      	<div class="face">
      	</div>
    </div>
    <div class="content" :style="contentPosition">
       	<ul class="ui-list offset-left ucenter-list">
		<li v-link="{path: '/ucenter/collect' }" class="cell arrow-right"><span class="iconfont">&#xe607;</span>我的收藏</li>
		<li v-link="{path: '/ucenter/order' }" class="cell arrow-right"><span class="iconfont">&#xe614;</span>我的订单</li>
		<li v-link="{path: '/ucenter/balance' }" class="cell arrow-right"><span class="iconfont">&#xe61b;</span>我的余额</li>
		<li v-link="{path: '/ucenter/address' }" class="cell arrow-right"><span class="iconfont">&#xe60f;</span>收货地址</li>
	</ul>
	<ul class="ui-list offset-left setting-ul">
		<li v-link="{path: '/ucenter/setting' }" class="cell arrow-right">
			<span class="iconfont">&#xe60e;</span>设置
		</li>
	</ul>
	<div class="inner">
		<a class="button btn-full-width btn-empty" @click="quit">退出登录</a>
	</div>
    </div>
  </div>

	<nv-alert></nv-alert>
</template>

<script>
	export default {
		data (){
			return {
				dragging: false,
			      // quadratic bezier control point
			      c: { x: 280, y: 280 },
			      // record drag start point
			      start: { x: 0, y: 0 }
			}
		},
		computed: {
    headerPath: function () {
      return 'M0,0 L750,0 750,280' +
        'Q' + this.c.x + ',' + this.c.y +
        ' 0,280'
    },
    contentPosition: function () {
      var dy = this.c.y - 280
      var dampen = dy > 0 ? 2 : 4
      return {
        transform: 'translate3d(0,' + dy / dampen + 'px,0)'
      }
    }
  },
	  components: {
	    "nvHead":require('../components/header.vue'),
	    "nvAlert":require('../components/alert.vue')
	  },
	  methods: {
	  	quit (){
	  		let self = this;
            localStorage.removeItem('loginStatus');
            self.$route.router.go('/');
	  	},
	  	
	  	startDrag: function (e) {
      e = e.changedTouches ? e.changedTouches[0] : e
      this.dragging = true
      this.start.x = e.pageX
      this.start.y = e.pageY
    },
    onDrag: function (e) {
      e = e.changedTouches ? e.changedTouches[0] : e
      if (this.dragging) {
        this.c.x = 280 + (e.pageX - this.start.x)
        // dampen vertical drag by a factor
        var dy = e.pageY - this.start.y
        var dampen = dy > 0 ? 1.5 : 4
        this.c.y = 280 + dy / dampen
      }
    },
    stopDrag: function () {
      if (this.dragging) {
        this.dragging = false
        dynamics.animate(this.c, {
          x: 280,
          y: 280
        }, {
          type: dynamics.spring,
          duration: 700,
          friction: 280
        })
      }
    }
  
	  }
	}
</script>
<style lang="sass">
	@import "../assets/sass/config.scss";
	.ui-list{
		background-color:#fff;
		&.no-top{border-top:none;}
		border-top:1px solid $border-color;
		border-bottom:1px solid $border-color;
		list-style: none;
		&.offset-left .cell{
			margin-left: px2rem($inner-border);
		}
		&.inner-border .cell{
			padding-left: px2rem($inner-border);
			padding-right: px2rem($inner-border);
		}
		&.inner-border .cell.arrow-right{
			padding-right: px2rem($inner-border + 10);
		}

	}
			.cell{
			border-bottom:1px solid $border-color;
			padding: px2rem($inner-border) 0;
				span.iconfont{
					margin-right: px2rem(30);
				}
			&:last-child{
				border-bottom:none;
			}
			&.arrow-right:after{
				content: "";
			    display: block;
			    height: px2rem(10);
			    width: px2rem(10);
			    border-width:3px 3px 0 0;
			    border-color: $border-color;
			    border-style: solid;
			    position: absolute;
			    right: px2rem($inner-border *2 );
			    top:50%;
       			-webkit-transform: translateY(-50%) rotate(45deg);
       			transform: translateY(-50%) rotate(45deg);

			}
		}
	ul.ucenter-list{
		li:first-child .iconfont{color:#9D34BF};
		li:nth-child(2) .iconfont{color:#41BD21};
		li:nth-child(3) .iconfont{color:#EA8631};
		li:nth-child(4) .iconfont{color:#3195EA};
	}
	ul.setting-ul{
		margin-top: px2rem(20);
		li:first-child .iconfont{color:#F50454};
	}
	.ov-h{
		@include ellipsis(1);
	}
	.ellipsis2{
		@include ellipsis(2);
	}
.draggable-header-view {
	position:absolute;
  width: 100%;
  bottom:0;
  top: px2rem(100);
  overflow: hidden;
  margin: 0 auto 20px; 
  color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.draggable-header-view .bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  bottom:0;
}
.draggable-header-view .header, .draggable-header-view .content {
  position: relative;
  z-index: 1;
}
.draggable-header-view .header {
  height: 280px;margin-bottom: px2rem(20);overflow: hidden;
}
.draggable-header-view .content {
  color: #333;
  line-height: 1.5em;
}
.face{
	width: 180px;height: 180px;
	background-color:#fff;
	border-radius:100%;
	margin: 50px auto;
	position: relative;
	overflow: hidden;
	border:2px solid #fff;
	background:#fff url(../assets/images/face.jpg) no-repeat;
	-webkit-background-size:100% auto;
	background-size:100% auto;
	img{
		max-width:100%;
		height: 100%;
	}
}
</style>