# 圆柱图

#### 设置颜色、数值单位和柱宽
<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-cylinder-bar 
        :data="data" 
        :config="{
            color: 'normalColor',
            barWidth: 30,
            unit: '%'
        }"
        style="width: 600px; height: 400px;"
    ></e-cylinder-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: {
            xAxis: ['A', 'B', 'C', 'D', 'E'],
            data: [26, 22, 15, 8, 5]
        }
      }
    }
  }
</script>
</script>

#### 渐变色圆柱图
<vuep template="#simple_jb"></vuep>

<script v-pre type="text/x-template" id="simple_jb">
<template>
    <e-cylinder-bar
		:data="barData"
		:config="{ color: color, barWidth: 40 }"
		style="width: 600px; height: 400px;"
	></e-cylinder-bar>
</template>

<script>
  export default {
    data () {
      return {
        barData: {
           xAxis: ['A', 'B', 'C'],
           data: [26, 22, 8]
        },
		color: [
			{
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				type: 'linear',
				global: false,
				colorStops: [
					{
						offset: 0,
						color: '#50cfff'
					},
					{
						offset: 1,
						color: '#0397fe'
					}
				]
			},
			{
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				type: 'linear',
				global: false,
				colorStops: [
					{
						offset: 0,
						color: '#2bd31e'
					},
					{
						offset: 1,
						color: '#0cad00'
					}
				]
			},
			{
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				type: 'linear',
				global: false,
				colorStops: [
					{
						offset: 0,
						color: '#f6ae30'
					},
					{
						offset: 1,
						color: '#ef9801'
					}
				]
			}
		]
      }
    }
  }
</script>
</script>

#### data 数据

| Data Item   | Description        | Type   | Remarks  |
| ----------- | ------------------ | ------ | -------- |
| data.xAxis  | x-axis category data | array  | Required |
| data.data   | Data array          | array  | Required |

#### config 配置项

| Configuration Item | Description | Type | Remarks |
| ------------------ | ----------- | ---- | ------- |
| color              | Color       | array, string | Default color scheme is used. Specify colors as an array like ["#f00", "#00f"]. |
| unit               | Value unit  | string | Default is not displayed. |
| barWidth           | Bar width   | number | Default value is 30. |
