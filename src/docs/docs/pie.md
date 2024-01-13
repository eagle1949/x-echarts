# 饼图

#### 深色底示例
<vuep template="#simple-pie_dark"></vuep>

<script v-pre type="text/x-template" id="simple-pie_dark">
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
            { name: 'A类', value: 5 },
            { name: 'B类', value: 5 },
            { name: 'C类', value: 30 },
            { name: 'D类', value: 20 },
            { name: 'E类', value: 10 },
            { name: 'F类', value: 2 }
        ]
      }
    }
  }
</script>
</script>

#### 白底示例
<vuep template="#simple-pie"></vuep>

<script v-pre type="text/x-template" id="simple-pie">
<template>
    <e-pie :data="pieData" style="width: 400px; height: 400px;"></e-pie>
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
        pieData: [
            { name: 'A类', value: 5 },
            { name: 'B类', value: 5 },
            { name: 'C类', value: 30 },
            { name: 'D类', value: 20 },
            { name: 'E类', value: 10 },
            { name: 'F类', value: 2 }
        ]
      }
    }
  }
</script>
</script>



#### 圆环图示例
<vuep template="#simple-pie_1"></vuep>
<script v-pre type="text/x-template" id="simple-pie_1">
<template>
    <div>
		<e-pie
			:data="pieData"
			:config="{
				title: '总个数\n300',
				type: 'ring'
			}"
			style="width: 400px;height: 400px;"
		></e-pie>
	</div>
    
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
        pieData: [
            { name: 'A类', value: 5 },
            { name: 'B类', value: 5 },
            { name: 'C类', value: 30 },
            { name: 'D类', value: 20 },
            { name: 'E类', value: 10 },
            { name: 'F类', value: 2 }
        ]
      }
    }
  }
</script>
</script>


#### 玫瑰图示例
<vuep template="#simple-pie_2"></vuep>
<script v-pre type="text/x-template" id="simple-pie_2">
<template>
    <div>
		<e-pie
			:data="pieData"
			:config="{
				type: 'rose'
			}"
			style="width: 400px;height: 400px;"
		></e-pie>
	</div>
    
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
        pieData: [
            { name: 'A类', value: 5 },
            { name: 'B类', value: 5 },
            { name: 'C类', value: 30 },
            { name: 'D类', value: 20 },
            { name: 'E类', value: 10 },
            { name: 'F类', value: 2 }
        ]
      }
    }
  }
</script>
</script>

#### 横向图例
<vuep template="#simple-pie_tl"></vuep>
<script v-pre type="text/x-template" id="simple-pie_tl">
<template>
	<div >
		<e-pie
			:data="pieData"
			:config="{
				showLegend: true
			}"
			style="width: 400px;height: 400px;"
		></e-pie>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
             { name: 'A类', value: 5 },
            { name: 'B类', value: 5 },
            { name: 'C类', value: 30 },
            { name: 'D类', value: 20 },
            { name: 'E类', value: 10 },
            { name: 'F类', value: 2 }
        ]
      }
    }
  }
</script>
</script>


#### 纵向图例
<vuep template="#simple-pie_tl2"></vuep>
<script v-pre type="text/x-template" id="simple-pie_tl2">
<template>
	<div>
		<e-pie
			:data="pieData"
			:config="{
				showLegend: true,
				legendOrient: 'vertical'
			}"
			style="width: 500px;height: 400px;"
		></e-pie>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
             { name: 'A类', value: 5 },
            { name: 'B类', value: 5 },
            { name: 'C类', value: 30 },
            { name: 'D类', value: 20 },
            { name: 'E类', value: 10 },
            { name: 'F类', value: 2 }
        ]
      }
    }
  }
</script>
</script>

#### 图例格式化 （简单）
<vuep template="#simple-pie_tlgsh"></vuep>
<script v-pre type="text/x-template" id="simple-pie_tlgsh">
<template>
	<div>
		<e-pie
			:data="pieData1"
			:config="{
				showLegend: true,
				showLabel: false,
				legendOrient: 'vertical'
			}"
			style="width: 500px;height: 300px;"
		></e-pie>
	</div>
</template>

