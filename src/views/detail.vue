<template>
	<nv-head page-title="详情" back-bar="true" page-link="list"></nv-head>	
	<div class="inner">
		<h1 class="article-h1" v-text="data.title"></h1>
		<div class="article-mate">
			<span v-text="data.categories[0].title | addTextTag '分类'"></span>   
			<span v-text="data.date | addTextTag '发布时间'"></span>
		</div>
		<hr />
		<div v-html="data.content"></div>
	</div>
<nv-alert></nv-alert>
</template>

<script>
	export default {
		data () {
		    return {
		      	data: '',
                topicId: '',
                category: ''
		    }
		},
		route:{
            data (transition){
            	let self = this;
            		self.topicId=transition.to.params.id;

	                self.$http.jsonp('http://wp.bytecats.com/api/get_post/?id='+self.topicId).then(function (response) {
	                      // set data on vm
	                        console.log(response);
	                         // self.data = response.posts;
	                          self.$set('data', response.data.post);
	                          self.category = response.data.post.categories[0].title;
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
	.article-h1{
		font-size: px2rem(32);
	}
	.article-mate{
		color:#999;
	}
</style>