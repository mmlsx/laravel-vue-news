<template>
	<section>
		<v-slideShow></v-slideShow>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</section>
</template>

<script>
	import VSlideShow from '../components/SlideShow'
	export default {
		components: {
			VSlideShow
		}
	}
</script>