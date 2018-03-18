import {
	SET_NEWS_RECOMMEND,
	SET_NEWS_LISTS,
	SET_NEWS_DETAIL,
	GET_NEWS_DETAIL,
	GET_NEWS_RECOMMEND,
	GET_NEWS_LISTS
} from '../mutation-types.js'
import apiNews from '../../api/news'  /* 主要是异步调用接口文件 */

const state = {
	recommend: [], // 存储推荐列表
	lists: {},  // 存储列表
	detail: {}  // 存储详情
}

const getters = {
	// 在这里进行数据对外接口的获取
	getNewsDetail: state => state.detail,
	getNewsRecommend: state => state.recommend,
	getNewsLists: state => state.lists
}

const mutations = {
	// 这里可以设置state属性，但是不能异步调用，异步操作写到actions中
	[SET_NEWS_RECOMMEND] (state, payload) {
		state.recommend = payload
	},
	[SET_NEWS_LISTS] (state, payload) {
		state.lists = payload
	},
	[SET_NEWS_DETAIL] (state, payload) {
		state.detail = payload
	}
}

const actions = {
	// 获取详情，并调用mutations 设置detail
	[GET_NEWS_DETAIL] ({ commit }, id) {
		apiNews.getNewsDetail(id).then((res) => {
			commit('SET_NEWS_DETAIL', res.data)
		}).catch((error) => {
			console.log('调用详情接口失败！')
		})
	},
	// 获取推荐，并调用mutations设置recommend
	[GET_NEWS_RECOMMEND] ({ commit }) {
		apiNews.getNewsRecommend().then((res) => {
			commit('SET_NEWS_RECOMMEND', res.data)
		}).catch((error) => {
			console.log('调用推荐接口失败！')
		})
	},
	// 获取列表，并调用mutations设置lists, page为页码，分页使用
	[GET_NEWS_LISTS] ({ commit }, page = 1) {
		apiNews.getNewsLists(page).then((res) => {
			commit('SET_NEWS_LISTS', res.data)
		}).catch((error) => {
			console.log('调用列表接口失败！')
		})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}