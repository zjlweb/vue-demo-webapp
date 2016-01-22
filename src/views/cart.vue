<template>
	<nv-head page-title="购物车" menu-bar="true"></nv-head>	
	<div class="cart-list" v-for="list in cartlist">
			<div class="cart-list-header">
				<label class="checkbox-label" for="{{list.pid}}" @click="checkboxs(list)"><input type="checkbox" class="" v-model="list.isDefault" id="{{list.pid}}"></label>[单品]
				<div class="pull-right">
					<span class="price-color" v-text="list.price * list.num | currency '￥'"></span>
				</div>
			</div>
			<div class="cart-list-body">
				<div class="cell-thumb"><img src="../assets/images/logo.png" alt=""></div>
				<div class="cell-bd">
					<h3 v-text="list.title"></h3>
					<div>
						<p>颜色：白色 尺码：36</p>
						<p><span class="price-color" v-text="list.price | currency '￥'"></span>  运费：<span class="gray">￥9</span></p>
					</div>
				</div>
			</div>
			<div class="cart-list-footer">
				<button class="button btn-empty btn-small" @click="del(list)"><i class="iconfont">&#xe600;</i></button>
				<div class="pull-right ui-stock">
					<button type="button" :disabled="list.num == 1" @click="lessNum(list)">-</button>
					<input name="" id="stockNum" @blur="aaa(list)" v-model="list.num" lazy>
					<button type="button" :disabled="list.stock == list.num" @click="addNum(list)">+</button>
				</div>
			</div>
	</div>
	<div class="cart-list"  v-if="cartlist.length != 0">
		<div class="clearfix">
			<div class="pull-left">
				<label class="checkbox-label" for="all" @click="checkboxs('all')"><input type="checkbox" class="" v-model="list.isDefault" id="all"></label>删除选中
			</div>
			<div class="pull-right price-color" @click="delAll">
				清空购物车
			</div>
		</div>
		
	</div>
	<div v-else class="alert-status">
		<div class="alert-inner">
			<i class="iconfont">&#xe612;</i>
			<p>您的购物车尚未添加商品</p>
			<button class="button btn-important" v-link="{path: '/list'}">去购物</button>
		</div>
	</div>
	<div class="bot-bar" v-if="cartlist.length != 0">
		<div class="pull-left">
			<span>合计： 12323</span>
		</div>
		<div class="pull-right settlement-btn" :class="islock" @click="settlement"><span class="">结算(2)</span></div>
	</div>
	<nv-alert :content="alert.txt" :show="alert.show" :class="alert.type" :confirm-content="confirm.txt" :confirm-show="confirm.show" :confirm-func="comfirm"></nv-alert>
</template>

<script>
	export default {
		data (){
			let self = this;
			return {
				times: null,
				checkedAll: false,
				islock: 'islock',
				alert: {
                    txt: '',
                    show: false,
                    type: '',
                    hideFn:function(times){
                        let timer = times ? times: 2000;
                        setTimeout(function () {
                            self.alert.show = false;
                        }, timer);
                    }
                },
                confirm: {
                	txt: '',
                	show: false,
                	okCallback: ''
                	
                },
                cartlist: []
			}
		},
		route:{
            data (transition){
				let self = this;
				self.jsondata();
            }
        },
		ready (){

			
		},
	    methods: {
	    	aaa(list){
	    		let self = this;
	    		let number = list.num.replace(/[^\d.]/g, '');
	    		list.num = parseInt(number,0);
	    		if(list.num > list.stock){
	    			list.num = list.stock;
	    		}else if(list.num === 0){
	    			list.num = 1;	
	    		}
	    		console.log(list.num +'---' + typeof list.num);
	    	},
	    	delGoods (){
	    		let self = this;
	    		if(!self.checkedAll){
	    			self.alert.txt = '请选择所要删除的商品！';
	    			self.alert.type = 'alert';
		    		self.alert.show = true;
		    		self.alert.hideFn();
	    		}else{
	    			self.alert.txt = '删除成功！';
	    			self.alert.type = 'seccess';
		    		self.alert.show = true;
		    		self.alert.hideFn();
	    		}
	    		return;
	    	},
	    	addNum (list){
	    		let self = this;
	    		console.log(list.num);
	    		list.num++;
	    		console.log(event);
	    		list.disabled = false;
	    		self.ajax();
	    		console.log(document.getElementById('stockNum').event);
	    	},
	    	lessNum (list){
	    		let self = this;
	    		console.log(event.target.disabled);
	    		list.num--;
	    		if(list.num < 2){
	    			list.disabled = true;
	    			
	    		}
	    		self.ajax();
	    	},
	    	ajax (){
	    		let self = this;
	    		clearTimeout(self.times);  //防止快速点击重复请求，间隔200毫秒，以最后一次请求为准
	    		self.times = setTimeout(function(){
	    			console.log('发起请求~');
	    		},350);
	    	},
	    	jsondata(){
	    		let self = this;
	    		let datas = [
                	{pid: '1',title:'女单高品鞋子',dec: '颜色：白色 尺码：36',price:'123.89',num: '5',isDefault: true,stock: 50},
                	{pid: '2',title:'高跟鞋',dec: '颜色：黑色 尺码：35',price:'203.78',num: '2',isDefault: false,stock:100}
                ];
                for (let i = 0; i < datas.length; i++) {
                	if(datas[i].isDefault){
						self.islock = '';
						break;	
					}
                };
	    					
                self.cartlist = datas;
	    	},
	    	checkboxs (list){
	    		let self = this;
	    		console.log(event)
	    		let flag = false;
	    		if(list === 'all'){
	    				console.log(event.target.checked);
	    				self.cartlist.forEach(function(e){
	    					if(!event.target.checked){
	    						e.isDefault = false;
	    						self.islock = 'islock';
	    					}else{
	    						e.isDefault = true
	    						self.islock = '';
	    					}
	    				});
	    				
	    			}else{


	    				list.isDefault = !list.isDefault;
	    				console.log(self.cartlist);

	    				
	    			
					}
	    		
	    		// 
	    			
	    	},
	    	del (list){
	    		console.log(list.pid);
	    		let self =this;
	    		self.confirm.show = true;
	    		self.confirm.txt ="是否删除选择商品？";
	    		self.confirm.okCallback(function(){
	    			alert('sss');
	    		})
	    	},
	    	delAll (){
	    		let self = this;
	    		self.cartlist = '';
	    		
	    	},
	    	settlement (){
	    		let self = this;
	    		self.$route.router.go('/settlement');
	    		console.log('去结算');
	    	}
	    },
	    components: {
			"nvHead":require('../components/header.vue'),
			"nvAlert":require('../components/alert.vue')
		},
		events: {
			
		    'oncancel': function (msg) {
		        this.confirm.show = false;
		    },
		    'onconfirm': function (msg) {
		        alert('ss')
		  
		        this.confirm.show = false;
		    },
		    'quitConfirm': function(){
		    	this.confirm.show = false;
		    }
		}
	}
