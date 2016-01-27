export default function(router){
	router.map({
		'/':{
			name: 'home',
			component:require('./views/App.vue')
		},
		/* 404路由 */
        '*': {
            component: require('./views/App.vue')
        },
		'/list':{
			name: 'list',
			component:require('./views/list.vue'),
			bodyClass: 'list-bg'
		},
		'/detail/:id':{
			name: 'detail',
			component:require('./views/detail.vue')
		},
		'/cart':{
			name: 'cart',
			component:require('./views/cart.vue')
		},
		'/search':{
			name: 'search',
			component:require('./views/search.vue')
		},
		'/cuxiao':{
			name: 'cuxiao',
			component:require('./views/cuxiao.vue')
		},
		'/details/:id':{
			name: 'details',
			component:require('./views/details.vue')
		},
		'/ucenter':{
			name: 'ucenter',
			component:require('./views/ucenter.vue'),
			auth: true
		},
		'/login':{
			name: 'login',
			component:require('./views/login.vue')
		},
		'/ucenter/setting':{
			name: 'setting',
			component:require('./views/setting.vue'),
			auth: true
		},
		'/ucenter/address':{
			name: 'address',
			component:require('./views/address.vue'),
			auth: true
		},
		'/ucenter/address/:id':{
			name: 'addressDetail',
			component:require('./views/addressDetail.vue'),
			auth: true
		},
		'/ucenter/collect':{
			name: 'collect',
			component:require('./views/collect.vue'),
			auth: true
		},
		'/ucenter/order':{
			name: 'order',
			component:require('./views/order.vue'),
			auth: true
		},
		'/ucenter/balance':{
			name: 'balance',
			component:require('./views/balance.vue'),
			auth: true
		},
		'/settlement':{
			name: 'settlement',
			component:require('./views/settlement.vue'),
			isLock: true
		}
	})
}