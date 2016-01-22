import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import attachFastClick from 'fastclick'
import routerMap from './router'
import filters from './filters'

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.debug = false;

//实例化Vue的filter
Object.keys(filters).forEach(function(k) {
        Vue.filter(k, filters[k]);
    })
/* 实例化router */
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});
//登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach(transition => {
    //FastClick.js 
     document.addEventListener('DOMContentLoaded', function() {
        attachFastClick.attach(document.body);
    }, false);
    //登录授权
    if (transition.to.auth) {
        if (localStorage.loginStatus) {
            transition.next();
        } else {
            var redirect = encodeURIComponent(transition.to.path);
            transition.redirect('/login?redirect=' + redirect);
        }
    } else {
        transition.next();
    }
})

let app = Vue.extend({});

routerMap(router);

router.start(app, "#app");