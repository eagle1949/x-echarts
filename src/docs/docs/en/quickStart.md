# Five Minute Quick Start

## Select corresponding charts based on business

- For example, when we need to use a linear graph, we introduce the `e-line` label into the Vue page

<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-line :data="data" style="width: 600px; height: 400px;"></e-line>
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

## Adjust options (for example, if we want to remove the legend and set the size of the marking graphic for the second line)

- At this point, add `show-option` to the label

<vuep template="#simple1"></vuep>

<script v-pre type="text/x-template" id="simple1">
<template>
    <e-line 
    :data="data" 
    show-option 
    style="width: 600px; height: 400px;"></e-line>
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

- Then press F12 to view the specific echarts configuration

<img src="./docs/showopt.png" style="width:100%;" />

<!-- - 复制配置项到对应页面调整echarts配置（<a href="https://gallery.echartsjs.com/editor.html" target="_blank">echarts 配置调整传送门</a>） -->

- Taking the removal of the legend and setting the size of the marking graphic for the second line as an example
- Add the `option` attribute to the tag (where the configuration is native to echarts) to replace the corresponding attribute (where the configuration is replaced by default), and then remove the legend.

<vuep template="#simple2"></vuep>

<script v-pre type="text/x-template" id="simple2">
<template>
    <e-line 
    :data="data" 
    show-option 
    :option="option"
    style="width: 600px; height: 400px;"></e-line>
</template>

<script>
  export default {
    data () {
      return {
        option: {
            legend: {
                show: false
            },
			series: [
				{},
				{
					symbolSize: 12
				}
			]
        },
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

## Operating ECharts instances

- You can use $ref to operate ECharts instances. Please refer to the [ECharts API documentation] for specific methods（ https://echarts.apache.org/en/api.html#echarts ）

<vuep template="#simple-sl"></vuep>

<script v-pre type="text/x-template" id="simple-sl">
<template>
	<e-pie :data="pieData" ref="pieChart" style="width: 400px; height: 400px;"></e-pie>
</template>

<script>
  export default {
    data () {
      return {
         pieData: [
			{ name: 'Ⅰ', value: 5 },
			{ name: 'Ⅱ', value: 5 },
			{ name: 'Ⅲ', value: 30 },
			{ name: 'Ⅳ', value: 20 },
			{ name: 'Ⅴ', value: 10 },
			{ name: '劣Ⅴ', value: 2 }
		],
		timer: null
      }
    },
	beforeUnmount(){
		clearInterval(this.timer);
		this.timer = null;
	},
	mounted(){
		let chart = this.$refs.pieChart.chart;
		let len = this.pieData.length;
		let n = 0;
		this.timer = setInterval(()=>{
			if(n > len - 1){
				n = 0
			}
			chart.dispatchAction({
				type: 'showTip',
				seriesIndex: 0,
				dataIndex: n
			});
			n++
		},2000)
		
	}
  }
</script>
</script>
