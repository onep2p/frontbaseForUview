<template>
	<text :style="{ color: color, 'font-size': size + 'rpx' }" class="trip-icons" @tap.stop="onClick">{{ icons[type] }}</text>
</template>

<script>
import icons from '@/boot/icons.js'
/**
 * Icons 图标
 * @description 用于展示 icons 图标
 * @tutorial https://ext.dcloud.net.cn/plugin?id=28
 * @property {Number} size 图标大小
 * @property {String} type 图标图案，参考示例
 * @property {String} color 图标颜色
 * @event {Function} tap 点击 Icon 触发事件
 */
export default {
	name: 'icons',
	props: {
		type: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: '#333333'
		},
		size: {
			type: [Number, String],
			default: 16
		}
	},
	data() {
		return {
			icons: icons
		};
	},
	methods: {
		onClick() {
			this.$emit('click')
		}
	}
};
</script>

<style scoped>
@font-face {
	font-family: 'trip-iconfont';
	font-style: normal;
	font-weight: normal;
	src: url('https://at.alicdn.com/t/font_1581816_p8utc3ptni.ttf') format('truetype');
}

.trip-icons {
  font-family: "trip-iconfont";
  font-style: normal;
}
</style>
