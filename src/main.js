import Vue from 'vue'
import './boot/handler'
import './boot/http'
import { i18n } from './boot/i18n'
import store from './store'
import App from './App'

/* 引入uview */
import uView from "@/uview"
Vue.use(uView)

/* 页面组件 */
import layoutPage from './layouts/layoutsPage.vue'
Vue.component('layoutPage', layoutPage)
/* 图标组件 */
import icons from './components/icons.vue'
Vue.component('icons', icons)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	i18n,
	store
})
app.$mount()
