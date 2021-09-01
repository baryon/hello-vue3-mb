import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import VueMoneyButton from 'vue-money-button'

const app = createApp(App)

app.use(VueMoneyButton)

app.mount('#app')
