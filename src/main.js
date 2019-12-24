import Vue from 'vue'
import App from './App.vue'
import router from './router'
import feather from 'vue-icon'
import VueHotkey from 'v-hotkey'
import VTooltip from 'v-tooltip'
import ColorThief from 'colorthief'
import VueDraggableResizable from 'vue-draggable-resizable'
import VueScrollbar from 'vue-scrollbar-live'

import si from 'systeminformation'

Object.defineProperty(Vue.prototype, '$si', { value: si })

import 'vue-scrollbar-live/lib/css/index.css'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

import store from './store'

Vue.component('scrollbar', VueScrollbar)
Vue.component('v-window', VueDraggableResizable)

Vue.use(feather, 'v-icon')
  .use(VueHotkey)
  .use(VTooltip)
  .use(VueScrollbar)
  .use(ColorThief)
  .use(si)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
