<!--
 * @Author: Caijw
 * @Date: 2020-01-21 16:40:13
 * @LastEditors  : Caijw
 * @LastEditTime : 2020-01-21 16:57:28
 * @Description: 
 -->
# liquidFill

#### Set color, title, and reduce water surface scale (dark)

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
		this.$xEchart.setChartConfig({
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

#### Set colors, titles, and reduce water surface proportions

<vuep template="#simple_811"></vuep>
<script v-pre type="text/x-template" id="simple_811">
<template>
	<div>		
		<!-- Set colors, titles, and reduce water surface proportions -->
		<e-water-polo
			style="width: 300px;height: 300px;"
			:data="{ value: 99 }"
			:config="{
				title: 'Compliance rate',
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
		this.$xEchart.setChartConfig({
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


#### Multi layer water surface+shadow background
<vuep template="#simple_81"></vuep>
<script v-pre type="text/x-template" id="simple_81">
<template>
	<div>
		
		<!-- Multi layer water surface+shadow background  -->
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
		this.$xEchart.setChartConfig({
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

#### Multi layer water surface+transparent background+seamless contour
<vuep template="#simple_82"></vuep>
<script v-pre type="text/x-template" id="simple_82">
<template>
	<div>
		
		<!-- Multi layer water surface+transparent background+seamless contour  -->
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
		this.$xEchart.setChartConfig({
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




#### data

| Data Item    | Description        | Type   | Remarks  |
| ------------ | ------------------ | ------ | -------- |
| data.value   | Water level ratio  | number | Required |

#### config

| Configuration Item | Description           | Type   | Remarks                                        |
| ------------------ | --------------------- | ------ | ---------------------------------------------- |
| itemColor          | Water item color      | string | -                                              |
| labelColor         | Text color            | string | -                                              |
| shadowColor        | Shadow background color | string | -                                              |
| backgroundColor    | Solid background color | string | Takes priority over shadow background color     |
| borderColor        | Outline color         | string | Default is not displayed                        |
| borderDistance     | Outline distance      | number | Default is 8                                    |
| itemNum            | Number of water items | number | Default is 1                                    |
| scale              | Water scale ratio     | number | Default is 1. A value close to 100% may not be visually appealing. You can set a smaller value to reduce the height of the water surface. |