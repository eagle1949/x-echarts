# 柱状图


#### 示例深色
<vuep template="#simpled"></vuep>

<script v-pre type="text/x-template" id="simpled">
<template>
    <e-bar :data="data" style="width: 600px; height: 400px;background: #04233c"></e-bar>
</template>

<script>
  export default {
	created () {
		this.$pChart.setChartConfig({
			THEME_COLOR: 'dark'
		});
	},
    data () {
      return {
        data: {
            xAxis: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
            series: [
                {
                    name: '2018年',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019年',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### 示例
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-bar :data="data" style="width: 600px; height: 400px;"></e-bar>
</template>

<script>
  export default {
	created () {
		this.$pChart.setChartConfig({
			THEME_COLOR: 'light'
		});
	},
    data () {
      return {
        data: {
            xAxis: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
            series: [
                {
                    name: '2018年',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019年',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### 顶部圆角
<vuep template="#simple11"></vuep>

<script v-pre type="text/x-template" id="simple11">
<template>
    <e-bar
		:data="data"
		:config="{
			showLabel: true,
			topRing: true
		}"
		style="width: 600px; height: 400px;"
	></e-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: {
            xAxis: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
            series: [
                {
                    name: '2018年',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019年',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### 顶部底部圆角
<vuep template="#simple111"></vuep>

<script v-pre type="text/x-template" id="simple111">
<template>
    <e-bar
		:data="data"
		:config="{
			showLabel: true,
			tbRing: true
		}"
		style="width: 600px; height: 400px;"
	></e-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: {
            xAxis: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
            series: [
                {
                    name: '2018年',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019年',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>


#### 显示数值及单位
<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-bar 
        :data="data" 
        :config="{
            unit: 'mg/L',
            showLabel: true
        }"
        style="width: 600px; height: 400px;"
    ></e-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: {
            xAxis: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
            series: [
                {
                    name: '2018年',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019年',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### 线柱混合
<vuep template="#simple_2"></vuep>

<script v-pre type="text/x-template" id="simple_2">
<template>
    <e-bar 
        :data="data"
        style="width: 600px; height: 400px;"
    ></e-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: {
            xAxis: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
            series: [
                {
                    name: '均值',
                    type: 'line',
                    data: [2, 1, 2, 4, 5, 3]
                },
                {
                    name: '2018年',
                    data: [2.5, 1.5, 3, 4, 5.5, 3.5]
                },
                {
                    name: '2019年',
                    data: [1.5, 0.5, 1, 4, 4.8, 2.5]
                }
            ]
        }
      }
    }
  }
</script>
</script>


#### 横向柱状图
<vuep template="#simple_3"></vuep>

<script v-pre type="text/x-template" id="simple_3">
<template>
    <e-bar 
        :data="data"
        style="width: 600px; height: 400px;"
    ></e-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: {
            yAxis: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
            series: [
                {
                    name: '2018年',
                    data: [2.5, 1.5, 3, 4, 5.5, 3.5]
                },
                {
                    name: '2019年',
                    data: [1.5, 0.5, 1, 4, 4.8, 2.5]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### 常用渐变色柱状图
<vuep template="#simple_jb"></vuep>

<script v-pre type="text/x-template" id="simple_jb">
<template>
	<div>
		<e-bar
			:data="data"
			:config="{color: color}"
			style="width: 600px; height: 400px;"
		></e-bar>
	</div>
</template>

<script>
  export default {
    data () {
      return {
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
						color: '#00d8ff'
					},
					{
						offset: 1,
						color: '#0c8ae2'
					}
				]
			}
		],
        data: {
            xAxis: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
            series: [
                {
                    name: '',
                    data: [5.5, 4.5, 4, 3, 2, 2]
                }
            ]
        }
      }
    }
  }
</script>
</script>

<vuep template="#simple_jb_lt"></vuep>

<script v-pre type="text/x-template" id="simple_jb_lt">
<template>
	<div>
		<e-bar
			:data="data"
			:config="{color: color}"
			style="width: 600px; height: 400px;"
		></e-bar>
	</div>
</template>

<script>
  export default {
	created(){
		this.$pChart.setChartConfig({
			THEME_COLOR: 'light'
		});
	},
    data () {
      return {
		color: [
			{
				x: 0,
				y: 0,
				x2: 1,
				y2: 0,
				type: 'linear',
				global: false,
				colorStops: [
					{
						offset: 0,
						color: 'rgba(151,153,243,0.2)'
					},
					{
						offset: 1,
						color: 'rgba(151,153,243,1)'
					}
				]
			}
		],
		data: {
		    yAxis: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
		    series: [
		        {
		            name: '',
		            data: [5.5, 4.5, 4, 3, 2, 2]
		        }
		    ]
		}
      }
    }
  }
</script>
</script>


#### 圆柱
<vuep template="#simple_4"></vuep>

<script v-pre type="text/x-template" id="simple_4">
<template>
	<div>
		<e-bar 
			:data="data" 
			:config="{
				pictorial: 'circle'
			}" 
			style="width: 600px; height: 300px;"
		></e-bar>
	</div>
</template>

<script>
  export default {
	created () {
	  	this.$pChart.setChartConfig({
	  		THEME_COLOR: 'light'
	  	});
	},
    data () {
      return {
        data: {
            xAxis: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
            series: [
                {
                    name: '2018年',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019年',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### 菱柱
<vuep template="#simple_41"></vuep>

<script v-pre type="text/x-template" id="simple_41">
<template>
	<div>
		
		<e-bar 
			:data="data" 
			:config="{
				pictorial: 'diamond',
				color: ['#31d677','#febb38']
			}" 
			style="width: 600px; height: 300px;"
		></e-bar>
	</div>
</template>

<script>
  export default {
	created () {
	  	this.$pChart.setChartConfig({
	  		THEME_COLOR: 'light'
	  	});
	},
    data () {
      return {
        data: {
            xAxis: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
            series: [
                {
                    name: '2018年',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019年',
                    data: [28, 36, 28, 35, 22, 33]
                }
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
| data.xAxis | x轴类目数据 | array | 必须 |
| data.series | 系列数据 | array | 必须 |
| data.series[i].name | 系列名称 | string | 必须 |
| data.series[i].type | 系列类型 | string | 设置为'line'时指定对应数据按折线展示 可选  |
| data.series[i].data | 系列中的数据内容数组 | array | 必须 |

#### config 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| color | 颜色 | array，string | 默认使用常规配色， 指定颜色如["#f00", "#00f"]， 圆柱和棱柱图只支持16进制颜色和rgb颜色|
| showLabel | 是否显示数值文字 | boolean | 默认为false |
| unit | y轴数值单位 | string | 默认不显示 |
| barWidth | 柱子的宽度 | number | 默认值 20 |
| topRing | 柱子的顶部是否圆角 | boolean | 默认值 false  只支持2d |
| rightRing | 柱子的右侧顶部是否圆角 | boolean | 默认值 false  只支持2d |
| tbRing | 顶部，底部是否圆角 | boolean | 默认值 false  只支持2d |
| pictorial | 象形图标 | string | 默认不展示  圆柱使用'circle'，菱柱使用'diamond'。 注：设置象形图标时图例不可选，暂不支持横向展示|
| symbolOffsetXArr | 各系列象形图标横向偏移距离 | array | 当象形图标和柱子没有对齐时，可手动调整 如：['-120%', 0, '120%']表示第1,2,3个系列的图标横向偏移距离|
| type | 模拟立体柱状图使用 | string | 值为simulated3D展示模拟立体柱状图 |
| customColor | 模拟立体柱状图使用 | array | 指定左侧、右侧、顶部三个面的颜色 如：[{left: '#4d76eb'', right: '#4d76eb'', top: '#4d76eb''}] |
