<template>
<div>
	<nv-head page-title="我的余额" back-bar="true" page-link="ucenter"></nv-head>
	<div class="section-bar">
		<h2>￥888.00</h2>
		<p>我的可用余额</p>
	</div>
	<ul class="ui-list offset-left">
		<li class="cell">
			<div class="balance-cont">
				<h3>订单：2015050987672345，购买商品</h3>
				<p>2015年05月09日 12:02:00</p>
			</div>
			<div class="balance-cash less">-288</div>
		</li>
		<li class="cell">
			<div class="balance-cont">
				<h3>订单奖励：2015050987672345，购买商品</h3>
				<p>2015年05月09日 12:02:00</p>
			</div>
			<div class="balance-cash add">+8</div>
		</li>
		<li class="cell">
			<div class="balance-cont">
				<h3>订单：2015050987672345，购买商品</h3>
				<p>2015年05月09日 12:02:00</p>
			</div>
			<div class="balance-cash less">-288</div>
		</li>
		<li class="cell">
			<div class="balance-cont">
				<h3>订单：2015050987672345，购买商品</h3>
				<p>2015年05月09日 12:02:00</p>
			</div>
			<div class="balance-cash less">-288</div>
		</li>
		<li class="cell">
			<div class="balance-cont">
				<h3>活动抽奖：2015050987672345</h3>
				<p>2015年05月09日 12:02:00</p>
			</div>
			<div class="balance-cash add">+8</div>
		</li>
	</ul>

	<nv-alert></nv-alert>
	</div>
</template>

<script>
	export default {
		data (){
			let self = this;
			return{
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
        
        }
    }
</script>
<style lang="sass">
	@import "../assets/sass/config.scss";
	.section-bar{
		border-bottom:1px solid $border-color;
		padding: px2rem(60) 0;
		text-align: center;
		background-color:#fff;
		margin-bottom: px2rem(20);
		h2{
			@include font-dpr(24px);
			color: $themes-color;
		}
	}
	.balance-cont{
		@include flex(80);
		p{color:#999;}
	}
	.balance-cash{
		@include flex(20);
		text-align: center;
		&.less{
			color:green;
		}
		&.add{
			color:$themes-color;
		}
	}

</style>
