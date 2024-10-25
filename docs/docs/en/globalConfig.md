# Global Configuration

#### example 1

<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-line :data="data" style="width: 700px; height: 400px;background: #084a81"></e-line>
</template>

<script>
  export default {
		created () {
			this.$xEchart.setChartConfig({
				FONT_S: 16,
				THEME_COLOR: 'dark'
			});
		},
    data () {
      return {
        data: {
			xAxis: ['2014', '2015', '2016', '2017', '2018', '2019'],
			series: [
				{
						name: 'MeanValue',
						type: 'bar',
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

#### example 2

<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-line 
        :data="data" 
        :config="{
            color: ['#d8cf3a', '#20cb44'],
            showFillArea: true
        }"
        style="width: 700px; height: 600px;"
    ></e-line>
</template>

<script>
  export default {
		created () {
			this.$xEchart.setChartConfig({
				FONT_S: 16,
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
                    data: [20, 33, 28, 36, 28, 35]
                },
                {
                    name: '2019',
                    data: [28, 36, 28, 30, 22, 33]
                }
            ]
        }
      }
    }
  }
</script>
</script>

#### setChartConfig() Configuration Options


| Configuration Option | Description | Type | Remarks |
| -------------------- | ----------- | ---- | ------- |
| THEME_COLOR | Chart theme color scheme | string | Default value is "light". "light" uses a white background color scheme, "dark" uses a dark background color scheme. |
| FONT_FAMILY | Font style | string | Default value is 'sans-serif'. Adding a custom font requires prior importing in the styles. |
| FONT_SIZE | Normal font size | number | Default value is 16. |
| FONT_COLOR | Font color | string | If not set, the font color will change according to the THEME_COLOR, taking the values of FONT_COLOR_DARK or FONT_COLOR_LIGHT. |
| FONT_COLOR_DARK | Font color in dark background | string | Default value is '#fff'. |
| FONT_COLOR_LIGHT | Font color in light background | string | Default value is '#666'. |
| BORDER_COLOR | Axis line color | string | If not set, the axis line color will change according to the THEME_COLOR, taking the values of BORDER_COLOR_DARK or BORDER_COLOR_LIGHT. |
| BORDER_COLOR_DARK | Axis line color in dark background | string | Default value is '#0169a2'. |
| BORDER_COLOR_LIGHT | Axis line color in light background | string | Default value is '#c8c8c8'. |
| COLOR | Chart color scheme | array | If not set, the color scheme will change according to the THEME_COLOR, taking the values of COLOR_DARK or COLOR_LIGHT. |
| COLOR_DARK | Chart color scheme in dark background | array | Default value: see color description. |
| COLOR_LIGHT | Chart color scheme in light background | array | Default value: see color description. |
| LEGEND_ICON | Legend icon type | string | Default value is 'rect'. |
| LEGEND_ICON_SIZE | Legend icon size | number | Default value is 16. |
| SHOW_TOOLBOX | Whether to display the toolbox | boolean | Default value is false. |
| BG_COLOR | Background color when saving as an image | string | Default value is "rgba(0,0,0,0)". |
| IMG_NONE | Replacement image when there is no data | string | |
| IMG_NONE_W | Width of the image when there is no data | number | Default value is 217. |
| IMG_NONE_H | Height of the image when there is no data | number | Default value is 134. |
| GRID | Configuration for grid margins<br/>(applies to line charts, bar charts, stack charts, and heat maps) | Object | Default value: see color description. |
| EVENTS | Echarts events to listen to | array | Default value is ['click', 'dblclick']. |
| TOOLTIP_BG_COLOR | Tooltip background color | string | Default value is '#fff'. |
| TOOLTIP_BORDER_COLOR | Tooltip border color | string | Default value is '#c8c8c8'. |
| TOOLTIP_FONT_COLOR | Tooltip text color | string | Default value is '#666'. |

> remark： <br/>setChartConfig 仅支持全局配置， 设置后即公用。<br/>如无特殊要求，不同底色下一般只需要配置THEME_COLOR设置主题色系。 <br/> 因为 echarts 全局字体style本身无法覆盖所有字体， 因此添加自定义配置时存在字体style不一致的情况， 需要手动调整。
