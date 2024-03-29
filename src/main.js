import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.less'
import { NavBar } from 'vant';
import { Form } from 'vant';
import { Field,Tabbar, TabbarItem,Image as VanImage } from 'vant';


Vue.config.productionTip = false
import { Button,Toast,CountDown } from 'vant';
//移动端适配第一步， npm i -S amfe-flexible 动态设置rem基准值  该解决方案为设置根字号为屏幕的十分之一
import 'amfe-flexible'
//移动适配第二步 npm i postscc-csstorem 官网步骤即可  将px转换为 rem 不包括行间样式

Vue.use(NavBar);
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);
Vue.use(CountDown);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(VanImage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
