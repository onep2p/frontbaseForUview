<template>
	<layoutPage>
		<view slot="uBody">
			<view>{{ title }}</view>
			
			<view class="u-line-1">是日也，天朗气清，惠风和畅，仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也</view>
		</view>
	</layoutPage>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.$http.get("/aa").then(res=>{
				console.log(res);
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #FFFFFF;
	}
</style>
