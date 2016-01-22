<template>
	<nv-head page-title="我的订单" back-bar="true" page-link="ucenter"></nv-head>
	<div class="flex-wrap ta-c tab-order">
		<a class="flex" @click="tabOrder('1')" :class="{'current': tabType == 'active1'}">
			所有订单
		</a>
		<a class="flex" @click="tabOrder('2')" :class="{'current': tabType == 'active2'}">
			待付款
		</a>
		<a class="flex" @click="tabOrder('3')" :class="{'current': tabType == 'active3'}">
			已付款
		</a>
		<a class="flex" @click="tabOrder('4')" :class="{'current': tabType == 'active4'}">
			已取消
		</a>
		<div class="active" :class="tabType" ></div>
	</div>
	<div class="alert-status">
		<div class="alert-inner">
			<i class="iconfont">&#xe610;</i>
			<p>暂无订单</p>
		</div>
	</div>

	<nv-alert></nv-alert>
	
</template>

<script>
	export default {
		data (){
			let self = this;
			return{
				tabType: '',
				isActive: false,
				alert: {
                    txt: '',
                    show: false,
                    hideFn:function(times){
                        let timer = times ? times: 2000;
                        setTimeout(function () {
                            self.alert.show = false;
                        }, timer);
                    }
                }
			}
		},
	   components: {
		    "nvHead":require('../components/header.vue'),
		    "nvAlert":require('../components/alert.vue')
	   },
        methods: {
        	tabOrder (n){
        		console.log(n);
        		let self = this;
        		self.tabType = 'active'+ n;
        	}
        }
    }
</script>
<style lang="sass">
	@import "../assets/sass/config.scss";
	.flex-wrap{
		.flex{
			@include flex(1);
		}
	}
	.tab-order{
		background-color:#fff;
		position:relative;
		a{
			padding: px2rem(20);
			@include font-dpr(14px);
			&.current{color:red}
		}
		.active{
			position:absolute;
			width: 25%;
			bottom:0;
			left:0;
			height: 3px;
			background-color:red;
			-webkit-transition:all 0.2s ease;
			transition:all 0.2s ease;
		}
		.active2{
			transform: translateX(100%);
		}
		.active3{
			transform: translateX(200%);
		}
		.active4{
			transform: translateX(300%);
		}
	}
</style>