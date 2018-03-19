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
		// 方法一： 通过路由来检测数据的加载，导航完成前获取数据
		beforeRouteEnter (to, from, next) {
			// 在渲染该组件的对应路由被 confirm 前调用
		    // 不！能！获取组件实例 `this`
		    // 因为当守卫执行前，组件实例还没被创建
			let id = to.params.id
			next(vm => vm.GET_NEWS_DETAIL(id))
		},
		beforeRouteUpdate (to, from, next) {
			// 路由改变前，组件就已经渲染完了
			let id = to.params.id
			this.GET_NEWS_DETAIL(id)
			next()
		},
		created () {
			// 获取路由参数id
			// js中用this.$route 获取当前路由信息对象，用this.$router当前路由实例
			// 在模板中用 $route 和 $router 直接调用
			let id = this.$route.params.id
			this.GET_NEWS_DETAIL(id)
		},
		// 方法二：在vue实例化 keep-alive组件被激活时调用，加载数据
		/*activated () {
			let id = this.$route.params.id
			this.GET_NEWS_DETAIL(id)
		}*/
	}
</script>