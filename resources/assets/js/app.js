
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const app = new Vue({
//     el: '#app'
// });
// 

import './bootstrap'
import Vue from 'vue'
import router from './router/'
import store from './store/'  // vuex 数据存储所需对象

// import ExampleComponent from './components/ExampleComponent.vue'
import App from './pages/layouts/App'


const app = new Vue({
	el: '#app',
	store,
	router,
	components: { App },
	template: '<App/>'
	// render: h => h(News)
})

