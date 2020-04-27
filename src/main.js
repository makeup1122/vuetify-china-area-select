import Vue from 'vue'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
const vuetify = new Vuetify({
  icons: {
    iconfont: 'md' // default - only for display purposes
  }
})
Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
