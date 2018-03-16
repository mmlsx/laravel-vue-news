import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index'
import ListsPage from '../pages/news/Lists'
import DetailPage from '../pages/news/Detail'
import NewsPage from '../pages/News'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Index,
			redirect: '/news',
			children: [
				{
					path: '/news',
					component: NewsPage
				},
				{
					path: 'news/lists/:page',
					component: ListsPage
				},
				{
					path: 'news/detail/:id',
					component: DetailPage
				}
			]
		}
	]
})