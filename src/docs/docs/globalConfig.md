# 全局配置

#### 示例 1

<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-line :data="data" style="width: 700px; height: 400px;background: #084a81"></e-line>
</template>

<script>
  export default {
		created () {
			this.$pChart.setChartConfig({
				FONT_COLOR: '#fff',
				BORDER_COLOR: '#6785a3',
				FONT_S: 16,
				THEME_COLOR: 'dark',
				TOOLTIP_BG_COLOR: 'rgba(2, 115, 194, 0.8)',
				TOOLTIP_BORDER_COLOR: '#0bb2ff',
				TOOLTIP_FONT_COLOR: '#fff'
			});
		},
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

#### 示例 2

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
			this.$pChart.setChartConfig({
				FONT_COLOR: '#666',
				BORDER_COLOR: '#a5a5a5',
				FONT_S: 16,
				THEME_COLOR: 'light',
				TOOLTIP_BG_COLOR: '#fff',
				TOOLTIP_BORDER_COLOR: '#ddd',
				TOOLTIP_FONT_COLOR: '#666'
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

#### setChartConfig() 配置项

| 配置项       | 简介                                                                                     | 类型    | 备注                                                                            |
| ----------- | -------------------------------------------------------------------------------------- - | ------- | ------------------------------- |
| THEME_COLOR  | 图表主题色系  | string  | 默认值"light", "light"使用白底配色 "dark"使用深色底配色
| FONT_FAMILY  | 字体样式    |  string  | 默认值 'sans-serif'， 添加自定义字体需要先在样式中引入
| FONT_S       | 常规字体大小 | number  | 默认值 16 |
| FONT_COLOR   | 字体颜色  | string  | 不设置时，字体颜色跟随THEME_COLOR变动，分别取FONT_COLOR_DARK或FONT_COLOR_LIGHT的值 |
| FONT_COLOR_DARK   | 深色背景下字体颜色  | string  | 默认值 '#fff' |
| FONT_COLOR_LIGHT   | 白色背景下字体颜色  | string  | 默认值 '#666' |
| BORDER_COLOR | 轴线颜色  | string  | 不设置时，轴线颜色跟随THEME_COLOR变动，分别取BORDER_COLOR_DARK或BORDER_COLOR_LIGHT的值  |
| BORDER_COLOR_DARK   | 深色背景下字体颜色  | string  | 默认值 '#0169a2' |
| BORDER_COLOR_LIGHT   | 白色背景下字体颜色  | string  | 默认值 '#c8c8c8' |
| COLOR   | 图表配色  | array  | 不设置时，配色跟随THEME_COLOR变动，分别取COLOR_DARK或COLOR_LIGHT的值 |
| COLOR_DARK   | 深色背景下图表配色  | array  | 默认值见颜色说明 |
| COLOR_LIGHT   | 白色背景下图表配色  | array  | 默认值见颜色说明 |
| LEGEND_ICON  | 图例现状  | string  | 默认值 'rect'
| LEGEND_ICON_SIZE | 图例大小  | Number   | 默认值 16
| SHOW_TOOLBOX | 是否显示工具栏 | boolean | 默认值 false |
| BG_COLOR     | 保存为图片时的填充背景色   | string  | 默认值 "rgba(0,0,0,0)"   |
| IMG_NONE     | 无数据时的替代图片  | string  |
| IMG_NONE_W   | 无数据图片的宽度  | Number  | 默认值 217 |
| IMG_NONE_H   | 无数据图片的高度 | Number  | 默认值 134 |
| GRID         | 配置直角坐标系边距（作用于折线图、柱状图、堆叠图、热力图）<br/>参照 echarts 的 grid 配置 | Object  | 默认值 <br/>{containLabel: true,top: 50,left: '5%',right: '5%',bottom: '5%'} |
| EVENTS       | echarts添加监听的事件列表  | array   | 默认值 ['click','dblclick']
| waterGradesColor | 配置项config.color为'waterGradesColor'指代的颜色  | array   | 默认值 [ '#44c5fd', '#51a5fd', '#73bb31', '#eebd15', '#f88e17', '#ee3b5b']
| airGradesColor | 配置项config.color为'airGradesColor'指代的颜色  | array   | 默认值 [ '#24bd5d', '#d8bc37', '#f87c12', '#f60000', '#94004b', '#6f001f']
| TOOLTIP_BG_COLOR | 提示框背景色  | string   | 默认值 '#fff'
| TOOLTIP_BORDER_COLOR | 提示框边框颜色  | string   | 默认值 '#c8c8c8'
| TOOLTIP_FONT_COLOR | 提示框文本颜色  | string   | 默认值 '#666'

> 备注： <br/>setChartConfig 仅支持全局配置， 设置后即公用。<br/>如无特殊要求，不同底色下一般只需要配置THEME_COLOR设置主题色系。 <br/> 因为 echarts 全局字体样式本身无法覆盖所有字体， 因此添加自定义配置时存在字体样式不一致的情况， 需要手动调整。
