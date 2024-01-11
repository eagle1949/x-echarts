# 雷达图

#### 示例
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-radar :data="data" style="width: 400px; height: 400px;background: #04233c;" 
		:config="{
			lineColor: '#167374',
			symbolColor: '#fff'
		}"></e-radar>
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
            indicator: [
                '东',
                '东南',
                '南',
                '西南',
                '西',
                '西北',
                '北',
                '东北'
            ],
            series: [
                { name: '类A', value: [28, 20, 36, 25, 12, 8, 19, 15] },
                { name: '类B', value: [21, 22, 33, 22, 10, 5, 12, 11] }
            ]
        }
      }
    }
  }
</script>
</script>

#### 设置颜色
<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-radar 
        :data="data"
        style="width: 400px; height: 400px;"
    ></e-radar>
</template>

<script>
  export default {
	created () {
	  	this.$xEchart.setChartConfig({
	  		THEME_COLOR: 'light'
	  	});
	},
    data () {
      return {
        data: {
            indicator: [
                '东',
                '东南',
                '南',
                '西南',
                '西',
                '西北',
                '北',
                '东北'
            ],
            series: [
                { name: '类A', value: [28, 20, 36, 25, 12, 8, 19, 15] },
                { name: '类B', value: [21, 22, 33, 22, 10, 5, 12, 11] }
            ]
        }
      }
    }
  }
</script>
</script>

#### data 数据

| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data.indicator | 雷达图的指示器数组 | array | 用来指定雷达图中的多个变量（维度） |
| data.series | 系列数据 | array | 必须 |
| data.series[i].name | 数据项名称 | string | 必须 |
| data.series[i].value | 数据数组 | array | 必须 |

#### config 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| color | 颜色 | array，string | 默认使用常规配色， 指定颜色如["#f00", "#00f"]|
| lineColor | 轴线颜色 | string | 默认使用全部配置中的BORDER_COLOR |
| areaColor | 背景分隔颜色 | array | 默认无 |
