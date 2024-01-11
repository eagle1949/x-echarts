import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import xecharts from './x-echarts/dist/myLib.es';

// import xecharts from 'x-echarts';

let app = createApp(App);

// pChart(app);



app.use(xecharts).mount('#app')