<script>
  export default {
    data () {
      return {
	     pieData1: [
		    { name: 'A类', value: 1, legendName: 'A类: 1个'},
		    { name: 'B类', value: 9, legendName: 'B类: 9个'}
	    ]
		
      }
    }
  }
</script>
</script>


#### 图例格式化 (复杂可自定义)
<vuep template="#simple-pie_tlgsh1"></vuep>
<script v-pre type="text/x-template" id="simple-pie_tlgsh1">
<template>
	<div>
		<e-pie
			:data="pieData2"
			:config="{
				type: 'ring',
				showLegend: true,
				showLabel: false,
				isShowSplit: true,
                isShowInnerShadow: false,
				legendOrient: 'vertical',
				legendTextStyle: {
					rich: {
						name: { width: 55 },
						value: { width: 40 }
					}
				}
			}"
			style="width: 500px;height: 300px;"
		></e-pie>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        pieData2: [
            { name: 'A类', value: 10, legendName: '{name|A类} {value|10个} 10%' },
			{ name: 'B类', value: 50, legendName: '{name|B类} {value|50个} 50%' },
			{ name: 'C类', value: 20, legendName: '{name|C类} {value|20个} 20%' },
			{ name: 'D类', value: 10, legendName: '{name|D类} {value|10个} 10%' },
			{ name: 'E类', value: 10, legendName: '{name|E类} {value|10个} 10%' },
        ],
		
      }
    }
  }
</script>
</script>

#### 标签格式化 （简单）
<vuep template="#simple-pie_bq1"></vuep>
<script v-pre type="text/x-template" id="simple-pie_bq1">
<template>
	<div>
		<e-pie
			:data="pieData"
			:config="{
				labelFormatter: '{b}: {c}个 {d}%'
			}"
			style="width: 500px;height: 300px;"
		></e-pie>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
           { name: 'A类', value: 5 },
           { name: 'B类', value: 5 },
           { name: 'C类', value: 30 },
           { name: 'D类', value: 20 },
           { name: 'E类', value: 10 },
           { name: 'F类', value: 2 }
        ]
      }
    }
  }
</script>
</script>


#### 标签格式化 （复杂）
<vuep template="#simple-pie_bq"></vuep>
<script v-pre type="text/x-template" id="simple-pie_bq">
<template>
	<div>
		<e-pie
			:data="pieData"
			:config="{
				labelFormatter: function(v) {
					return v.name + ':' + v.value + '个';
				}
			}"
			style="width: 500px;height: 300px;"
		></e-pie>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
           { name: 'A类', value: 5 },
           { name: 'B类', value: 5 },
           { name: 'C类', value: 30 },
           { name: 'D类', value: 20 },
           { name: 'E类', value: 10 },
           { name: 'F类', value: 2 }
        ]
      }
    }
  }
</script>
</script>

#### data 数据

| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data[i].name | 数据项名称 | string | 用于tooltip的显示，legend 的图例筛选，必须 |
| data[i].value | 数据值 | number | 必须 |
| data[i].legendName | 图例的名称 | 非必须

#### config 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| type | 形态类型 | string | 实心圆circle， 圆环ring，  玫瑰图rose， 默认为实心圆 |
| color | 颜色 | Array，string | 默认使用常规配色， 指定颜色如["#f00", "#00f"]|
| showLegend | 是否显示图例 | boolean | 默认为false 不显示 |
| legendOrient | 图例列表的布局朝向 | string | horizontal横向，vertical纵向，默认为横向 |
| legendTextStyle | 图例文本样式 | object | 参考[legend. textStyle](https://echarts.apache.org/zh/option.html#legend.textStyle)
| showLabel | 是否显示线条文字 | boolean | 默认为true |
| showNullLabel | showLabel为true时有效，是否显示无数据项的线条文字 | boolean | 默认为false |
| labelFormatter | label及tooltip的格式器 | string/Function |  具体参考[series-pie.label. formatter](https://echarts.apache.org/zh/option.html#series-pie.label.formatter)|
| isShowInnerShadow | 圆环是否显示内圈阴影图形 | boolean | 默认为true |
| isShowSplit | 圆环是否有分隔线 | boolean | 默认为false |
| title | 中间的文字 | string | 默认不显示 |
| center | 中心 | Array |  |
| radius | 半径 | number/string/Array |  |









