<template>
	<nv-head page-title="详情" back-bar="true" page-link="cuxiao"></nv-head>	
	<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide swiper-detail">Slide 1</div>
            <div class="swiper-slide swiper-detail">Slide 2</div>
            <div class="swiper-slide swiper-detail">Slide 3</div>
            <div class="swiper-slide swiper-detail">Slide 4</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
    <div class="goodsinfo">
    	<div class="inner">
    	<h1 class="article-h1" v-text="data.title"></h1>
    	<div class="flex-wrap">
    		<div class="detail-price pull-left">123.00</div>
    		<div class="flex-1 tag-group">
    			<span>新品特惠</span>
    			<span>送金币8</span>
    		</div>
    	</div>
    	<div class="flex-wrap gray">
    		<div class="flex-1">快递：免运费</div>
    		<div class="flex-1">月销售120件</div>
    		<div class="flex-1 ta-r">广东广州</div>
    	</div>
    	</div>
    	<div class="flex-wrap parms">
    		<div class="flex-1"><span class="iconfont">&#xe61d;</span>48小时发货</div>
    		<div class="flex-1"><span class="iconfont">&#xe61d;</span>7天无条件</div>
    		<div class="flex-1"><span class="iconfont">&#xe61d;</span>如实描述</div>
    	</div>
    </div>
    <div class="goods-detail">
    	<div class="inner">
		
		<div v-html="data.content"></div>
	</div>
    </div>
	
<nv-alert></nv-alert>
</template>

<script>
	export default {
		data () {
		    return {
		      	data: '',
                topicId: ''
             
   
		    }
		},
		ready (){
		    var swiper = new Swiper('.swiper-container', {
		                  pagination: '.swiper-pagination',
		                  slidesPerView: 'auto',
					        centeredSlides: true,
					        paginationClickable: true,
					        spaceBetween: 10,
					        loop:true
		              });
		  },
		route:{
            data (transition){
            	let self = this;
            		self.topicId=transition.to.params.id;

	                self.$http.jsonp('http://wp.bytecats.com/api/get_post/?post_type=product&id='+self.topicId).then(function (response) {
	                      // set data on vm
	                        console.log(response);
	                         // self.data = response.posts;
	                          self.$set('data', response.data.post);
	                  }, function (response) {

	                      // handle error
	                  });    
	                
            }
        },
		components: {
		    "nvHead":require('../components/header.vue'),
		    "nvAlert":require('../components/alert.vue')
		}
	}
</script>
<style lang="sass">
	@import "../assets/sass/config.scss";
	.ta-r{
		text-align: right;
	}
	.flex-wrap{
		.flex-1{
			@include flex(1);
		}
	}
	.article-h1{
		font-size: px2rem(32);line-height: 1.3;
	}
	.article-mate{
		color:#999;
	}
	.goodsinfo{
		background-color:#fff;
		margin-bottom: px2rem(20);
		overflow: hidden;
	}
	.detail-price{
		margin-right: px2rem(20);
		font-size: px2rem(40);
		color:$price-color;
		position:relative;
		&:before{
			content: "￥:";
			font-size: px2rem(24);
		}
	}
	.tag-group{
		vertical-align: bottom;
		span{
			display: inline-block;
			background-color:$themes-color;
			color:#fff;
			line-height: 1.3;
			padding: 0 3px;
			margin-right: 5px;
			font-size: px2rem(20);
			&:nth-child(2){background-color:green}
		}
	}
	.parms{
		background-color:#f9f9f9;
		padding: px2rem(10) 0;
		border-bottom:1px solid $border-color;
		.flex-1{
			padding-left: px2rem(20);
			.iconfont{
				margin-right: 5px;
				color:$themes-color;
			}
		}
	}
	.goods-detail{
		background-color:#fff;
		border-top:1px solid $border-color;
	}
	.swiper-detail{
		width: 60%;
	}
</style>