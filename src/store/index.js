import Vue from "vue"
import Vuex from "vuex"
import {
	i18n
} from "../boot/i18n"
import {
	$http
} from "../boot/http"

// import example from './module-example'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {
			token: ""
		}
	},
	getters: {},
	mutations: {},
	actions: {},

	modules: {
		// example
	}
});
