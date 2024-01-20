# Installation and introduction
## Installation dependencies
```
npm install x-echarts || yarn add x-echarts
```

## Introducing in main.js
```
import xEcharts from 'x-echarts';
Vue.use(xEcharts); // Vue3中 app.use(xEcharts);
```

<!-- ## 移动端使用说明 -->
 <!-- - 使用uniapp的移动端可使用x-echarts-mobile  当前最新版本1.0.3
 - x-echarts-mobile依赖lime-echart ^1.0.1
 - 可在pages.json中配置easycom
```
"easycom": {
	//...其他配置
	"^l-echart": "lime-echart/components/lime-echart/index.vue",
	"^p-(.*)": "x-echarts-mobile/packages/p-$1.vue"
}
``` -->

