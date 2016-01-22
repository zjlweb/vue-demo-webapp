<template>
<div>
	<nv-head page-title="编辑地址" back-bar="true" page-link="ucenter/address"></nv-head>
	<div class="wrap-section inner-border">
		<ul class="ui-list offset-left no-top">
		<li class="cell">姓名：<input type="text" name="" id="" v-model="" value="谢飞太"></li>
		<li class="cell">电话：<input type="text" name="" id="" v-model="" value="谢飞太"></li>
		<li class="cell">省份：<input type="text" name="" id="" v-model="" value="谢飞太"></li>
		<li class="cell">详情地址：<input type="text" name="" id="" v-model="" value="谢飞太"></li>
		<li class="cell">
			<div class="cell-lable">
				姓名：
			</div>
			<div class="cell-input">
				s
			</div>
		</li>
	</ul>
	<div class="inner">
		<a class="button btn-full-width btn-info" @click="addressSave">保存</a>
	</div>
	</div>
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
                },
				topicId: ''
			}
		},
		route:{
            data (transition){
            	let self = this;
            		self.topicId=transition.to.params.id;

	               	console.log(self.topicId);
	       
            }
        },
	  components: {
	    "nvHead":require('../components/header.vue'),
	    "nvAlert":require('../components/alert.vue')
	  },
        methods: {
        	addressSave(){
        		let self = this;
        			self.alert.show = true;
        			self.alert.txt = '保存成功';
        			setTimeout(function(){
						self.$route.router.go('/ucenter/address');
                    },2000);
        	}
        }
    }
</script>
<style lang="sass">
	@import "../assets/sass/config.scss";
	.cell-lable{
		@include flex(20);

	}
	.cell-input{
		@include flex(80);
	}
</style>