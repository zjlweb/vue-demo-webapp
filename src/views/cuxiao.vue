<template>
	<nv-head page-title="促销商品" back-bar="true" page-link="back" menu-bar="true"></nv-head>
	<div class="page-loading" id="freshen">加载中...</div>	
	<div class="cuxiao-bg">
		<div class="row-two clearfix">
			<div class="thumb" v-for="item in posts" v-link="{name:'details',params:{id:item.id}}">
				<div class="thumb-img">
					<img :src="item.thumbnail"  alt="">
				</div>
				<div class="thumb-title">
					<h3 v-text="item.title"></h3>
					<p><span v-text="item.price | currency '￥'"></span><span class="pull-right" v-text="item.commit"></span></p>
				</div>
			</div>
			
		</div>
	</div>
	<nv-alert></nv-alert>
	
</template>

<script>
	export default {
		data (){
			let self = this;
			return{
				scroll:  true,
			      loadMoreText: '',
			      pageStop: true,
			      pageKey: {
			      	 count: 8,//每页显示多少个
			      	 page: 1  // 起始页码
			      },
				alert: {
                    txt: '',
                    show: false,
                    hideFn:function(times){
                        let timer = times ? times: 2000;
                        setTimeout(function () {
                            self.alert.show = false;
                        }, timer);
                    }
                },
                posts:[]
			}
		},
		route:{
            data (transition){
            	let self = this;
            		self.ajaxgoods();
            	

            	window.onscroll = function() {
            		let l = (document.body.clientHeight/2) - 20;
            		if(l < window.screen.height+document.body.scrollTop){
            			if(self.scroll && self.pageStop){
	            			self.scroll = false
	            			self.ajaxgoods();
	            		}
            		}

                }
            }
        },
	  components: {
	    "nvHead":require('../components/header.vue'),
	    "nvAlert":require('../components/alert.vue')
	  },
      methods: {
        ajaxgoods (){
				let self = this;
					self.$http.jsonp('http://wp.bytecats.com/api/get_posts/?post_type=product&count='+self.pageKey.count+'&page='+self.pageKey.page).then(function (response,status,request) {
                         console.log(response);

						if(self.pageKey.page === 1){
                            self.$set('posts', response.data.posts);
	                    }else{
	                        self.posts = self.posts.concat(response.data.posts);

	                    }
                        if(!document.getElementById('freshen').classList.contains('hide')){
							document.getElementById('freshen').classList.add('hide');
                        }
						self.scroll = true;
						self.pageKey.page++;
						self.loadMoreText = '下拉加载...';
						if(response.data.count_total === 0){
							self.pageStop = false;
							self.loadMoreText = '加载完毕';
						}
                  },function (response) {
                        setTimeout(function(){
                         self.$route.router.go('/');
                        },1000)
                  });
				
			}
      }
    }
</script>
<style lang="sass">
	@import "../assets/sass/config.scss";
	.cuxiao-bg{
		// background-color: $themes-color-cx;
		
	}
	.root-ipad .row-two .thumb{
		width: 25%;
	}
	.row-two{
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
					font-weight:normal;
					@include font-dpr(14px);
				}
			}
		}
	}
</style>