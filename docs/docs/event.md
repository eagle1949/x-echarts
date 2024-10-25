# 事件

默认支持以下常用事件，可在全局配置中添加其他echarts支持的事件：

    'click', 'dblclick'

>备注： 事件参数参考[echarts文档](https://echarts.apache.org/zh/api.html#events)
 
#### 示例   
<vuep template="#simple_1"></vuep>
<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-pie
        :data="data"
        @click="handleClick"
        style="width: 400px;height: 400px;"
    ></e-pie>
</template>

<script>
  export default {
    data () {
      return {
        data: [
            { name: 'A类', value: 5 },
            { name: 'B类', value: 5 },
            { name: 'C类', value: 30 },
            { name: 'D类', value: 20 },
            { name: 'E类', value: 10 },
            { name: 'F类', value: 2 }
        ]
      }
    },
    methods: {
        handleClick(params) {
            alert(params.name + '占比' + params.value + '%');
        }
    }
  }
</script>
</script>