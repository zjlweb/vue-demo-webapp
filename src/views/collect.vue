<template>
<div>
	<nv-head page-title="我的收藏" back-bar="true" page-link="ucenter"></nv-head>
	<ul class="ui-list no-top inner-border">
		<li class="cell">
			<div class="cell-thumb">
				<span class="thumb" style="background-image:url(./static/images/logo.png);"></span>
			</div>
			<div class="cell-bd">
				 <h3>时尚女鞋子</h3>
				 <p>材质精选，质感一流</p>
			</div>
			<div class="cell-right pull-right del-width" @click="delCollect('1')"><span class="iconfont">&#xe600;</span></div>
		</li>
		<li class="cell">
			<div class="cell-thumb">
				<span class="thumb" style="background-image:url(./static/images/logo.png);"></span>
			</div>
			<div class="cell-bd">
				 <h3>时尚女鞋子</h3>
				 <p>材质精选，质感一流</p>
			</div>
			<div class="cell-right pull-right del-width" @click="delCollect('2')"><span class="iconfont">&#xe600;</span></div>
		</li>
		<li class="cell">
			<div class="cell-thumb">
				<span class="thumb" style="background-image:url(./static/images/logo.png);"></span>
			</div>
			<div class="cell-bd">
				 <h3>时尚女鞋子</h3>
				 <p>材质精选，质感一流</p>
			</div>
			<div class="cell-right pull-right del-width" @click="delCollect('3')"><span class="iconfont">&#xe600;</span></div>
		</li>
		<li class="cell">
			<div class="cell-thumb">
				<span class="thumb" style="background-image:url(./static/images/logo.png);"></span>
			</div>
			<div class="cell-bd">
				 <h3>时尚女鞋子</h3>
				 <p>材质精选，质感一流</p>
			</div>
			<div class="cell-right pull-right del-width" @click="delCollect('4')"><span class="iconfont">&#xe600;</span></div>
		</li>
	</ul>
	<nv-alert :content="alert.txt" :show="alert.show"></nv-alert>
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
        	delCollect (id){
        		let self = this;
        		self.alert.txt = "删除成功";
        		self.alert.show = true;
        		self.alert.hideFn();
        	}
        }
    }
</script>
<style lang="sass">
@import "../assets/sass/config.scss";
	.ui-list .cell .del-width{
		padding:0 px2rem(40);
		text-align:center;
	}
</style>
