<!--
 * @Author: Caijw
 * @Date: 2020-01-19 17:11:59
 * @LastEditors  : Caijw
 * @LastEditTime : 2020-01-21 16:58:52
 * @Description:
 -->

# 仪表盘

#### 样式 2

<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
	<div style="display: flex; flex-wrap: wrap">
		<e-dash-board
		    style="width: 300px;height: 300px;"
		    :data="{ value: 30 }"
		    :config="{
				type: '2'
			}"
		></e-dash-board>
		
	</div>
    
</template>

<script>
  export default {
    data () {
      return {
        data: {
        }
      }
    }
  }
</script>
</script>

#### 样式 2 （设置圆环总角度及文字位置）

<vuep template="#simple_11"></vuep>

<script v-pre type="text/x-template" id="simple_11">
<template>
	<div style="display: flex; flex-wrap: wrap">
		
		
		<!-- 设置圆环总角度及文字位置  -->
		<e-dash-board
		    style="width: 300px;height: 300px;"
		    :data="{ value: 90 }"
		    :config="{
				type: '2',
				angle: 360,
				textOffset: '0%'
			}"
		></e-dash-board>
		
	</div>
    
</template>

<script>
  export default {
    data () {
      return {
        data: {
        }
      }
    }
  }
</script>
</script>


#### 样式 2 （显示指针、显示刻度、修改圆环宽度、设置最大值及单位、添加标题文字）

<vuep template="#simple_12"></vuep>

<script v-pre type="text/x-template" id="simple_12">
<template>
	<div style="display: flex; flex-wrap: wrap">
		
		
		<!-- 显示指针、显示刻度、修改圆环宽度、设置最大值及单位、添加标题文字 -->
		<e-dash-board
		    style="width: 300px;height: 300px;"
		    :data="{ value: 20 }"
		    :config="{
				type: '2',
				barWidth: 10,
				isShowTick: true,
				isShowPointer: true,
				max: 60,
				unit: 'mg/L',
				title: '污染物',
			}"
		></e-dash-board>
		
	</div>
    
</template>

<script>
  export default {
    data () {
      return {
        data: {
        }
      }
    }
  }
</script>
</script>

#### 样式 2 （显示刻度值但不显示刻度轴）

<vuep template="#simple_13"></vuep>

<script v-pre type="text/x-template" id="simple_13">
<template>
	<div style="display: flex; flex-wrap: wrap">
		
		
			<!-- 显示刻度值但不显示刻度轴 -->
		<e-dash-board
		    style="width: 300px;height: 300px;"
		    :data="{ value: 80 }"
		    :config="{
				type: '2',
				barWidth: 15,
				isShowTick: false,
				isShowTickLabel: true,
				isShowPointer: true,
				angle: 180
			}"
		></e-dash-board>
		
	</div>
    
</template>

<script>
  export default {
    data () {
      return {
        data: {
        }
      }
    }
  }
</script>
</script>

##### 样式 2 config 配置项

| 配置项          | 简介                     | 类型    | 备注                                                                                        |
| --------------- | ------------------------ | ------- | ------------------------------------------------------------------------------------------- |
| angle           | 圆环总角度               | number  | 默认为 270 可设置为 180~360 之间的数值，360 为满圆环                                        |
| barWidth        | 圆环宽度                 | number  | 默认为 20                                                                                   |
| title           | 标题文字                 | string  | 默认不显示                                                                                  |
| textOffset      | 文字距离中心点的纵向距离 | string  | 默认为 40% 暂只支持百分比值                                                                 |
| color           | 圆环颜色                 | array   | 第一项为圆环有数值部分的颜色，默认为全局颜色的第一项； 第二项为圆环剩余刻度颜色，默认为#ddd |
| isShowTick      | 是否显示刻度             | boolean | 默认为 false                                                                                |
| isShowTickLabel | 是否显示刻度值           | boolean | 默认与 isShowTick 一致                                                                      |
| isShowPointer   | 是否显示指针             | boolean | 默认为 false                                                                                |
| unit            | 数值单位                 | string  | 默认为 %                                                                                    |
| min             | 最小刻度                 | number  | 默认为 0                                                                                    |
| max             | 最大刻度                 | number  | 默认为 100                                                                                  |
| size            | 缩放                     | Number  | 默认不缩放， size 为数字时，指针、刻度、文字按 size 指定倍数缩放                            |
| type            | 样式类型                 | string  | 值为 1 时使用样式'1' 值为'2'时使用样式 2 值为'3'时使用样式 3                                |

#### 样式 3

<vuep template="#simple_2"></vuep>

<script v-pre type="text/x-template" id="simple_2">
<template>
	<div style="display: flex; flex-wrap: wrap">
		<e-dash-board
			style="width: 400px;height: 300px;"
			:data="{ value: 90 }"
			:config="{
				type: '3'
			}"
		></e-dash-board>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        data: {
        }
      }
    }
  }
