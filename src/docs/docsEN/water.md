# 水环境业务example

#### 水质分类构成  
参考说明：[饼图](/pie)
<vuep template="#simple_1"></vuep>
<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-pie business="waterGrades" :data="data" style="width: 400px; height: 300px;"></e-pie>
</template>

<script>
  export default {
    data () {
      return {
        data: [
            { name: 'Ⅰ', value: 5 },
            { name: 'Ⅱ', value: 5 },
            { name: 'Ⅲ', value: 30 },
            { name: 'Ⅳ', value: 20 },
            { name: 'Ⅴ', value: 10 },
            { name: '劣Ⅴ', value: 2 }
        ]
      }
    }
  }
</script>
</script>

#### 圆环图
<vuep template="#simple-pie_2_dark"></vuep>
<script v-pre type="text/x-template" id="simple-pie_2_dark">
<template>
    <div>
		<!-- 圆环图 -->
		<e-pie
			:data="pieData"
			:config="{
				
				title: 'total\n300',
				type: 'ring'
			}"
			style="width: 400px;height: 300px;"
		></e-pie>
	</div>
    
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
            { name: 'Ⅰ', value: 5 },
            { name: 'Ⅱ', value: 5 },
            { name: 'Ⅲ', value: 30 },
            { name: 'Ⅳ', value: 20 },
            { name: 'Ⅴ', value: 10 },
            { name: '劣Ⅴ', value: 2 }
        ]
      }
    }
  }
</script>
</script>


#### 玫瑰图
<vuep template="#simple-pie_1_dark1"></vuep>
<script v-pre type="text/x-template" id="simple-pie_1_dark1">
<template>
    <div>		
		<!-- 玫瑰图 -->
		<e-pie
			:data="pieData"
			:config="{
				
				type: 'rose'
			}"
			style="width: 400px;height: 300px;"
		></e-pie>
	</div>
    
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
            { name: 'Ⅰ', value: 5 },
            { name: 'Ⅱ', value: 5 },
            { name: 'Ⅲ', value: 30 },
            { name: 'Ⅳ', value: 20 },
            { name: 'Ⅴ', value: 10 },
            { name: '劣Ⅴ', value: 2 }
        ]
      }
    }
  }
</script>
</script>



#### 横向图例
<vuep template="#simple-pie_tl1"></vuep>
<script v-pre type="text/x-template" id="simple-pie_tl1">
<template>
	<div>
		<e-pie
			:data="pieData"
			:config="{
				
				showLegend: true
			}"
			style="width: 500px;height: 300px;"
		></e-pie>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
            { name: 'Ⅰ', value: 5 },
            { name: 'Ⅱ', value: 5 },
            { name: 'Ⅲ', value: 30 },
            { name: 'Ⅳ', value: 20 },
            { name: 'Ⅴ', value: 10 },
            { name: '劣Ⅴ', value: 2 }
        ]
      }
    }
  }
</script>
</script>


#### 纵向图例
<vuep template="#simple-pie_tl1"></vuep>
<script v-pre type="text/x-template" id="simple-pie_tl1">
<template>
	<div>
		<e-pie
			:data="pieData"
			:config="{
				
				showLegend: true,
				legendOrient: 'vertical'
			}"
			style="width: 500px;height: 300px;"
		></e-pie>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        pieData: [
            { name: 'Ⅰ', value: 5 },
            { name: 'Ⅱ', value: 5 },
            { name: 'Ⅲ', value: 30 },
            { name: 'Ⅳ', value: 20 },
            { name: 'Ⅴ', value: 10 },
            { name: '劣Ⅴ', value: 2 }
        ]
      }
    }
  }
</script>
</script>


#### 水质分类构成 合并Ⅰ~Ⅱ类
参考说明：[饼图](/pie)
<vuep template="#simple_2"></vuep>
<script v-pre type="text/x-template" id="simple_2">
<template>
    <e-pie business="merge1n2WaterGrades" :data="data" style="width: 400px; height: 300px;"></e-pie>
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
        data: [
            { name: 'Ⅰ~Ⅱ', value: 10 },
            { name: 'Ⅲ', value: 30 },
            { name: 'Ⅳ', value: 20 },
            { name: 'Ⅴ', value: 10 },
            { name: '劣Ⅴ', value: 2 }
        ]
      }
    }
  }
</script>
</script>

#### 水质富营养状态分类构成
参考说明：[饼图](/pie)
<vuep template="#simple_3"></vuep>
<script v-pre type="text/x-template" id="simple_3">
<template>
    <e-pie business="eutrophicationColor" :data="data" style="width: 400px; height: 300px;"></e-pie>
