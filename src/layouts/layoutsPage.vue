<template>
	<view>
		<!-- 这里是每个页面都会应用的，里面可以封装一些升级、提示、加载等组件 -->
		<slot name="uBody"></slot>
	</view>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	props: {},
	data() {
		return {
			
		}
	},
	computed: {},
	components: {},
	created: function() {
		try {
			var res = uni.getSystemInfoSync();
			var iPhoneXBottom = 0;
			res.model = res.model.replace(' ', '')
			if (res.model.indexOf('iPhoneX') != -1) {
				this.iphoneXButtomHeight = uni.upx2px(50);
			}
		} catch (e) {
			return null;
		}
		if (!this.customHeader) {
			return;
		}
		// #ifndef MP-ALIPAY
		this.statusBarHeight = res.statusBarHeight
		// #ifdef MP-WEIXIN
		// 小程序胶囊按钮
		var res = uni.getMenuButtonBoundingClientRect()
		this.BoundingWidth = res.width + 20 + 'px'
		// #endif
		// #endif
	}
};
</script>
<style>
</style>
