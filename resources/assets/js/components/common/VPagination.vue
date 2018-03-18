<template>
	<section>
		<nav class="my-3">
			<ul class="pagination" :class="getPisition">
				<li class="page-item" @click="changeLists('prev', getPrevPath)" :class="{'disabled': lists.prev_page_url == null}">
					<template v-if="lists.prev_page_url == null">
						<a href="javascript:void(0);" class="page-link" tabindex="-1">&lt;&lt;</a>
					</template>
					<template v-else>
						<router-link :to="{path: '/news/lists/' + getPrevPath}" class="page-link">&lt;&lt;</router-link>
					</template>
				</li>
				<li class="page-item" v-for="(item, index) in getTotalPage" :class="{'active': isCurrentPage == item.num, 'v-disabled': isCurrentPage == item.num}" @click="changeLists('middle', item.num)">
					<router-link :to="{path: '/news/lists/' + item.num}" class="page-link">{{ item.num }}</router-link>
				</li>
				<li class="page-item" @click="changeLists('next', getNextPath)" :class="{'disabled': lists.next_page_url == null}">
					<template v-if="lists.next_page_url == null">
						<a href="javascript:void(0);" class="page-link" tabindex="-1">&gt;&gt;</a>
					</template>
					<template v-else>
						<router-link :to="{path: '/news/lists/' + getNextPath}" class="page-link">&gt;&gt;</router-link>
					</template>
				</li>
			</ul>
		</nav>	
	</section>	
</template>

<script>
	export default {
		props: {
			// 分页所在位置 左边  居中  右边
			isPosition: {
				type: String,
				default: ''
			},
			lists: {
				type: Object,
				default: {}
			},
			isCurrentPage: {
				type: [Number, String],
				default: 1
			}
		},
		computed: {
			getPisition () {
				return this.isPosition === 'center'? 'justify-content-center' : (this.isPosition === 'end' ? 'justify-content-end' : '')
			},
			getTotalPage () {
				// 获取当前页码信息
				let pages = []
				for (let i = 1; i <= this.lists.last_page; i ++) {
					let url = this.lists.path + '/' + i
					url = url.replace(/api\//gi, '')
					pages.push({
						num: i,
						url: url
					})
				}
				return pages
			},
			getPrevPath () {
				// 获取处理后的链接路径 path，前一页链接
				return this.getFilterPath('prev')
			},
			getNextPath () {
				// 获取后一页链接
				return this.getFilterPath('next')
			}
		},
		methods: {
			changeLists (paginateStr, index) {
				// 时间监听，修改lists数据
				this.$emit('change-lists', index)
			},
			getFilterPath (prevOrNext) {
				/*
				
				laravel 分页后台返回数据
					{
						"current_page":1,
						"data":[{"id":1,"title":"Nemo aut repudiandae architecto.","content":"Consequatur aliquid suscipit animi culpa molestiae accusamus. Aut cumque tempore harum aut maiores. Voluptas aspernatur atque officiis vero et aliquid. Et quia id sit hic voluptatum.","is_recommend":0,"created_at":"2018-03-13 08:54:14","updated_at":"2018-03-13 08:54:14"},{"id":2,"title":"Cupiditate maiores sint eos beatae iure et.","content":"Id ipsum dolorem explicabo quas neque. Ipsum saepe omnis porro voluptatem et modi. Eos alias soluta officiis placeat laudantium. In ut dolor vel et.","is_recommend":1,"created_at":"2018-03-13 08:54:14","updated_at":"2018-03-13 08:54:14"},{"id":3,"title":"Et consequuntur beatae modi atque ab qui suscipit distinctio.","content":"Non nulla omnis ratione facilis laudantium doloremque. Perspiciatis ea numquam perspiciatis neque sunt accusamus vel. Est est ut sit numquam dolores officia. Ut iure eius voluptatem eos voluptatem.","is_recommend":0,"created_at":"2018-03-13 08:54:14","updated_at":"2018-03-13 08:54:14"}],
						"first_page_url":"http:\/\/www.laravel55-vue-vuex-axios.com\/api\/news\/lists?page=1",
						"from":1,
						"last_page":3,
						"last_page_url":"http:\/\/www.laravel55-vue-vuex-axios.com\/api\/news\/lists?page=3",
						"next_page_url":"http:\/\/www.laravel55-vue-vuex-axios.com\/api\/news\/lists?page=2",
						"path":"http:\/\/www.laravel55-vue-vuex-axios.com\/api\/news\/lists",
						"per_page":15,
						"prev_page_url":null,
						"to":15,
						"total":40
					}

				 */
				// 处理路径
				let path,num;
				if (prevOrNext === 'prev') {
					path = this.lists.prev_page_url
				} else if (prevOrNext === 'next') {
					path = this.lists.next_page_url
				}
				if (path && path.indexOf('?') !== -1) {
					// 获取截取字符串后的下标为1的，即 ?page=1
					let str = path.substr(1)
					// 获取等候后面的值 即 page=1 中的1
					num = str.split('=')[1]
				}
				// 拼接路径到 num 页码
				//let url = this.lists.path + '/' + num
				// 去掉路径中的 api/
				//url = url.replace(/api\//gi, '')
				//return url
				return num
			}
		}
	}
</script>

<style scoped>
	.v-disabled {
		pointer-events: none;
    	cursor: auto;
		color: #fff;
    	background-color: #007bff;
    	border-color: #007bff;		
	}
</style>
