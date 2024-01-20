<!--
 * @Author: Caijw
 * @Date: 2020-01-19 17:18:27
 * @LastEditors  : Caijw
 * @LastEditTime : 2020-01-21 17:11:02
 * @Description: 
 -->  
# 气环境业务example

#### 优良天数统计 
参考说明：[圆柱图](/pictorialBar)
<vuep template="#airSimple_1"></vuep>
<script v-pre type="text/x-template" id="airSimple_1">
<template>
	<e-cylinder-bar
            style="width: 500px; height: 300px;"
            business="waterGrades"
            :data="data"
        ></e-cylinder-bar>
</template>

<script>
  export default {
    data () {
      return {
        data: {
                xAxis: ['氨氮', '总磷', '总氮', '生化需氧量', '高锰酸钾指数'],
                data: [26, 22, 15, 8, 5]
            }
      }
    }
  }
</script>
</script>


#### 空气AQIguage 
<vuep template="#airSimple_2"></vuep>
<script v-pre type="text/x-template" id="airSimple_2">
<template>
	 <e-air-db
            style="width: 300px;height: 300px;"
            :data="{ value: 350 }"
        ></e-air-db>
</template>

<script>
</script>
</script>


#### 空气guage （设置圆环宽度、设置刻度圆环颜色，设置圆环角度）

<vuep template="#airSimple_21"></vuep>

<script v-pre type="text/x-template" id="airSimple_21">
<template>
	<div>   
	   <!-- 设置圆环宽度、设置刻度圆环颜色，设置圆环角度 -->
		<e-air-db
			style="width: 300px;height: 250px;"
			:data="{ value: 150 }"
			:config="{
				barWidth: 20,
				ringColor: '#e4e4e4',
				angle: 360        
			 }"
		></e-air-db>
	</div>	 
</template>

<script>
</script>
</script>

#### data

| 数据项     | 简介       | 类型   | remark |
| ---------- | ---------- | ------ | ---- |
| data.value | guage比例 | number | 必须 |



