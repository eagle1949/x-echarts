<!--
 * @Author: Caijw
 * @Date: 2020-01-20 17:49:12
 * @LastEditors  : Caijw
 * @LastEditTime : 2020-01-20 17:55:16
 * @Description: 
 -->
# 通用

#### 示例
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-chart style="width: 600px;height: 400px;" :option="option" show-option @click="handleClick"></e-chart>
</template>

<script>
  export default {
    data () {
      return {
        option: {
                series: [
                    {
                        type: 'bar',
                        data: [11, 12, 15, 16, 13, 12, 14]
                    }
                ],
                xAxis: {
                    data: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
                },
                yAxis: {},
                tooltip: {}
            }
      }
    },
    methods: {
        handleClick(params) {
            alert(params.name);
        }
    }
  }
</script>
</script>


## 配置
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| option | 替换echarts默认配置 | object | -
| show-option | 是否打印echarts的配置项(控制台可以查看) | boolean | false

>备注： <br/>
全局配置及统一样式对通用图表组件的影响说明如下：<br/>
通用图表自动获取全局配置中的文字样式， 但由于echarts中全局字体样式无法作用在所有字体中， 因此部分自定义配置项中的字体样式需要手动调整。<br/>
通用图表的坐标轴受坐标轴的统一样式影响， 统一样式优先级低于自定义样式<br/>
通用图表的图例样式受图例统一样式影响， 统一样式优先级低于自定义样式<br/>
通用图表的自定义配置项中没有配色时， 取统一配色


