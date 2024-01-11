# 桑基图

#### 示例
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-sankey :data="data" style="width: 600px; height: 800px;"></e-sankey>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {
              name: '广州',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '深圳',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '东莞',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '佛山',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '中山',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '清远',
              items: [
                  { name: '氨氮', value: '5' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          }
      ]
      }
    }
  }
</script>
</script>

#### 设置颜色
<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-sankey 
        :config="{
            leftColor: ['#68cffe', '#49a1fe', '#37b70c'],
            rightColor: ['#fd77da', '#dea700']
        }"
        :data="data" 
        style="width: 600px; height: 800px;"
    ></e-sankey>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {
              name: '广州',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '深圳',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '东莞',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '佛山',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '中山',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '清远',
              items: [
                  { name: '氨氮', value: '5' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          }
      ]
      }
    }
  }
</script>
</script>

#### data 数据

| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data[i].name | 数据项名称 | string | 对应右侧数据项 必须 |
| data[i].items | 数据数组 | array | 对应左侧数据 必须 |
| data[i].items[i].name | 数据项名称 | string | 对应左侧数据项 必须 |
| data[i].items[i].value | 数据值 | number | 两侧对应的数据 必须 |

#### config 配置项
    
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| leftColor | 颜色 | array | 左侧项颜色 |
| rightColor | 颜色 | array | 右侧项颜色 |
