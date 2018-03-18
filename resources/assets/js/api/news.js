import Vue from 'vue'
import axios from 'axios'

// 设置laravel的csrfToken
axios.defaults.headers.common['X-CSRF-TOKEN'] = Laravel.csrfToken

const API_ROOT = '/api'; /* 可以根据自己的开发环境设置 */

export default {
	// 首页推荐信息
	getNewsRecommend () {
		return axios.get(API_ROOT + '/news');
	},
	// 列表信息
	getNewsLists (page) {
		return axios.get(API_ROOT + '/news/lists?page=' + page);
	},
	// 详情
	getNewsDetail (id) {
		return axios.get(API_ROOT + '/news/detail/' + id);
	}
}