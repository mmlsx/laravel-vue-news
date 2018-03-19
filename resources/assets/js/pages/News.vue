<template>
	<section>
		<div class="row">
			<div class="col-xl-4 pr-0">
				<div class="card v-card">
					<div class="card-header v-title-header">
						<h4 class="h4">热点新闻</h4>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item" v-for="item in recommend">
							<router-link :to="{ path: '/news/detail/' + item.id }" class="d-block text-muted">
								{{ item.title }}
							</router-link>
						</li>
						<li class="list-group-item">
							<router-link :to="{ path: '/news/lists/1'}">更多 >></router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-xl-8">
				<div class="card-group">
				  <div class="card" v-for="(item, index) in recommend" v-if="index < 3">
				    <img class="card-img-top" src="../../images/1.jpg" alt="Card image cap">
				    <div class="card-body">
				      <h5 class="card-title text-truncate">{{ item.title }}</h5>
				      <p class="card-text">{{ item.content }}</p>
				    </div>
				    <div class="card-footer">
				      <small class="text-muted">{{ item.created_at }}</small>
				    </div>
				  </div>
				</div>

				<div class="card rounded-0" v-for="(item, index) in recommend" :class="{'mt-3': index == 0, 'border-bottom-0 border-left-0 border-right-0 border-info': index > 0}" v-if="index < 15">
				  <div class="card-body">
				    <h5 class="card-title">{{ item.title }}</h5>
				    <p class="card-text">{{ item.content }}</p>
				    <p class="card-text text-muted text-right">{{ item.created_at }}</p>
				  </div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-12">
				
			</div>
		</div>
	</section>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex'
	export default {
		// 映射vuex上面的属性
		/*computed: mapState({
			recommend: state => state.news.recommend
		}),*/
		computed: {
			...mapGetters({
				recommend: 'getNewsRecommend'
			})
		},
		methods: {
			// 映射vuex对象上的方法
			...mapActions([
				'GET_NEWS_RECOMMEND'
				])
		},
		created () {
			// 获取推荐列表
			this.GET_NEWS_RECOMMEND()
		}
	}
</script>

<style>
	.v-card {
		box-sizing: border-box;
	    border: 1px solid rgba(0,0,0,.14);
	    background: #fff;
	    box-shadow: 0 8px 20px -6px rgba(0,0,0,.2);
	}

	.v-title-header {
		background: #fafafa;
		color: #666;
	}

	.list-group-item:hover{
		cursor: pointer;
		box-shadow: inset 0 0 38px rgba(0,0,0,.08);
    	transition: all .15s ease;
	}

	.list-group-item a {
		text-decoration: none;
	}
</style>
