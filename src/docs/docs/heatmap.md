# 热力图

#### 示例
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-heatmap 
        :data="data" 
        style="width: 500px; height: 600px;"
    ></e-heatmap>
</template>

<script>
  export default {
    data () {
      return {
        data: {
           xAxis: ['2015年', '2016年', '2017年', '2018年', '2019年'],
           series: [
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 130, 140, 200, 300] },
               { name: '广州市', data: [400, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [200, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 125, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 120, 200, 300] }
           ]
        }
      }
    }
  }
</script>
</script>

#### 设置最小值、最大值，颜色、数值单位
<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-heatmap 
        :data="data" 
        :config="{
            min: 0,
            max: 300,
            color: ['#f00', '#fff'],
            unit: 'mg/m³'
        }"
        style="width: 500px; height: 600px;"
    ></e-heatmap>
</template>

<script>
  export default {
    data () {
      return {
        data: {
           xAxis: ['2015年', '2016年', '2017年', '2018年', '2019年'],
           series: [
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 30, 140, 200, 300] },
               { name: '广州市', data: [400, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [0, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 5, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 140, 200, 300] },
               { name: '广州市', data: [100, 120, 0, 200, 300] }
           ]
        }
      }
    }
  }
</script>
</script>

#### 分段型热力图
> 备注 分段型热力图中 series每一项的data中的值， 对应categories中的序号（从1开始）， categories 与 color 按顺序对应。

<vuep template="#simple_2"></vuep>

<script v-pre type="text/x-template" id="simple_2">
<template>
    <e-heatmap 
        :data="data" 
        :config="{
           type: 'piecewise',
           categories: ['Ⅰ类', 'Ⅱ类', 'Ⅲ类', 'Ⅳ类', 'Ⅴ类', '劣Ⅴ类'],
           color: 'waterGradesColor'
        }"
        style="width: 500px; height: 600px;"
    ></e-heatmap>
</template>

<script>
  export default {
    data () {
      return {
        data: {
           xAxis: ['2015年', '2016年', '2017年', '2018年', '2019年'],
           series: [
               { name: '广州市', data: [1, 2, 3, 4, 5] },
               { name: '深圳市', data: [1, 2, 3, 4, 5] },
               { name: '东莞市', data: [1, 6, 3, 4, 5] },
               { name: '广州市', data: [1, 2, 3, 4, 5] },
               { name: '广州市', data: [3, 2, 3, 4, 5] },
               { name: '广州市', data: [3, 2, 3, 4, 5] },
               { name: '广州市', data: [1, 2, 3, 4, 5] },
               { name: '广州市', data: [1, 2, 3, 4, 5] },
               { name: '广州市', data: [1, 2, 3, 4, 5] },
               { name: '中山市', data: [6, 2, 3, 4, 5] }
           ]
        }
      }
    }
  }
</script>
</script>

#### data 数据

| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data.xAxis | x轴类目数据 | array | 必须 |
| data.series | 系列数据 | array | 必须 |
| data.series[i].name | 数据项名称 | string | 必须 |
| data.series[i].data | 数据数组 | array | 必须 |

#### config 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| type | 类型 | string | 连续 continuous，分段 piecewise 默认为连续 |
| max | 图例最大值 | number | 连续型热力图中图例颜色对应的最大值，默认数值中的最大值 |
| min | 图例最小值 | number | 连续型热力图中图例颜色对应的最小值，默认数值中的最小值 |
| categories | 各分段名称 | Array | 分段型热力图中使用
| color | 颜色 | array，string | 连续型热力图中默认使用红-绿配色，color[0]为最大值对应颜色；<br/>分段型热力图中颜色与分段一一对应，可使用简写如"waterGradesColor"指定使用水质等级配色 [参考说明](/color)|
| unit | 数值单位 | string | 默认不显示 |
| showLabel | 是否显示文字 | boolean | 默认显示 |

