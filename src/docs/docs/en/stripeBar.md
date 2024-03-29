# stripeBar

#### example
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


#### Display serial number or ranking, specify color and unit
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


#### new example
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


#### pictographic characters or pictographs stripeBar
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

#### data

| Data Property | Description | Type | Remarks |
| --- | --- | --- | --- |
| data[i].name | Name of the data item | string | Used to draw the left y-axis, required |
| data[i].value | Data value | number | Required |
| data[i].rank | Rank or serial number | number | Optional, displayed before the name when provided |

#### config

| Configuration Option | Description | Type | Remarks |
| --- | --- | --- | --- |
| color | Color | array | Optional. `color[0]` specifies the fill color for the inner stripe, `color[1]` specifies the fill color for the outer stripe. |
| showLabel | Whether to display labels | boolean | Default is `true`. |
| unit | Value unit | string | Default is not displayed. |
| pictorial | Pictorial stripe chart symbol | string | Default is none. If provided, the chart is displayed with the pictorial stripe style. Otherwise, it is displayed with the default stripe style. Refer to [series-pictorialBar.symbol](https://echarts.apache.org/zh/option.html#series-pictorialBar.symbol) for more details. |
