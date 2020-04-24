import Vue from "vue"
import handler from "./handler"
import Fly from "flyio/dist/npm/wx"
import store from "../store"

const $http = new Fly();

// method: "", //请求方法， GET 、POST ...
// headers: {}, //请求头
$http.config.baseURL =
  process.env.NODE_ENV !== "development"
    ? "http://example.domain.com" // 生产地址
    : "http://example.domain.com" // 本地测试地址

$http.config.timeout = 10000 // 超时时间

// 全局处理请求拦截
$http.interceptors.request.use(request => {
  request.params["token"] = store.state.user.token
});

// 全局处理响应拦截
$http.interceptors.response.use(
  ({ data }) => {
    if (data.code !== 1) {
      const error = new Error(data.msg || "unknown error")
      error.msg = data.msg // fly 错误处理
      throw error
    }
  },
  // 在vue pages中通过调用需要异步处理 `async onLoad() { await this.xxx(); }`
  // 满足在vue进程内条件触发error就能通过Vue.config.errorHandler来处理错误,
  // 如果不想触发 async onLoad() { try{ await this.xxx(); } catch(e){} } 避免throw
  // 禁用handler
  e => handler(e)
);

Vue.prototype.$http = $http

export { $http }
