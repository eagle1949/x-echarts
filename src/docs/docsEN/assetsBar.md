# 资产建设条纹图

#### 示例
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-assets-bar :data="data" style="width: 600px; height: 400px;"></e-assets-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: [
                { name: '广州', time1: 2012, time2: 2018 },
                { name: '广州', time1: 2013, time2: 2016 },
                { name: '广州', time1: 2014, time2: 2015 },
                { name: '广州', time1: 2012, time2: 2015 },
                { name: '广州', time1: 2015, time2: 2014 },
                { name: '广州', time1: 2012, time2: 2018 },
                { name: '广州', time1: 2012, time2: 2018 },
                { name: '广州', time1: 2012, time2: 2018 },
                { name: '广州', time1: 2012, time2: 2018 },
                { name: '广州', time1: 2012, time2: 2018 }
        ]
      }
    }
  }
</script>
</script>

#### 指定颜色、条纹宽度， 统计项名称
<vuep template="#simple_2"></vuep>

<script v-pre type="text/x-template" id="simple_2">
<template>
    <e-assets-bar
        :data="data" 
        :config="{
            color: ['#d8cf3a', '#20cb44'],
            barWidth: 20,
            label1: '种植时间',
            label2: '采摘时间'
        }"
        style="width: 600px; height: 600px;"
    ></e-assets-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: [
                { name: '广州', time1: 2012, time2: 2018 },
                { name: '广州', time1: 2013, time2: 2016 },
                { name: '广州', time1: 2014, time2: 2015 },
                { name: '广州', time1: 2012, time2: 2015 },
                { name: '广州', time1: 2015, time2: 2014 },
                { name: '广州', time1: 2012, time2: 2018 },
                { name: '广州', time1: 2012, time2: 2018 },
                { name: '广州', time1: 2012, time2: 2018 },
                { name: '广州', time1: 2012, time2: 2018 },
                { name: '广州', time1: 2012, time2: 2018 }
        ]
      }
    }
  }
</script>
</script>

#### data 数据

| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data[i].name | 数据项名称 | string | 用于绘制左侧y轴，必须 |
| data[i].time1 | 统计项目1的年份时间 | number | 必须 |
| data[i].time2 | 统计项目2的年份时间 | number | 必须 |

#### config 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| color | 颜色 | array | 可选
| label1 | 统计项目1名称 | string | 默认值 "建设时间" |
| label2 | 统计项目2名称 | string | 默认值 "数据上传时间" |
| barWidth | 条纹宽度 |  number | 默认为16 |
