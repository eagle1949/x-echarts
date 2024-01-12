# 条纹图

#### 示例
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-stripe-bar :data="data" style="width: 600px; height: 400px;background: #04233c;" 
		:config="{
			color: ['#26d267', 'rgba(255,255,255,0.2)']
		}">
	</e-stripe-bar>
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
        data: [
            { name: '广州', value: 2.5 },
            { name: '广州', value: 2.8 },
            { name: '广州', value: 2.9 },
            { name: '广州', value: 3.1 },
            { name: '广州', value: 3.5 },
            { name: '广州', value: 3.8 },
            { name: '广州', value: 4.5 },
            { name: '广州', value: 4.8 },
            { name: '广州', value: 5.6 },
            { name: '广州', value: 5.8 }
        ]
      }
    }
  }
</script>
</script>


#### 显示序号或排名、指定颜色和单位
<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
	<div>
		<e-stripe-bar 
			:data="data" 
			:config="{
				color: color,
				unit: '%'
			}"
			style="width: 600px; height: 400px;"
		></e-stripe-bar>
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
        data: [
            { name: '广州', rank: 1, value: 2.5 },
            { name: '广州', rank: 2, value: 2.8 },
            { name: '广州', rank: 3, value: 2.9 },
            { name: '广州', rank: 4, value: 3.1 },
            { name: '广州', rank: 5, value: 3.5 },
            { name: '广州', rank: 6, value: 3.8 },
            { name: '广州', rank: 7, value: 4.5 },
            { name: '广州', rank: 8, value: 4.8 },
            { name: '广州', rank: 9, value: 5.6 },
            { name: '广州', rank: 10, value: 5.8 },
            { name: '广州', rank: 11, value: 5.8 },
            { name: '广州', rank: 12, value: 6.2 }
        ],
		color: [
			'#40c057', 
			'#e4e4e4'
		]
      }
    }
  }
</script>
</script>


#### 新增示例
<vuep template="#simple11"></vuep>

<script v-pre type="text/x-template" id="simple11">
<template>
    <e-stripe-bar
		:data="data"
		:config="{
			percentBar: 'ture'
		}"
		style="width: 600px; height: 600px; background-color: #04233c;"
	></e-stripe-bar>
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
        data: [
            { name: '广州', value: 2.5 },
            { name: '广州', value: 2.8 },
            { name: '广州', value: 2.9 },
            { name: '广州', value: 3.1 },
            { name: '广州', value: 3.5 },
            { name: '广州', value: 3.8 },
            { name: '广州', value: 4.5 },
            { name: '广州', value: 4.8 },
            { name: '广州', value: 5.6 },
            { name: '广州', value: 5.8 }
        ]
      }
    }
  }
</script>
</script>


#### 象形条纹图
<vuep template="#simple_xx"></vuep>

<script v-pre type="text/x-template" id="simple_xx">
<template>
    <e-stripe-bar 
        :data="data" 
        :config="{
			pictorial: 'roundRect',
			symbolRotate: '-20'
		}"
        style="width: 600px; height: 400px;"
    ></e-stripe-bar>
</template>

<script>
  export default {
	created () {
		this.$xEchart.setChartConfig({
			THEME_COLOR: 'light',
		});
	},
    data () {
      return {
		data: [
            { name: '广州', value: 2.5 },
            { name: '广州', value: 2.8 },
            { name: '广州', value: 2.9 },
            { name: '广州', value: 3.1 },
            { name: '广州', value: 3.5 },
            { name: '广州', value: 3.8 },
            { name: '广州', value: 4.5 },
            { name: '广州', value: 4.8 },
            { name: '广州', value: 5.6 },
            { name: '广州', value: 5.8 }
        ]
      }
    }
  }
</script>
</script>

#### data 数据

| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data[i].name | 数据项名称 | string | 用于绘制左侧y轴，必须 |
| data[i].value | 数据值 | number | 必须 |
| data[i].rank | 序号 | number | 有值时名称前显示序号，可选 |

#### config 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| color | 颜色 | array | 可选， color[0]指定内层条纹填充色， color[1]指定外层条纹填充色 |
| showLabel | 是否显示标签 | boolean | 默认为true |
| unit | 数值单位 | string | 默认不显示 |
| pictorial | 象形条纹图图标 | string | 默认无，有则按象形条纹图样式展示，否则按默认条纹图展示  参考[series-pictorialBar. symbol](https://echarts.apache.org/zh/option.html#series-pictorialBar.symbol)|
