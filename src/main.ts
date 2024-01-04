import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import echarts from './x-echarts/src/index.js';


let app = createApp(App);

// pChart(app);



app.use(echarts).mount('#app')
