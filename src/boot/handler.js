import Vue from "vue";
import store from "../store";
import {
	i18n
} from "./i18n";

const errorHandler = function(e, vm) {
	console.log(e);
	const {
		code,
		msg
	} =
	e.engine && e.engine.response ?
		{
			msg: e.engine.response.msg,
			code: e.engine.response.code
		} :
		{
			msg: e.message,
			code: 500
		};

	switch (code) {
		case 435:
		case 20000:
			store.commit("setTips", {
				type: "error",
				msg: msg
			});

			setTimeout(() => {
				uni.navigateTo({
					url: "/pages/account/login"
				});
			}, 2000);
			break;
		case 20017:
			store.commit("setRealPopup", true);
			break;
		case 20020:
			store.commit("setTips", {
				type: "error",
				msg: i18n.t("common.tips.notSetPay")
			});

			setTimeout(() => {
				store.commit("setPayPopup", true);
			}, 2000);
			break;
		default:
			store.commit("setLoading", {
				type: "error",
				tipText: msg
			});

			store.commit("setTips", {
				type: "error",
				msg: msg
			});
	}
};
Vue.config.errorHandler = errorHandler;

export default errorHandler;
