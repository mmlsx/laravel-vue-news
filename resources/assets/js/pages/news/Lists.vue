<template>
	<section>
		<!-- <h4 class="h4">列表信息</h4>
		<ul class="list-group">
			<li class="list-group-item" v-for="item in lists">
				<router-link :to="{ path: '/news/detail/' + item.id }" class="text-muted">
					{{ item.title }}
				</router-link>
			</li>
		</ul> -->
		<div class="card v-card">
			<div class="card-header v-title-header">
				<h4 class="h4">列表信息</h4>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item" v-for="item in lists.data">
					<router-link :to="{ path: '/news/detail/' + item.id }" class="text-muted">
						{{ item.title }}
					</router-link>
				</li>
			</ul>
		</div>
		<v-pagination :is-position="'center'" @change-lists="getChangeLists($event)" :is-current-page="isCurrentPage" :lists="lists"></v-pagination>
	</section>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex'
	import VPagination from '../../components/common/VPagination'
	export default {
		data () {
			return {
				isCurrentPage: 1
			}
		},
		components: {
			VPagination
		},
		/*computed: mapState({
			lists: state => state.news.lists
		}),*/
		computed: {
			...mapGetters({
				lists: 'getNewsLists'
			})
		},
		methods: {
			...mapActions([
				'GET_NEWS_LISTS'
				]),
			getChangeLists (val) {
				if (val) {
					// 更新当前页
					this.isCurrentPage = val
					// 更新当前页数据
					this.GET_NEWS_LISTS(val)
				}
			}
		},
		created () {
			this.isCurrentPage = this.$route.params.page
			this.GET_NEWS_LISTS(this.isCurrentPage)
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
