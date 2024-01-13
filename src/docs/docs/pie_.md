# 饼图

#### 示例
<vuep template="#simple-pie"></vuep>

<script v-pre type="text/x-template" id="simple-pie">
<template>
    <e-pie :data="pieData" style="width: 400px; height: 400px;"></e-pie>
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
            { name: 'Ⅰ类', value: 5 },
            { name: 'Ⅱ类', value: 5 },
            { name: 'Ⅲ类', value: 30 },
            { name: 'Ⅳ类', value: 20 },
            { name: 'Ⅴ类', value: 10 },
            { name: '劣Ⅴ类', value: 2 }
        ]
      }
    }
  }
</script>
</script>

#### 圆环图
<vuep template="#simple-pie_1"></vuep>
<script v-pre type="text/x-template" id="simple-pie_1">
<template>
    <e-pie
        :data="pieData"
        :config="{
            
            title: '总个数\n300',
            type: 'ring'
        }"
        style="width: 400px;height: 400px;"
    ></e-pie>
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
            { name: 'Ⅰ类', value: 5 },
            { name: 'Ⅱ类', value: 5 },
            { name: 'Ⅲ类', value: 30 },
            { name: 'Ⅳ类', value: 20 },
            { name: 'Ⅴ类', value: 10 },
            { name: '劣Ⅴ类', value: 2 }
        ]
      }
    }
  }
</script>
</script>

#### 纵向图例
<vuep template="#simple-pie_zxtl"></vuep>
<script v-pre type="text/x-template" id="simple-pie_zxtl">
<template>
    <e-pie
        :data="pieData"
		:config="{
			
			showLegend: true,
			legendOrient: 'vertical'
		}"
		style="width: 500px;height: 300px;"
    ></e-pie>
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
            { name: 'Ⅰ类', value: 5 },
            { name: 'Ⅱ类', value: 5 },
            { name: 'Ⅲ类', value: 30 },
            { name: 'Ⅳ类', value: 20 },
            { name: 'Ⅴ类', value: 10 },
            { name: '劣Ⅴ类', value: 2 }
        ]
      }
    }
  }
</script>
</script>

#### 玫瑰图
<vuep template="#simple-pie_2"></vuep>

<script v-pre type="text/x-template" id="simple-pie_2">
<template>
    <e-pie
        :data="pieData"
        :config="{
            
            type: 'rose',
            showLegend: true
        }"
        style="width: 400px;height: 400px;"
    ></e-pie>
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
            { name: 'Ⅰ类', value: 5 },
            { name: 'Ⅱ类', value: 5 },
            { name: 'Ⅲ类', value: 30 },
            { name: 'Ⅳ类', value: 20 },
            { name: 'Ⅴ类', value: 10 },
            { name: '劣Ⅴ类', value: 2 }
        ]
      }
    }
  }
</script>
</script>

#### data 数据

| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data[i].name | 数据项名称 | string | 用于tooltip的显示，legend 的图例筛选，必须 |
| data[i].value | 数据值 | number | 必须 |

#### config 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| showLegend | 是否显示图例 | boolean | 默认为false 不显示 |
| legendOrient | 图例列表的布局朝向 | string | horizontal横向，vertical纵向，默认为横向 |
| showLabel | 是否显示线条文字 | boolean | 默认为true |
| showNullLabel | showLabel为true时有效，是否显示无数据项的线条文字 | boolean | 默认为false |
| title | 中间的文字 | string | 默认不显示 |
| type | 形态类型 | string | 实心圆circle， 圆环ring，  玫瑰图rose， 默认为实心圆 |








##### 当空间不足饼图文字线条展示不全时， 请参考echarts文档进行手动调整。 
##### 如以下方法可以尝试：


###### 1、直接修改图表宽高使空间变大

###### 2、修改图表半径 使饼图变小
<vuep template="#simple-pie_4"></vuep>
<script v-pre type="text/x-template" id="simple-pie_4">
<template>
    <div>
        <e-pie
            :data="pieData"
            :option="{
                series: [{
                    radius: '40%'
                }]
            }"
            style="width: 50%; height: 400px;float:left;"
        ></e-pie>
        <e-pie
            :data="pieData"
            :option="{
                series: [{
                    radius: ['30%', '40%']
                }]
            }"
            style="width: 50%; height: 400px;float:left;"
        ></e-pie>
    </div>
    
</template>
<script>
  export default {
    data () {
      return {
        pieData: [
            { name: '类型名1', value: 5 },
            { name: '类型名2', value: 5 },
            { name: '类型名3', value: 30 },
            { name: '类型名4', value: 20 },
            { name: '类型名5', value: 10 },
            { name: '类型名6', value: 2 }
        ]
      }
    }
  }
</script>
</script>

###### 3、改变线条长度
###### 4、文字换行
<vuep template="#simple-pie_5"></vuep>
<script v-pre type="text/x-template" id="simple-pie_5">
<template>
    <div>
        <!-- 改变线条长度 -->
        <e-pie
            :data="pieData"
            :option="{
                series: [{
                    labelLine: {
                        length: 0,
                        length2: 5
                    }
                }]
            }"
            style="width: 55%; height: 400px;float:left;"
        ></e-pie>
        
        <!-- 文字换行 -->
        <e-pie
            :data="pieData"
            :option="{
                series: [{
                    label: {
                        formatter: '{b}\n{c}%'
                    }
                }]
            }"
            style="width: 45%; height: 400px;float:left;"
        ></e-pie>
    </div>
    
</template>
<script>
  export default {
    data () {
      return {
        pieData: [
            { name: '类型名1', value: 5 },
            { name: '类型名2', value: 5 },
            { name: '类型名3', value: 30 },
            { name: '类型名4', value: 20 },
            { name: '类型名5', value: 10 },
            { name: '类型名6', value: 2 }
        ]
      }
    }
  }
</script>
</script>

###### 4、其它内容有空白部分时，可将图表容器增加负边距使图表越界叠在其它内容上
<vuep template="#simple-pie_3"></vuep>
<script v-pre type="text/x-template" id="simple-pie_3">
<template>
    <div>
        <div class="box">
            <!--其它内容1-->
        </div>
        <e-pie
            :data="pieData"
            :option="{
                toolbox: {
                    left: 50
                }
            }"
            style="margin: 0 -40px; width: calc(50% + 80px); height: 400px;float:left;"
        ></e-pie>
        <div class="box">
            <!--其它内容1-->
        </div>
    </div>
    
</template>
<style>
.box{
    width: 25%;
    float: left;
    height:400px;
    background: #ddd;
}
</style>
<script>
  export default {
    data () {
      return {
        pieData: [
            { name: 'Ⅰ类', value: 5 },
            { name: 'Ⅱ类', value: 5 },
            { name: 'Ⅲ类', value: 30 },
            { name: 'Ⅳ类', value: 20 },
            { name: 'Ⅴ类', value: 10 },
            { name: '劣Ⅴ类', value: 2 }
        ]
      }
    }
  }
</script>
</script>



 