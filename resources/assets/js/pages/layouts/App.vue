<template>
	<div id="app" class="container">
		<header class="app-header">
			<section class="flex-nowrap justify-content-between align-items-center my-3">
				<h5 class="h6 text-muted">关心生活大事</h5>
			</section>
			<!-- <nav class="navbar navbar-expand-md navbar-light bg-light rounded mb-3">
				<div class="collapse navbar-collapse">
					<ul class="navbar-nav text-md-center nav-justified w-100">
						<li class="nav-item" v-for="(item, index) in navList" :class="{ 'active': item.active }">
							<a :href="item.url" class="nav-link">
								{{ item.title }}
								<template v-if="index === 0">
									<span class="sr-only">(current)</span>
								</template>
							</a>
						</li>
					</ul>
				</div>
			</nav> -->
			<div class="nav-scroller py-1 mb-3 border-top border-bottom border-secondary">
		        <nav class="nav nav-pills nav-fill d-flex justify-content-between">
		            <!-- <a class="p-2 text-muted active" href="#">World</a>-->
					<a class="nav-item nav-link p-2" v-for="(item, index) in navList" :class="{ 'active': item.active }" :href="item.url" >
						{{ item.title }}
						<template v-if="index === 0">
							<span class="sr-only">(current)</span>
						</template>
					</a>
		        </nav>
		      </div>
		</header>
		<main class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</main>
		<footer class="app-footer mt-3">
			<p class="mb-0">&copy; 2017 news message platform</p>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data () {
			return {
				navList: [
					{
						title: '首页',
						url: '/news',
						active: true
					},
					{
						title: '国内',
						url: '/news',
						active: false
					},
					{
						title: '国际',
						url: '/news',
						active: false
					},
					{
						title: '军事',
						url: '/news',
						active: false
					},
					{
						title: '体育',
						url: '/news',
						active: false
					},
					{
						title: '财经',
						url: '/news',
						active: false
					},
					{
						title: '科技',
						url: '/news',
						active: false
					},
					{
						title: '互联网',
						url: '/news',
						active: false
					}
				]
			}
		},
		methods: {
			toggleNavbar () {
				let navItems = $(".nav-item")
				for (let i = 0; i < navItems.length; i++) {
					navItems[i].onclick = function () {
						$(this).siblings().removeClass('active')
						$(this).addClass('active')
					}
				}
			}
		},
		mounted () {
			this.toggleNavbar()
		}
	}
</script>

<style lang="scss">
	body {
		background: #ededed;
	}

	.navbar {
		border: 1px solid #e5e5e5;
	}

	.app-content::after {
		content: '';
		clear: both;
		display: block;
	}

	.app-footer {
		height: 80px;
		width: 100%;
		text-align: center;
        background-image: linear-gradient(to bottom, #f7f7f7 0%, #eee 100%);
		box-sizing: border-box;
	    border: 1px solid rgba(0,0,0,.14);
        p {
	    	height: 80px;
	    	line-height: 80px;
	    }
    }

    .nav-pills .nav-link.active{
	    background-color: #c7c7c7db;
	}
</style>
