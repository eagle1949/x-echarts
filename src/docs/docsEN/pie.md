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

| Field | Description | Type | Remarks |
| --- | --- | --- | --- |
| data[i].name | Name of the data item | string | Used for tooltip display and legend filtering. Required. |
| data[i].value | Data value | number | Required. |
| data[i].legendName | Name of the legend | Optional |

#### config 配置项

| Option | Description | Type | Remarks |
| --- | --- | --- | --- |
| type | Type of the chart | string | Supported values: 'circle' for solid circle, 'ring' for ring, 'rose' for rose chart. Default is 'circle'. |
| color | Color of the chart | Array, string | Default color scheme is used if not specified. Specify colors as an array like ["#f00", "#00f"], or use predefined color schemes like "waterGradesColor" [see reference](/color). |
| showLegend | Whether to display the legend | boolean | Default is false (not displayed). |
| legendOrient | Orientation of the legend list | string | Supported values: 'horizontal' for horizontal layout, 'vertical' for vertical layout. Default is 'horizontal'. |
| legendTextStyle | Text style of the legend | object | Refer to [legend.textStyle](https://echarts.apache.org/zh/option.html#legend.textStyle) for details. |
| showLabel | Whether to display the line labels | boolean | Default is true. |
| showNullLabel | Effective when showLabel is true, whether to display line labels for data items with no value | boolean | Default is false. |
| labelFormatter | Formatter for labels and tooltips | string/Function | See [series-pie.label.formatter](https://echarts.apache.org/zh/option.html#series-pie.label.formatter) for details. |
| isShowInnerShadow | Whether to display inner shadow for the ring chart | boolean | Default is true. |
| isShowSplit | Whether to display split lines in the ring chart | boolean | Default is false. |
| title | Text in the center of the chart | string | Default is not displayed. |
| center | Center coordinates of the chart | Array | - |
| radius | Radius of the chart | number/string/Array | - |









