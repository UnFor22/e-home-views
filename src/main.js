// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $axios from './utils/request'
import ElementUI from 'element-ui';
import VueQuillEditor from 'vue-quill-editor'

import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import './style/index.scss'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(ElementUI);
Vue.use(VueQuillEditor, /* { default global options } */)
Vue.prototype.$axios = $axios  // 全局导入axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
