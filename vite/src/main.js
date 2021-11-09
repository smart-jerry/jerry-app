import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/base.less'

import Router from './router.js'
createApp(App)
	.use(Router)
.mount('#app')
