# 堆叠图

#### 示例
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-stack-bar 
		:data="data" 
		style="width: 600px; height: 400px;"
	></e-stack-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: {
            xAxis: ['2015年', '2016年', '2017年'],
            series: [
                { name: 'A', data: [20, 25, 30] },
                { name: 'B', data: [20, 25, 30] },
                { name: 'C', data: [60, 50, 40] }
            ]
        }
      }
    }
  }
</script>
</script>

#### 横向展示
<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-stack-bar 
        :data="data"
        style="width: 600px; height: 400px;"
    ></e-stack-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: {
            yAxis: ['2015年', '2016年', '2017年'],
            series: [
                { name: 'A', data: [20, 25, 30] },
                { name: 'B', data: [20, 25, 30] },
                { name: 'C', data: [60, 50, 40] }
            ]
        }
      }
    }
  }
</script>
</script>

#### 象形堆叠图
<vuep template="#simple_xx"></vuep>

<script v-pre type="text/x-template" id="simple_xx">
<template>
	<div>
		<e-stack-bar
			style="width: 600px;height: 300px;"
			:data="data"
			:config="{
				pictorial: 'circle',
			}"
		></e-stack-bar>
		<e-stack-bar
			style="width: 600px;height: 300px;"
			:data="data"
			:config="{
				pictorial: 'diamond',
				barWidth: 30
			}"
		></e-stack-bar>
		
	</div>
</template>

<script>
  export default {
    data () {
      return {
        data: {
            xAxis: ['2015年', '2016年', '2017年'],
            series: [
                { name: 'A', data: [20, 25, 30] },
                { name: 'B', data: [20, 25, 30] },
                { name: 'C', data: [60, 50, 40] }
            ]
        }
      }
    }
  }
</script>
</script>

#### 展示系列之间的包含关系
<vuep template="#simple_bhxx"></vuep>

<script v-pre type="text/x-template" id="simple_bhxx">
<template>
	<div>
		<e-stack-bar
			style="width: 600px;height: 300px;"
			:data="data"
			:config="{
				barWidth: 30,
				include: true
			}"
		></e-stack-bar>
		<e-stack-bar
			style="width: 600px;height: 300px;"
			:data="data"
			:config="{
				pictorial: 'diamond',
				barWidth: 30,
				include: true
			}"
		></e-stack-bar>
		
	</div>
</template>

<script>
  export default {
    data () {
      return {
        data: {
            xAxis: ['2015年', '2016年', '2017年'],
            series: [
                { name: '总数', data: [20, 25, 30] },
                { name: '已完成', data: [10, 22, 20] }
            ]
        }
      }
    }
  }
</script>
</script>
>备注： <br/>
包含关系图表系列的顺序需要从大到小，如总数中包含已完成数，则总数在前。

#### data 数据

| Data Item            | Description                | Type   | Remarks       |
| -------------------- | -------------------------- | ------ | ------------- |
| data.xAxis           | x-axis category data       | array  | data.xAxis or data.yAxis, choose one |
| data.yAxis           | y-axis category data       | array  | data.xAxis or data.yAxis, choose one |
| data.series          | Series data                | array  | Required      |
| data.series[i].name  | Series name                | string | Required      |
| data.series[i].data  | Data array in the series    | array  | Required      |

#### config 配置项

| Configuration Item | Description                   | Type   | Remarks                                                        |
| ------------------ | ----------------------------- | ------ | -------------------------------------------------------------- |
| color              | Color                         | array, string | Default color scheme is used. Specify colors as an array like ["#f00", "#00f"]. |
| unit               | Value axis unit               | string | Default is not displayed. For vertical charts, it is displayed at the end of the y-axis. For horizontal charts, it is displayed at the end of the x-axis. |
| pictorial          | Pictorial symbol              | string | Default is not displayed. For cylinders, use 'circle'; for prisms, use 'diamond'. Note: When setting pictorial symbols, legends cannot be selected, and horizontal display is not supported. |
| barWidth           | Width of the bars             | number | Default value is 20.                                          |
