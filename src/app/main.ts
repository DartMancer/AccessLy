import { createApp } from 'vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import { router } from './providers/router'
import { store } from './providers/store'
import App from './App.vue'

const app = createApp(App)

app.use(router).use(store).use(Antd)

app.mount('#app')
