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
		this.$xEchart.setChartConfig({
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
            showFillArea: true
        }"
        style="width: 600px; height: 400px;"
    ></e-line>
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

| Data Item             | Description                | Type   | Remarks                                   |
| --------------------- | -------------------------- | ------ | ----------------------------------------- |
| data.xAxis            | x-axis category data       | array  | Required                                  |
| data.series           | Series data                | array  | Required                                  |
| data.series[i].name   | Series name                | string | Required                                  |
| data.series[i].type   | Series type                | string | Specify 'bar' to display data as bars (optional) |
| data.series[i].data   | Data array in the series    | array  | Required                                  |

#### config 配置项

| Configuration Item | Description                            | Type          | Remarks                                                                                                        |
| ------------------ | -------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------- |
| color              | Color                                  | array, string | Default color scheme is used if not specified. Specify colors as an array like ["#f00", "#00f"], or use predefined color schemes like "waterGradesColor" [see reference](/color). |
| showFillArea       | Whether to display fill color           | boolean       | Default is false                                                                                               |
| showLabel          | Whether to display value labels         | boolean       | Default is false                                                                                               |
| unit               | Unit for y-axis values                  | string        | Default is not displayed                                                                                       |
| connectNulls       | Whether to connect null data            | Boolean       | Default is true                                                                                                |
| smooth             | Whether to use smooth curve             | Boolean       | Default is true                                                                                                |
| markLine           | Mark line data                          | array         | Default is not displayed. Optional                                                                             |
| markLine[i].name   | Mark line name                          | string        |                                                                                                                |
| markLine[i].value  | Mark line value                         | number        |                                                                                                                |
| markLine[i].color  | Mark line color (default is red)        | -             |                                                                                                   |
