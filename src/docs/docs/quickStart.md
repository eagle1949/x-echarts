# 五分钟快速入门

## 根据业务选择对应图表

- 比如我们要用到线性图，这个时候就引入`e-line`标签到vue页面中

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

## 调整option （例如我们要把图例去掉, 设置第二个折线的标记图形大小）

- 这个时候，就在标签上加上 `show-option`

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

- 然后按F12查看具体echarts配置

<img src="./docs/showopt.png" style="width:100%;" />

<!-- - 复制配置项到对应页面调整echarts配置（<a href="https://gallery.echartsjs.com/editor.html" target="_blank">echarts 配置调整传送门</a>） -->

- 以去掉图例、设置第二个折线的标记图形大小为例

在标签加上`option`（这里的配置是echarts原生配置）属性替换对应属性（这里是配置的替换默认的）,然后图例就去掉了。

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

## 操作ECharts实例

- 可以使用$ref操作ECharts实例，所有方法具体查看[echarts API文档](https://echarts.apache.org/zh/api.html#echarts)

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
			{ name: 'Ⅰ类', value: 5 },
			{ name: 'Ⅱ类', value: 5 },
			{ name: 'Ⅲ类', value: 30 },
			{ name: 'Ⅳ类', value: 20 },
			{ name: 'Ⅴ类', value: 10 },
			{ name: '劣Ⅴ类', value: 2 }
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
