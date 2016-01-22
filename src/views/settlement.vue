<template>
<div>
	<nv-head page-title="结算中心" back-bar="true" page-link="back"></nv-head>
	<h1>结算页面</h1>
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
