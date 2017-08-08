// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AMap from 'vue-amap';
Vue.config.productionTip = false


Vue.use(AMap);

AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'ee551e60d32d879aa0e0c6b0489f7d17',
  // 插件集合
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
