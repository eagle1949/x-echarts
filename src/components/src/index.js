
import './css/index.css';

import EChart from '../packages/e-chart.vue';
import EPie from '../packages/e-pie.vue';
import EStackBar from '../packages/e-stack-bar.vue';
import EStripeBar from '../packages/e-stripe-bar.vue';
import ECylinderBar from '../packages/e-cylinder-bar.vue';
import ERainBow from '../packages/e-rainbow.vue';
import ERing from '../packages/e-ring.vue';
import EDashBoard from '../packages/e-dash-board.vue';
import EAirDb from '../packages/e-air-db.vue';
import EHeatmap from '../packages/e-heatmap.vue';
import EWaterPolo from '../packages/e-water-polo.vue';
import ELine from '../packages/e-line.vue';
import EBar from '../packages/e-bar.vue';
import ERadar from '../packages/e-radar.vue';
import ESankey from '../packages/e-sankey.vue';
import EVarietyBar from '../packages/e-variety-bar.vue';
import EAssetsBar from '../packages/e-assets-bar.vue';
import EWordcloud from '../packages/e-wordcloud.vue';

import { setChartConfig } from './util/nomalChart';

import { installPlugins } from './util/installPlugins';

//  let echarts = require('echarts');
import * as echarts from 'echarts';
// provide('echart', echarts);

const components = [
    EChart,
    EPie,
    EStackBar,
    EStripeBar,
    ECylinderBar,
    ERainBow,
    ERing, //环形图
    EHeatmap,
    EDashBoard, //仪表盘
    EAirDb, //空气污染物仪表盘
    EWaterPolo, //水球图
    ELine,
    EBar,
    ERadar,
    ESankey,
    EVarietyBar,
    EAssetsBar,
	EWordcloud
];

//  function loadVue() {
//      try {
//          return require('vue');
//      } catch (e) {
//          return null;
//      }
//  }

// let Vue = window.Vue;
// if(!Vue){
// Vue = loadVue();
// }

//  let isVue2 = Vue.version.startsWith('2.');
//  let isVue3 = Vue.version.startsWith('3.');

//  if (!isVue2 && !isVue3) {
//      console.warn(`Vue version v${Vue.version} is not supported.`);
//  }

let plugins = [];
components.forEach((item) => {
    let i = installPlugins(item);
    plugins.push(i);
});

//  if (isVue3) {

//  }

function install(app) {
    const version = Number(app.version.split('.')[0]);
    console.log(version);
    if (version < 3) {
        components.forEach((component) => {
            app.component(component.name, component);
        });
        app.prototype.$pChart = {
            setChartConfig
        };
        app.prototype.$echarts = echarts;
    } else {
        plugins.forEach(app.use);
        app.config.globalProperties.$pChart = {
            setChartConfig
        };
        app.config.globalProperties.$echarts = echarts;
    }
}

// vue2 的时候加载
// if(isVue2){

// }

if (typeof window !== 'undefined' && window.Vue) {
    const version = Number(window.Vue.version.split('.')[0]);
    if (version < 3) {
        install(window.Vue);
    }
}

export default {
    install
};

export { install };
