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

| Data Item                     | Description                 | Type   | Remarks  |
| ----------------------------- | --------------------------- | ------ | -------- |
| data.indicator                | Array of radar indicators   | array  | Used to specify multiple variables (dimensions) in the radar chart |
| data.series                   | Series data                 | array  | Required |
| data.series[i].name           | Data item name              | string | Required |
| data.series[i].value          | Data array                  | array  | Required |

#### config 配置项

| Configuration Item | Description                          | Type          | Remarks                                                      |
| ------------------ | ------------------------------------ | ------------- | ------------------------------------------------------------ |
| color              | Color                                | array, string | Default color scheme is used. Specify colors as an array like ["#f00", "#00f"]. |
| lineColor          | Axis line color                      | string        | Default is using the BORDER_COLOR from the overall configuration. |
| areaColor          | Background segment color             | array         | Default is none.                                             |
