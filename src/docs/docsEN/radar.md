# radar

#### example
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-radar :data="data" style="width: 400px; height: 400px;background: #04233c;" 
		:config="{
			lineColor: '#167374',
			symbolColor: '#fff'
		}"></e-radar>
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
            indicator: [
              'East',
                'Southeast',
                'South',
                'Southwest',
                'West',
                'Northwest',
                'North',
                'Northeast'
            ],
            series: [
                { name: 'A', value: [28, 20, 36, 25, 12, 8, 19, 15] },
                { name: 'B', value: [21, 22, 33, 22, 10, 5, 12, 11] }
            ]
        }
      }
    }
  }
</script>
</script>

#### set color
<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-radar 
        :data="data"
        style="width: 400px; height: 400px;"
    ></e-radar>
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
            indicator: [
                'East',
                'Southeast',
                'South',
                'Southwest',
                'West',
                'Northwest',
                'North',
                'Northeast'
            ],
            series: [
                { name: 'A', value: [28, 20, 36, 25, 12, 8, 19, 15] },
                { name: 'B', value: [21, 22, 33, 22, 10, 5, 12, 11] }
            ]
        }
      }
    }
  }
</script>
</script>

#### data

| Data Item                     | Description                 | Type   | Remarks  |
| ----------------------------- | --------------------------- | ------ | -------- |
| data.indicator                | Array of radar indicators   | array  | Used to specify multiple variables (dimensions) in the radar chart |
| data.series                   | Series data                 | array  | Required |
| data.series[i].name           | Data item name              | string | Required |
| data.series[i].value          | Data array                  | array  | Required |

#### config

| Configuration Item | Description                          | Type          | Remarks                                                      |
| ------------------ | ------------------------------------ | ------------- | ------------------------------------------------------------ |
| color              | Color                                | array, string | Default color scheme is used. Specify colors as an array like ["#f00", "#00f"]. |
| lineColor          | Axis line color                      | string        | Default is using the BORDER_COLOR from the overall configuration. |
| areaColor          | Background segment color             | array         | Default is none.                                             |
