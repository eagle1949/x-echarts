# heatmap

#### example
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
           xAxis: ['2015', '2016', '2017', '2018', '2019'],
           series: [
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 130, 140, 200, 300] },
               { name: 'guangzhou', data: [400, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [200, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 125, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 120, 200, 300] }
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
           xAxis: ['2015', '2016', '2017', '2018', '2019'],
           series: [
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 30, 140, 200, 300] },
               { name: 'guangzhou', data: [400, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [0, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 5, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 140, 200, 300] },
               { name: 'guangzhou', data: [100, 120, 0, 200, 300] }
           ]
        }
      }
    }
  }
</script>
</script>

#### data

| Data Item            | Description          | Type   | Remarks  |
| -------------------- | -------------------- | ------ | -------- |
| data.xAxis           | x-axis category data | array  | Required |
| data.series          | Series data          | array  | Required |
| data.series[i].name  | Data item name       | string | Required |
| data.series[i].data  | Data array           | array  | Required |

#### config

| Configuration Item | Description                          | Type    | Remarks                                                                                       |
| ------------------ | ------------------------------------ | ------- | --------------------------------------------------------------------------------------------- |
| type               | Type                                 | string  | Continuous (continuous), Piecewise (piecewise). Default is continuous.                        |
| max                | Maximum value for the legend          | number  | Maximum value for the legend colors in continuous heatmaps. By default, it takes the maximum value from the data. |
| min                | Minimum value for the legend          | number  | Minimum value for the legend colors in continuous heatmaps. By default, it takes the minimum value from the data. |
| categories         | Names for each segment                | Array   | Used in piecewise heatmaps.                                                                  |
| color              | Colors                               | array, string | Default color scheme for continuous heatmaps is red-green. color[0] represents the color for the maximum value. |
| unit               | Value unit                           | string  | Default is not displayed.                                                                     |
| showLabel          | Whether to display text labels        | boolean | Default is true.                                                                             |

