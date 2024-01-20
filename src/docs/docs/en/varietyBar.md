# 变化排名stripeBar

#### example
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-variety-bar :data="data" style="width: 600px; height: 400px;"></e-variety-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: [
            { name: '广州', rank: 1, value: -2.5 },
            { name: '广州', rank: 2, value: -2.8 },
            { name: '广州', rank: 3, value: -2.9 },
            { name: '广州', rank: 4, value: -3.1 },
            { name: '广州', rank: 5, value: -3.5 },
            { name: '广州', rank: 6, value: -3.8 },
            { name: '广州', rank: 7, value: 4.5 },
            { name: '广州', rank: 8, value: 4.8 },
            { name: '广州', rank: 9, value: 5.6 },
            { name: '广州', rank: 10, value: 5.8 }
        ]
      }
    }
  }
</script>
</script>

#### 指定颜色、条纹宽度和单位
<vuep template="#simple_2"></vuep>

<script v-pre type="text/x-template" id="simple_2">
<template>
    <e-variety-bar 
        :data="data" 
        :config="{
            color: ['#d8cf3a', '#20cb44', '#ddd'],
            barWidth: 20,
            unit: '%'
        }"
        style="width: 600px; height: 500px;"
    ></e-variety-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: [
            { name: '广州', rank: 1, value: -2.5 },
            { name: '广州', rank: 2, value: -2.8 },
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
        ]
      }
    }
  }
</script>
</script>

#### data

| 数据项 | 简介 | 类型 | remark |
| --- | --- | --- | --- |
| data[i].name | 数据项名称 | string | 用于绘制左侧y轴，必须 |
| data[i].value | 数据值 | number | 必须 |
| data[i].rank | 序号 | number | 有值时名称前显示序号，可选 |

#### config

| 配置项 | 简介 | 类型 | remark |
| --- | --- | --- | --- |
| color | 颜色 | array | 可选， color[0]指定正值条纹颜色， color[1]指定负值条纹颜色， color[2]指定边框颜色 |
| unit | 数值单位 | string | 默认不显示 |
| barWidth | 条纹宽度 |  number | 默认为20 |
