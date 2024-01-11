<!--
 * @Author: Caijw
 * @Date: 2020-01-21 16:40:13
 * @LastEditors  : Caijw
 * @LastEditTime : 2020-01-21 16:57:28
 * @Description: 
 -->
# 水球图

#### 设置颜色、标题、缩小水面比例  （深色）

<vuep template="#simple_8"></vuep>
<script v-pre type="text/x-template" id="simple_8">
<template>
	<div style="background: #04233c;">		
		<!-- 设置颜色、标题、缩小水面比例 -->
		<e-water-polo
			style="width: 300px;height: 300px;"
			:data="{ value: 99 }"
			:config="{
				title: '达标率',
				itemColor: 'rgb(45,175,230)',
				shadowColor: 'rgb(15, 115, 238)',
				scale: 0.6
			}"
		></e-water-polo>
	</div>
    
</template>

<script>
  export default {
	created () {
		this.$pChart.setChartConfig({
			THEME_COLOR: 'dark'
		});
	},  
    data () {
      return {

		}
    }
  }
</script>
</script>

#### 设置颜色、标题、缩小水面比例

<vuep template="#simple_811"></vuep>
<script v-pre type="text/x-template" id="simple_811">
<template>
	<div>		
		<!-- 设置颜色、标题、缩小水面比例 -->
		<e-water-polo
			style="width: 300px;height: 300px;"
			:data="{ value: 99 }"
			:config="{
				title: '达标率',
				itemColor: 'rgb(45,175,230)',
				shadowColor: 'rgb(15, 115, 238)',
				scale: 0.6
			}"
		></e-water-polo>
	</div>
    
</template>

<script>
  export default {
	created () {
		this.$pChart.setChartConfig({
			THEME_COLOR: 'light'
		});
	},  
    data () {
      return {

		}
    }
  }
</script>
</script>


#### 多层水面 + 阴影背景
<vuep template="#simple_81"></vuep>
<script v-pre type="text/x-template" id="simple_81">
<template>
	<div>
		
		<!-- 多层水面 + 阴影背景  -->
		<e-water-polo
			style="width: 300px;height: 300px;"
			:data="{ value: 60 }"
			:config="{
				title: '达标率',
				itemColor: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [
						{
							offset: 0,
							color: '#446bf5'
						},
						{
							offset: 1,
							color: '#2ca3e2'
						}
					],
					globalCoord: false
				},
				shadowColor: 'rgb(15, 115, 238)',
				itemNum: 2
			}"
			></e-water-polo>
			
		
	</div>
    
</template>

<script>
  export default {
	created () {
		this.$pChart.setChartConfig({
			THEME_COLOR: 'light'
		});
	},  
    data () {
      return {

		}
    }
  }
</script>
</script>

#### 多层水面 + 透明背景 + 无间隔轮廓
<vuep template="#simple_82"></vuep>
<script v-pre type="text/x-template" id="simple_82">
<template>
	<div>
		
		<!-- 多层水面 + 透明背景 + 无间隔轮廓  -->
		<e-water-polo
			style="width: 300px;height: 300px;"
			:data="{ value: 36 }"
			:config="{
				title: '达标率',
				borderColor: '#01d6fe',
				backgroundColor: 'rgba(0,0,0,0)',
				borderDistance: 0,
				itemNum: 2,
				itemColor: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [
						{
							offset: 0,
							color: '#00d8ff'
						},
						{
							offset: 1,
							color: '#0c8ae2'
						}
					],
					globalCoord: false
				},
			}"
		></e-water-polo>
	</div>
    
</template>

<script>
  export default {
	created () {
		this.$pChart.setChartConfig({
			THEME_COLOR: 'light'
		});
	},  
    data () {
      return {

		}
    }
  }
</script>
</script>




#### data 数据

| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data.value | 水球图比例 | number | 必须 |

#### config 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| itemColor | 水球图颜色 | string | -
| labelColor | 文字颜色 | string | -
| shadowColor | 阴影背景颜色 | string | -
| backgroundColor | 纯色背景颜色 | string | 优先级高于阴影背景颜色
| borderColor | 轮廓颜色 | string | 默认不显示
| borderDistance | 轮廓间距 | number | 默认为8
| itemNum | 水面个数 | number | 默认为1
| scale | 水面缩放比例 | number | 默认为1 接近100%的值水面太高不美观，可以设置缩小一点