<template>
	<article>
		<div class="card">
			<div class="card-header bg-transparent card-header-divider">
				<h3 class="h3">{{ detail.id + '. ' + detail.title }}</h3>
				<p class="my-2"><small class="text-muted">{{ detail.created_at }}</small></p>
			</div>
			<div class="card-body">
				<p>{{ detail.content }}</p>
				<p class="card-text text-right"><small class="text-muted">{{ detail.created_at }}</small></p>
			</div>
		</div>
	</article>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex'
	export default {
		/*computed: mapState({
			detail: state => state.news.detail
		}),*/
		computed: {
			// 使用对象展开运算符将 getter 混入computed对象中
			...mapGetters({
				detail: 'getNewsDetail'
				})
		},
		methods: {
			...mapActions([
				'GET_NEWS_DETAIL'
				])
		},
		created () {
			// 获取路由参数id
			// js中用this.$route 获取当前路由信息对象，用this.$router当前路由实例
			// 在模板中用 $route 和 $router 直接调用
			let id = this.$route.params.id
			this.GET_NEWS_DETAIL(id)
		}
	}
</script>