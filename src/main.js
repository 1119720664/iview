import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import I18n from "vue-i18n"
import "./plugins/iview"


/*
Vue.use(I18n)

Vue.locale = () => {
}
const message = {
  en: Object.assign({}, en),
  zn: Object.assign({}, zh)
}

const i18n = new I18n({
  locale: en,
  message
})
*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
