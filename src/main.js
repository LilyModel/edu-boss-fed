import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Elementit
import ElementUI from 'element-ui'
// 引入Element 的主题文件
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'
// 将elementUi 注册为vue插件
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
