<template>
<div>
	<nv-head page-title="收货地址" back-bar="true" page-link="ucenter"></nv-head>
	<div class="wrap-section inner-border">
		<div class="section-block arrow-right" v-for="list in addressList" v-link="{name:'addressDetail',params:{id:list.id}}">
			<h3> <strong v-text="list.name"></strong><span class="pull-right" v-text="list.tel"></span></h3>
			<p v-text="list.address"></p>
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
                },
                addressList: [
                	{id:'1',name: '张三',tel:'18767656543',address:'广东省深圳市南山区科园一路22号 A8音乐大厦902'},
                	{id:'2',name: '李四',tel:'18767656543',address:'广东省深圳市南山区科园一路22号 A8音乐大厦902A8音乐大厦902'},
                	{id:'3',name: '王武',tel:'18767656543',address:'广东省深圳市南山区科园一路22号 A8音乐大厦902'},
                	{id:'4',name: '胡六',tel:'18767656543',address:'广东省深圳市南山区科园一路22号 A8音乐大厦902安师大'}
                ]
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
	.wrap-section{
		.section-block:first-child{
			margin-top: 0;border-top:none;
		}
		&.inner-border .section-block{
			padding-left:px2rem($inner-border);
			padding-right:px2rem($inner-border * 3);
		}
			.arrow-right:after{
				content: "";
			    display: block;
			    height: px2rem(10);
			    width: px2rem(10);
			    border-width:3px 3px 0 0;
			    border-color: $border-color;
			    border-style: solid;
			    position: absolute;
			    right: px2rem($inner-border);
			    top:50%;
       			-webkit-transform: translateY(-50%) rotate(45deg);
       			transform: translateY(-50%) rotate(45deg);

			}
		
	}
</style>