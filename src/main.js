// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fetch from './utils/fetch'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(ElementUI)

import 'lib-flexible/flexible'

import "../src/assets/style/reset.css"

import VCharts from 'v-charts';

Vue.use(VCharts);


import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(echarts)
ElementUI.Dialog.props.closeOnClickModal.default=false;
ElementUI.MessageBox.setDefaults({
  closeOnClickModal: false
})

Vue.prototype.$http = fetch
Vue.config.productionTip = false


/* eslint-disable no-new */
const vm=new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
