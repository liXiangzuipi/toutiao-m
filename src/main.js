import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.less'
Vue.config.productionTip = false
import { Button } from 'vant';
//移动端适配第一步， npm i -S amfe-flexible 动态设置rem基准值  该解决方案为设置根字号为屏幕的十分之一
import 'amfe-flexible'
//移动适配第二步 npm i postscc-csstorem 官网步骤即可  将px转换为 rem 不包括行间样式


Vue.use(Button);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
