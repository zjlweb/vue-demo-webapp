<template>
	<nv-head page-title="用户登录" back-bar="true" page-link="back"></nv-head>
	<ul class="ui-list offset-left">
		<li class="cell"><input type="text" placeholder="用户名"></li>
		<li class="cell"><input type="text" placeholder="密码"></li>
	</ul>
	<div class="inner">
		<a class="button btn-info btn-full-width" @click="login">登录</a>
	</div>
	<nv-alert :content="alert.txt" :show="alert.show"></nv-alert>
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
            login (){
                let self = this;
                    localStorage.loginStatus = true;
                    let redirect = decodeURIComponent(self.$route.query.redirect || '/');
                    self.alert.txt = '登录成功';
                    self.alert.show = true;
                    setTimeout(function(){
                    	self.alert.hideFn()
						self.$route.router.go(redirect);
                    },2000);
                    
            }
        }
    }
</script>

<style lang="sass">
	@import "../assets/sass/config.scss";
	.inner{
		margin: px2rem(20);
	}
</style>