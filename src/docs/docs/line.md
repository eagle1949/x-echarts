# 折线图

#### 深色示例

<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-line 
		:data="data" 
		:config="{
		    showFillArea: true
		}"
		style="width: 600px; height: 400px;background: #04233c">
	</e-line>
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

#### 白底示例

<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-line 
        :data="data" 
        :config="{
            color: ['#d8cf3a', '#20cb44'],
            showFillArea: true
        }"
        style="width: 600px; height: 400px;"
    ></e-line>
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
                    data: [20, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019年',
                    data: [28, 36, 28, 30, 22, 33]
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
    <e-line 
        :data="data"
        style="width: 600px; height: 400px;"
    ></e-line>
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
                    type: 'bar',
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

#### 标准线

<vuep template="#simple_3"></vuep>

<script v-pre type="text/x-template" id="simple_3">
<template>
    <e-line 
        :data="data"
        :config="{
            markLine: markLine,
			      showFillArea: true
        }"
		:option="lineOpt"
        style="width: 600px; height: 400px;"
    ></e-line>
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
                    data: [2.5, 1.5, 3, 4, 5.5, 3.5]
                },
                {
                    name: '2019年',
                    data: [1.5, 0.5, 1, 4, 4.8, 2.5]
                }
            ]
        },
        markLine: [
          	//如果需要格式化标准线的label,可以在给设置数据的时候直接修改name值
            {name: '标准值', value: 5, color: '#f68b17'},
            {name: '目标值（5mg/L）', value: 4, color: '#f00'},
            {name: '二级标准\n（4mg/L）', value: 3, color: '#5af'},
        ],
        lineOpt: {
          grid: {
            right: 120//根据标准线名称长度调整
          }
        }
      }
    }
  }
</script>
</script>

#### data 数据

| 数据项              | 简介                 | 类型   | 备注                                     |
| ------------------- | -------------------- | ------ | ---------------------------------------- |
| data.xAxis          | x 轴类目数据         | array  | 必须                                     |
| data.series         | 系列数据             | array  | 必须                                     |
| data.series[i].name | 系列名称             | string | 必须                                     |
| data.series[i].type | 系列类型             | string | 设置为'bar'时指定对应数据按柱形展示 可选 |
| data.series[i].data | 系列中的数据内容数组 | array  | 必须                                     |

#### config 配置项

| 配置项            | 简介             | 类型          | 备注                                                                                                          |
| ----------------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| color             | 颜色             | array，string | 默认使用常规配色， 指定颜色如["#f00", "#00f"]， 或如"waterGradesColor"指定使用水质等级配色 [参考说明](/color) |
| showFillArea      | 是否显示填充颜色 | boolean       | 默认为 false                                                                                                  |
| showLabel         | 是否显示数值文字 | boolean       | 默认为 false                                                                                                  |
| unit              | y 轴数值单位     | string        | 默认不显示                                                                                                    |
| connectNulls      | 是否连接空数据   | Boolean       | 默认为 true                                                                                                   |
| smooth            | 是否为平滑曲线   | Boolean       | 默认为 true                                                                                                   |
| markLine          | 标准线数据       | array         | 默认不显示标准线 可选                                                                                         |
| markLine[i].name  | 标准线名称       | string        |                                                                                                               |
| markLine[i].value | 标准线数值       | number        |                                                                                                               |
| markLine[i].color | 标准线颜色       | 默认红色      |                                                                                                               |
