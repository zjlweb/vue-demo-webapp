<template>
<div>
	<nv-head page-title="个人设置" back-bar="true" page-link="ucenter"></nv-head>
	<ul class="ui-list offset-left">
		<li class="cell">姓名：</li>
		<li class="cell">电话：</li>
		<li class="cell">邮箱：</li>
		<li class="cell">QQ：</li>
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