</template>

<script>
  export default {
    data () {
      return {
        data: [
            { name: '贫营养', value: 10 },
            { name: '中营养', value: 30 },
            { name: '轻度富营养', value: 20 },
            { name: '中度富营养', value: 10 },
            { name: '重度富营养', value: 2 }
        ]
      }
    }
  }
</script>
</script>

#### 水质分类构成变化
参考说明：[堆叠图](/stackBar)
<vuep template="#simple_4"></vuep>
<script v-pre type="text/x-template" id="simple_4">
<template>
    <e-stack-bar
        style="width: 500px;height: 500px;"
        :data="data"
        :config="{
            color: 'waterGradesColor'
        }"
    ></e-stack-bar>

</template>

<script>
  export default {
    data () {
      return {
        data: {
            xAxis: ['2015', '2016', '2017'],
            series: [
                { name: 'Ⅰ', data: [20, 25, 30] },
                { name: 'Ⅱ', data: [20, 25, 30] },
                { name: 'Ⅲ', data: [60, 50, 30] },
                { name: 'Ⅳ', data: [0, 0, 10] },
                { name: 'Ⅴ', data: [0, 0, 0] },
                { name: '劣Ⅴ', data: [0, 0, 0] },
            ]
        }
      }
    }
  }
</script>
</script>

#### 水质构成热力图
参考说明：[热力图](/heatmap)
<vuep template="#simple_5"></vuep>
<script v-pre type="text/x-template" id="simple_5">
<template>
    <e-heatmap
        style="width: 500px;height: 600px;"
        business="waterGrades"
        :data="data"
    ></e-heatmap>

</template>

<script>
  export default {
    data () {
      return {
        data: {
          xAxis: ['2015', '2016', '2017', '2018', '2019'],
          series: [
              { name: 'guangzhou', data: [1, 2, 3, 4, 5] },
              { name: '深圳市', data: [1, 2, 3, 4, 5] },
              { name: '东莞市', data: [1, 6, 3, 4, 5] },
              { name: 'guangzhou', data: [1, 2, 3, 4, 5] },
              { name: 'guangzhou', data: [3, 2, 3, 4, 5] },
              { name: 'guangzhou', data: [3, 2, 3, 4, 5] },
              { name: 'guangzhou', data: [1, 2, 3, 4, 5] },
              { name: 'guangzhou', data: [1, 2, 3, 4, 5] },
              { name: 'guangzhou', data: [1, 2, 3, 4, 5] },
              { name: '中山市', data: [6, 2, 3, 4, 5] }
          ]
        }
      }
    }
  }
</script>
</script>

#### 水质指数排名
参考说明：[stripeBar](/stripeBar)
<vuep template="#simple_6"></vuep>
<script v-pre type="text/x-template" id="simple_6">
<template>
    <e-stripe-bar
        style="width: 500px;height: 500px;"
        :data="data"
    ></e-stripe-bar>

</template>

<script>
  export default {
    data () {
      return {
        data: [
          { name: '广州', rank: 1, value: 2.5 },
          { name: '广州', rank: 2, value: 2.8 },
          { name: '广州', rank: 3, value: 2.9 },
          { name: '广州', rank: 4, value: 3.1 },
          { name: '广州', rank: 5, value: 3.5 },
          { name: '广州', rank: 6, value: 3.8 },
          { name: '广州', rank: 7, value: 4.5 },
          { name: '广州', rank: 8, value: 4.8 },
          { name: '广州', rank: 9, value: 5.6 },
          { name: '广州', rank: 10, value: 5.8 },
          { name: '广州', rank: 11, value: 5.8 },
          { name: '广州', rank: 12, value: 6.2 }
        ]
      }
    }
  }
</script>
</script>


#### 水质达标率
参考说明：[guage](/guage)
<vuep template="#simple_7"></vuep>
<script v-pre type="text/x-template" id="simple_7">
<template>
    <e-dash-board
        style="width: 500px;height: 500px;"
        :data="data"
        :config="config"
    ></e-dash-board>

</template>

<script>
  export default {
    data () {
      return {
        data: { value: 80 },
        config:{
                color: '#27e4ae'
            }
      }
    }
  }
</script>
</script>

#### liquidFill
参考说明：[liquidFill](/liquidFill)
<vuep template="#simple_8"></vuep>
<script v-pre type="text/x-template" id="simple_8">
<template>
    <e-water-polo
            style="width: 300px;height: 300px;"
            :data="{ value: 0.56 }"
            :config="{
                color: '#68cffe'
            }"
        ></e-water-polo>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
</script>
 