<template>
	<nv-head page-title="列表" menu-bar="true"></nv-head>
	<div class="page-loading" id="freshen">加载中...</div>	
	<div class="ui-list no-top inner-border">
		<div class="cell" v-for="post in posts" v-link="{name:'detail',params:{id:post.id}}">
			<div class="cell-thumb"><img src="../assets/images/logo.png" alt=""></div>
			<div class="cell-bd">
				<h3 v-text="post.title" class="ov-h"></h3>
				<p class="ellipsis2" v-html="post.excerpt | limitBy 40"></p>
			</div>
		</div>

	</div>
	<div id="loadmore" class="ta-c" v-text="loadMoreText"></div>
	<nv-alert></nv-alert>
</template>

<script>
	export default {
		data () {
		    return {
		      posts: '',
		      scroll:  true,
		      loadMoreText: '',
		      pageStop: true,
		      pageKey: {
		      	 count: 8,//每页显示多少个
		      	 page: 1  // 起始页码
		      }
		    }
		},
		route:{
            data (transition){
            	let self = this;
            		self.ajaxLits();
            	

            	window.onscroll = function() {
            		let l = (document.body.clientHeight/2) - 20;
            		if(l < window.screen.height+document.body.scrollTop){
            			if(self.scroll && self.pageStop){
	            			self.scroll = false
	            			self.ajaxLits();
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
			ajaxLits (){
				let self = this;
					self.$http.jsonp('http://wp.bytecats.com/api/get_posts/?count='+self.pageKey.count+'&page='+self.pageKey.page).then(function (response,status,request) {
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