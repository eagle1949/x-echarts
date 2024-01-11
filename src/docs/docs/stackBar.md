# 堆叠图

#### 示例
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-stack-bar 
		:data="data" 
		:config="{
		    color: 'airGradesColor'
		}"
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
                { name: '优', data: [20, 25, 30] },
                { name: '良', data: [20, 25, 30] },
                { name: '轻度污染', data: [60, 50, 40] }
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
                { name: '优', data: [20, 25, 30] },
                { name: '良', data: [20, 25, 30] },
                { name: '轻度污染', data: [60, 50, 40] }
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
                { name: '优', data: [20, 25, 30] },
                { name: '良', data: [20, 25, 30] },
                { name: '轻度污染', data: [60, 50, 40] }
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

| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data.xAxis | x轴类目数据 | array | data.xAxis与data.yAxis 二选一 |
| data.yAxis | y轴类目数据 | array | data.xAxis与data.yAxis 二选一 |
| data.series | 系列数据 | array | 必须 |
| data.series[i].name | 系列名称 | string | 必须 |
| data.series[i].data | 系列中的数据内容数组 | array | 必须 |

#### config 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| color | 颜色 | array，string | 默认使用常规配色， 指定颜色如["#f00", "#00f"]，  或如"waterGradesColor"指定使用水质等级配色 [参考说明](/color)|
| unit | 数值轴单位 | string | 默认不展示  图表为纵向时显示在y轴末端，横向时显示在x轴末端。|
| pictorial | 象形图标 | string | 默认不展示 圆柱使用'circle'，菱柱使用'diamond'。 注：设置象形图标时图例不可选，暂不支持横向展示。|
| barWidth | 柱子的宽度 | number | 默认值 20。|
