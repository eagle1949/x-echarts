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

| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data.xAxis | x轴类目数据 | array | 必须 |
| data.data | 数据数组 | array | 必须 |

#### config 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| color | 颜色 | array，string | 默认使用常规配色， 指定颜色如["#f00", "#00f"]|
| unit | 数值单位 | string | 默认不显示 |
| barWidth | 柱宽 | number | 默认为30 |