</script>
<style lang="sass">
@import "../assets/sass/config.scss";
.cart-list{
    border:1px solid $border-color;
    background-color: #fff;
    margin: px2rem(20) 0;
    > div{
      padding: px2rem(10);  
    }
    .cart-list-body{
        border-top:1px dashed $border-color;
        border-bottom:1px dashed $border-color;
    }
}
.cart-list-header{
	line-height: 36px;
}
.cart-list-body,.cell{
	position: relative;
			display: -webkit-box;
			    display: -webkit-flex;
			    display: -ms-flexbox;
			    display: flex;
			    -webkit-box-align: center;
			    -webkit-align-items: center;
			    -ms-flex-align: center;
			    width: 100%;
}
	.cell-thumb{
				width: px2rem(120);
				height: px2rem(120);
				margin-right: px2rem(15);
				float:left;
				.thumb{
					width: px2rem(120);
					height: px2rem(120);
					display: block;
					background-size:100% 100%;
					background-repeat: no-repeat;
					border:1px solid $border-color;
				}
			}
			.cell-right{
				padding: 0 px2rem(10);
			}
			.cell-bd{
				-webkit-box-flex: 1;
			    -webkit-flex: 1;
			    flex: 1;
			}
			.cell-checkbox{
				width: px2rem(60);
				text-align:center;
				float: left;
				height: px2rem(120);
				label{
					height: 100%;
					display: block;
				}
			}
	.alert-status{
		padding: px2rem(40) !important;
		text-align: center;
		font-size: px2rem(30);
		height: 500px;
		width: 100%;
		.alert-inner{
			
	
		}
		.iconfont{
			font-size: 1.5rem;
			color:#666;
		}
		p{
			color:#999;
			margin-bottom: px2rem(20);
		}
	}
	.cart-transition{
		opacity: 1;
		-webkit-transition:all .3s ease;
		transition:all .3s ease;
	}
	.cart-enter, .cart-leave{
		opacity: 0;
		-webkit-transform: scale(.5);
		transform: scale(.5);
	}
	.ui-stock{
		>*{
			-webkit-appearance: none;
			appearance: none;
			border-radius:0;
			border:1px solid #ddd;
			float:left;
			text-align: center;
		}
		> *:focus{
			outline:none;
		}
		button{
			background-color:#ddd;
			height: px2rem(40);
			padding: 0 px2rem(15);
			color:#666;
			font-weight:bold;
		}
		button[disabled="true"]{background-color:#eee;color:#ddd;}
		input{
			-webkit-appearance: none;
			appearance: none;
			background-color:#fff;
			height: px2rem(40);
			width: px2rem(60);

			border-left:none;
			border-right:none;

		}
	}
	.checkbox-label{
		display: inline-block;
		padding: px2rem(10);
		margin:px2rem(-10) px2rem(10) px2rem(-10)px2rem(-10);
	}
	.checkbox-label input{
		position:relative;
		border:1px solid #ccc;
		background:#fff;
		-webkit-appearance: none;
		appearance: none;
		display: inline-block;
		width: 36px;
		height:36px;
		vertical-align: top;
		&:focus{outline: none;}
		&:checked{
			border:1px solid $themes-color;
		}
		&:checked:before{
			content: '';
			display: block;
			position:absolute;
			top:8px;
			left: 8px;
			border-left:6px solid $themes-color;
			border-bottom:6px solid $themes-color;
			width: 20px;
			height: 12px;
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
		}
		&:before{
			display: none;
		}
		
	}



</style>