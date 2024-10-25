# bar


#### exampledark 
<vuep template="#simpled"></vuep>

<script v-pre type="text/x-template" id="simpled">
<template>
    <e-bar :data="data" style="width: 600px; height: 400px;background: #04233c"></e-bar>
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
            xAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
            series: [
                {
                    name: '2018',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### example
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-bar :data="data" style="width: 600px; height: 400px;"></e-bar>
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
            xAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
            series: [
                {
                    name: '2018',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### Top rounded corner
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
            xAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
            series: [
                {
                    name: '2018',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### Top and bottom rounded corners
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
            xAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
            series: [
                {
                    name: '2018',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>


#### Display numerical values and units
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
            xAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
            series: [
                {
                    name: '2018',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### Line column mixing
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
            xAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
            series: [
                {
                    name: '均值',
                    type: 'line',
                    data: [2, 1, 2, 4, 5, 3]
                },
                {
                    name: '2018',
                    data: [2.5, 1.5, 3, 4, 5.5, 3.5]
                },
                {
                    name: '2019',
                    data: [1.5, 0.5, 1, 4, 4.8, 2.5]
                }
            ]
        }
      }
    }
  }
</script>
</script>


#### Horizontal bar chart
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
            yAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
            series: [
                {
                    name: '2018',
                    data: [2.5, 1.5, 3, 4, 5.5, 3.5]
                },
                {
                    name: '2019',
                    data: [1.5, 0.5, 1, 4, 4.8, 2.5]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### Common gradient bar charts
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
            xAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
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
		this.$xEchart.setChartConfig({
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
		    yAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
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


#### cylinder
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
	  	this.$xEchart.setChartConfig({
	  		THEME_COLOR: 'light'
	  	});
	},
    data () {
      return {
        data: {
            xAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
            series: [
                {
                    name: '2018',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### Rhombic pillar
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
	  	this.$xEchart.setChartConfig({
	  		THEME_COLOR: 'light'
	  	});
	},
    data () {
      return {
        data: {
            xAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
            series: [
                {
                    name: '2018',
                    data: [22, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019',
                    data: [28, 36, 28, 35, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>


#### data

| Data Item             | Description                | Type   | Remarks                                   |
| --------------------- | -------------------------- | ------ | ----------------------------------------- |
| data.xAxis            | x-axis category data       | array  | Required                                  |
| data.series           | Series data                | array  | Required                                  |
| data.series[i].name   | Series name                | string | Required                                  |
| data.series[i].type   | Series type                | string | Specify 'line' to display data as a line chart (optional) |
| data.series[i].data   | Data array in the series    | array  | Required                                  |

#### config

| Configuration Item | Description | Type | Remarks |
| ------------------ | ----------- | ---- | ------- |
| color              | Color       | array, string | Default color scheme is used. Specify colors as an array like ["#f00", "#00f"]. Cylinder and prism charts only support hexadecimal and RGB colors. |
| showLabel          | Whether to display value labels | boolean | Default is false. |
| unit               | Unit for y-axis values | string | Default is not displayed. |
| barWidth           | Width of the bars | number | Default value is 20. |
| topRing            | Whether to have rounded tops of the bars | boolean | Default is false. Only supported in 2D. |
| rightRing          | Whether to have rounded tops on the right side of the bars | boolean | Default is false. Only supported in 2D. |
| tbRing             | Whether to have rounded tops and bottoms of the bars | boolean | Default is false. Only supported in 2D. |
| pictorial          | Pictorial symbol | string | Default is not displayed. For cylinders, use 'circle'; for prisms, use 'diamond'. Note: When setting pictorial symbols, legends cannot be selected, and horizontal display is not supported. |
| symbolOffsetXArr   | Horizontal offset of pictorial symbols for each series | array | Manually adjust the horizontal offset when pictorial symbols and bars are not aligned. Example: ['-120%', 0, '120%'] represents the horizontal offset distances for the 1st, 2nd, and 3rd series. |
| type               | Simulated 3D bar chart | string | Use 'simulated3D' to display a simulated 3D bar chart. |
| customColor        | Simulated 3D bar chart | array | Specify colors for the left, right, and top faces. Example: [{left: '#4d76eb', right: '#4d76eb', top: '#4d76eb'}]. |
