<template>
<div>
	<nv-head page-title="商品搜索" back-bar="true" page-link="back"></nv-head>
		<div class="row-list clearfix">
			<div class="thumb">
				<div class="thumb-img">
					<img src="../assets/images/thumb.png"  alt="">
				</div>
				<div class="thumb-title">
					<h3>这里是标题</h3>
					<p><span>￥82.00</span><span class="pull-right">1122</span></p>
				</div>
			</div>
			<div class="thumb">
				<div class="thumb-img">
					<img src="../assets/images/thumb.png"  alt="">
				</div>
				<div class="thumb-title">
					<h3>这里是标题</h3>
					<p><span>￥82.00</span><span class="pull-right">1122</span></p>
				</div>
			</div>
			<div class="thumb">
				<div class="thumb-img">
					<img src="../assets/images/thumb.png"  alt="">
				</div>
				<div class="thumb-title">
					<h3>这里是标题</h3>
					<p><span>￥82.00</span><span class="pull-right">1122</span></p>
				</div>
			</div>
			<div class="thumb">
				<div class="thumb-img">
					<img src="../assets/images/thumb.png"  alt="">
				</div>
				<div class="thumb-title">
					<h3>这里是标题</h3>
					<p><span>￥82.00</span><span class="pull-right">1122</span></p>
				</div>
			</div>
			
		</div>
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
	.row-list{
		margin-left: px2rem(20);
		padding: px2rem(20) 0 0 0;

		.thumb{
			float: left;
			
			margin-bottom: px2rem(20);
			width: 50%;
			position:relative;
			background-color:#fff;
			padding: px2rem(10);
			padding-right: px2rem(30);
			
			&:after{
				width: px2rem(20);
				height: 100%;
				content: '';
				display: block;
				position:absolute;
				top:0;right:0;
				background-color:#f5f5f5;
			}
			.thumb-img{
				padding-bottom: 100%;
				height: 0;overflow: hidden;
				img{
					width: 100%;
				}
			}
			.thumb-title{
				h3{
					overflow: hidden;
					white-space:nowrap;
					text-overflow: ellipsis;
				}
			}
		}
	}
	.root-ipad .row-list .thumb{
		width: 25%;
	}
</style>