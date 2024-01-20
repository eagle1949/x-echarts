# Eevent

By default, the following common events are supported, and other events supported by echarts can be added to the global configuration:

    'click', 'dblclick'

>Note: Event parameter reference [echarts document](https://echarts.apache.org/en/api.html#events)
 
#### example  
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
            { name: 'A', value: 5 },
            { name: 'B', value: 5 },
            { name: 'C', value: 30 },
            { name: 'D', value: 20 },
            { name: 'E', value: 10 },
            { name: 'F', value: 2 }
        ]
      }
    },
    methods: {
        handleClick(params) {
            alert(params.name + ' percent:' + params.value + '%');
        }
    }
  }
</script>
</script>