</script>
</script>


#### 样式 3 修改颜色

<vuep template="#simple_21"></vuep>

<script v-pre type="text/x-template" id="simple_21">
<template>
	<div style="display: flex; flex-wrap: wrap">
		
		<!-- 修改颜色 -->
		<e-dash-board
			style="width: 400px;height: 300px;"
			:data="{ value: 20 }"
			:config="{
				type: '3',
				title: '超期率',
				color: ['#f00', '#f99', '#e4e4e4']
			}"
		></e-dash-board>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        data: {
        }
      }
    }
  }
</script>
</script>

##### 样式 3 config 配置项

| 配置项 | 简介     | 类型   | 备注                                                                          |
| ------ | -------- | ------ | ----------------------------------------------------------------------------- |
| title  | 标题文字 | string | 默认不显示                                                                    |
| color  | 圆环颜色 | array  | 分别为内圆及刻度轴、中间圆、外层圆的颜色 默认为['#458EFD', '#8DC4FD', '#ddd'] |
| unit   | 数值单位 | string | 默认为 %                                                                      |
| min    | 最小刻度 | number | 默认为 0                                                                      |
| max    | 最大刻度 | number | 默认为 100                                                                    |
| type   | 样式类型 | string | 值为 1 时使用样式'1' 值为'2'时使用样式 2 值为'3'时使用样式 3                  |

#### 默认样式

<vuep template="#simple_0"></vuep>

<script v-pre type="text/x-template" id="simple_0">
<template>
	<div style="display: flex; flex-wrap: wrap">
	    <!-- 默认样式 -->
		<e-dash-board
			style="width: 300px;height: 300px;"
			:data="{ value: 50 }"
		></e-dash-board>
	
	</div>
</template>

<script>
  export default {
    data () {
      return {
        data: {
        }
      }
    }
  }
</script>
</script>


#### 默认样式 （适配小尺寸）

<vuep template="#simple_01"></vuep>

<script v-pre type="text/x-template" id="simple_01">
<template>
	<div style="display: flex; flex-wrap: wrap">
		
		<!-- 适配小尺寸 -->
		<e-dash-board
			style="width: 200px;height: 200px;"
			:data="{ value: 50 }"
			:config="{
				size: 0.8
			}"
		></e-dash-board>

	</div>
</template>

<script>
  export default {
    data () {
      return {
        data: {
        }
      }
    }
  }
</script>
</script>


#### 默认样式 （修改最大值及单位）

<vuep template="#simple_02"></vuep>

<script v-pre type="text/x-template" id="simple_02">
<template>
	<div style="display: flex; flex-wrap: wrap">
				
		<!-- 修改最大值及单位 -->
		<e-dash-board
			style="width: 400px;height: 400px;"
			:data="{ value: 150 }"
			:config="{
				max: 300,
				unit: 'mg/L'
			}"
		></e-dash-board>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        data: {
        }
      }
    }
  }
</script>
</script>

##### 默认样式 config 配置项

| 配置项 | 简介     | 类型   | 备注                                                                   |
| ------ | -------- | ------ | ---------------------------------------------------------------------- |
| color  | 数值颜色 | string | 默认为高亮绿色 #27e4ae                                                 |
| unit   | 数值单位 | string | 默认为 %                                                               |
| min    | 最小刻度 | number | 默认为 0                                                               |
| max    | 最大刻度 | number | 默认为 100                                                             |
| size   | 缩放     | Number | 默认不缩放， size 为数字时，指针、刻度、文字、表盘按 size 指定倍数缩放 |

#### data 数据

| 数据项     | 简介       | 类型   | 备注 |
| ---------- | ---------- | ------ | ---- |
| data.value | 仪表盘比例 | number | 必须 |

#### 空气仪表盘

<vuep template="#airSimple_2"></vuep>

<script v-pre type="text/x-template" id="airSimple_2">
<template>
	<div>
		<!-- 默认 -->
		<e-air-db
	       style="width: 300px;height: 250px;"
	       :data="{ value: 50 }"
	   ></e-air-db>
	</div>
	 
</template>

<script>
</script>
</script>

#### 空气仪表盘 （设置圆环宽度、设置刻度圆环颜色，设置圆环角度）

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

#### data 数据

| 数据项     | 简介       | 类型   | 备注 |
| ---------- | ---------- | ------ | ---- |
| data.value | 仪表盘比例 | number | 必须 |

#### config 配置项

| 配置项    | 简介               | 类型   | 备注                                                 |
| --------- | ------------------ | ------ | ---------------------------------------------------- |
| barWidth  | 圆环宽度           | number | 默认值 15                                            |
| ringColor | 刻度圆环的填充颜色 | string | 默认值'#ddd'                                         |
| angle     | 圆环总角度         | number | 默认为 270 可设置为 180~360 之间的数值，360 为满圆环 |
