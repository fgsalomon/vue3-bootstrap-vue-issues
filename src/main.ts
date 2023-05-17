import './assets/main.css'

import { BootstrapVue } from "bootstrap-vue";


import App from './App.vue'
import Vue, {createApp } from "vue";


Vue.use(BootstrapVue);

createApp(App).mount('#app')
