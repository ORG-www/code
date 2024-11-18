// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
 

//for PostView.vue API call and GET

// import { createApp } from 'vue';
// import App from './App.vue';
// import axios from 'axios';
// import router from './router';


// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

// createApp(App).mount('#app');