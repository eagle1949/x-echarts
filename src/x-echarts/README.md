# x-echarts
> 基于echarts(echarts5)封装的vue组件，支持vue2，vue3，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表

> Based on the echarts-wrapped vue component, it supports vue2 and vue3. Simply provide a unified data format that is friendly to both the front-end and back-end, and you can easily generate common charts with simple configuration items.


<a href="http://121.43.33.102/docs/#/en/intro" target="_blank">English Docs</a> | 
<a href="http://121.43.33.102/docs/#/" target="_blank">中文文档</a>

## Features
- ⚡️ Standardized Data Format

  Using a unified ECharts data format ensures that both the front-end and back-end can understand and use this data. This avoids inconsistencies in data formats and transmission methods, reducing the likelihood of errors.

- 🔑 Supports Multiple Versions of Vue

  The component can simultaneously support Vue 2 and Vue 3. This means that you can use the same chart component to support both old and new Vue projects without any additional modifications or adaptations.

- 💡 Configurable and Easy to Use

  The component provides some default configurations internally while allowing users to customize them according to their needs, thus meeting various visual and functional requirements.

- 🛠️ Easy to Maintain and Extend

  With the show-option options configuration, you can easily view ECharts configuration options and extend the functionality of the ECharts component.


## Installation dependencies
```
npm install x-echarts || yarn add x-echarts
```

## Introducing in main.js
```
import xEcharts from 'x-echarts';
Vue.use(xEcharts); // Vue3中 app.use(xEcharts);
```

## Usage

```
<template>
    <e-chart style="width: 600px;height: 400px;" :option="option" show-option @click="handleClick"></e-chart>
</template>

<script>
  export default {
    data () {
      return {
        option: {
                series: [
                    {
                        type: 'bar',
                        data: [11, 12, 15, 16, 13, 12, 14]
                    }
                ],
                xAxis: {
                    data: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
                },
                yAxis: {},
                tooltip: {}
            }
      }
    },
    methods: {
        handleClick(params) {
            alert(params.name);
        }
    }
  }
</script>
```

<img src="https://github.com/eagle1949/x-echarts/blob/main/src/assets/images/common.png?raw=true" />

```
<template>
	<div style="background: #04233c">
		<e-pie :data="pieData" style="width: 400px; height: 400px;"></e-pie>
	</div>
</template>

<script>
  export default {
	created () {
		this.$xEchart.setChartConfig({
			THEME_COLOR: 'dark'
		});
	},
    data () {
      return {
        pieData: [
            { name: 'A', value: 5 },
            { name: 'B', value: 5 },
            { name: 'C', value: 30 },
            { name: 'D', value: 20 },
            { name: 'E', value: 10 },
            { name: 'F', value: 2 }
        ]
      }
    }
  }
</script>
```

<img src="https://github.com/eagle1949/x-echarts/blob/main/src/assets/images/pie.png?raw=true" />

```
<template>
    <e-bar :data="data" style="width: 600px; height: 400px;background: #04233c"></e-bar>
</template>

<script>
  export default {
	created () {
		this.$xEchart.setChartConfig({
			THEME_COLOR: 'dark'
		});
	},
    data () {
      return {
        data: {
            xAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
            series: [
                {
                    name: '2018',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
```
<img src="https://github.com/eagle1949/x-echarts/blob/main/src/assets/images/bar.png?raw=true" />

# upgrade 2024-1-16 V1.0.0
support vite

# upgrade 2024-2-2 V1.0.6
fix the some warning with "e-pie" 