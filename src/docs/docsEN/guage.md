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

| Configuration Item | Description                             | Type    | Remarks                                                                                       |
| ------------------ | --------------------------------------- | ------- | ---------------------------------------------------------------------------------------------- |
| angle              | Total angle of the circular ring         | number  | Default is 270. Can be set to a value between 180 and 360. 360 represents a full circular ring. |
| barWidth           | Width of the circular ring               | number  | Default is 20.                                                                                |
| title              | Title text                               | string  | Default is not displayed.                                                                     |
| textOffset         | Vertical distance of text from the center | string  | Default is 40%. Only supports percentage values for now.                                       |
| color              | Colors of the circular ring              | array   | The first item represents the color of the part with values, defaulting to the first color in the overall configuration. The second item represents the color of the remaining scale, defaulting to #ddd. |
| isShowTick         | Whether to show tick marks               | boolean | Default is false.                                                                             |
| isShowTickLabel    | Whether to show tick labels              | boolean | Default is the same as isShowTick.                                                             |
| isShowPointer      | Whether to show the pointer               | boolean | Default is false.                                                                             |
| unit               | Value unit                               | string  | Default is '%'.                                                                               |
| min                | Minimum scale                            | number  | Default is 0.                                                                                 |
| max                | Maximum scale                            | number  | Default is 100.                                                                               |
| size               | Scaling                                  | number  | Default is no scaling. When size is a number, the pointer, tick marks, and text are scaled by the specified factor. |
| type               | Style type                               | string  | When the value is '1', style '1' is used. When the value is '2', style '2' is used. When the value is '3', style '3' is used. |

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

| Configuration Item | Description                             | Type   | Remarks                                                                                          |
| ------------------ | --------------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| title              | Title text                               | string | Default is not displayed.                                                                        |
| color              | Colors of the circular ring              | array  | The colors for the inner circle and scale axis, middle circle, and outer circle. Default: ['#458EFD', '#8DC4FD', '#ddd'] |
| unit               | Value unit                               | string | Default is '%'.                                                                                  |
| min                | Minimum scale                            | number | Default is 0.                                                                                    |
| max                | Maximum scale                            | number | Default is 100.                                                                                  |
| type               | Style type                               | string | When the value is '1', style '1' is used. When the value is '2', style '2' is used. When the value is '3', style '3' is used. |

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

| Configuration Item | Description                             | Type   | Remarks                                            |
| ------------------ | --------------------------------------- | ------ | -------------------------------------------------- |
| color              | Value color                             | string | Default is highlight green color, #27e4ae          |
| unit               | Value unit                              | string | Default is '%'                                    |
| min                | Minimum scale                           | number | Default is 0                                       |
| max                | Maximum scale                           | number | Default is 100                                     |
| size               | Scaling                                 | Number | Default is no scaling. When size is a number, the pointer, scale, text, and dial are scaled by the specified factor. |

#### Data

| Data Item         | Description        | Type   | Remarks  |
| ----------------- | ------------------ | ------ | -------- |
| data.value        | Gauge value        | number | Required |

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

#### data 

| Data Item    | Description        | Type   | Remarks  |
| ------------ | ------------------ | ------ | -------- |
| data.value   | Gauge value        | number | Required |

#### Configuration Items

| Configuration Item | Description             | Type   | Remarks                                                   |
| ------------------ | ----------------------- | ------ | --------------------------------------------------------- |
| barWidth           | Ring width              | number | Default value is 15                                       |
| ringColor          | Fill color of the scale | string | Default value is '#ddd'                                   |
| angle              | Total angle of the ring | number | Default is 270. Can be set to a value between 180 and 360 |
