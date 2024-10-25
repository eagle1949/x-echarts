<!--
 * @Author: Caijw
 * @Date: 2020-01-20 17:49:12
 * @LastEditors  : Caijw
 * @LastEditTime : 2020-01-20 17:55:16
 * @Description: 
 -->
# common

#### example
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


# config

| Option | Description | Type | Remarks |
| --- | --- | --- | --- |
| option | Replace default ECharts configuration | object | - |
| show-option | Whether to print ECharts configuration (viewable in the console) | boolean | false |alse

> Remarks: <br/>
The global configuration and unified styles have the following effects on common chart components: <br/>
Common charts automatically inherit the text styles from the global configuration. However, due to the limitation of ECharts, the global font style may not be applied to all text elements. Therefore, manual adjustments may be required for font styles in some custom configuration options. <br/>
The coordinate axes of common charts are influenced by the unified axis styles, with the unified style having a lower priority than custom styles. <br/>
The legend styles of common charts are influenced by the unified legend styles, with the unified style having a lower priority than custom styles. <br/>
If a common chart does not have a custom color configuration, it will use the unified color scheme.


