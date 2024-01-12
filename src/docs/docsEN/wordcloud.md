# 词云


#### 样式1

<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-wordcloud
		:config="{
			showShape: false
		}"
		:data="data"
		style="width: 600px; height: 400px;"
	></e-wordcloud>
</template>

<script>
  export default {
    data () {
      return {
        data: [
                {
                    name: '供应商01',
                    value: 200
                },
                {
                    name: '供应商02',
                    value: 181
                },
                {
                    name: '供应商03',
                    value: 386
                },
                {
                    name: '供应商04',
                    value: 155
                },
                {
                    name: '供应商05',
                    value: 467
                },
                {
                    name: '供应商06',
                    value: 244
                },
                {
                    name: '供应商07',
                    value: 898
                },
                {
                    name: '供应商08',
                    value: 484
                },
                {
                    name: '供应商09',
                    value: 112
                },
                {
                    name: '供应商10',
                    value: 465
                },
                {
                    name: '供应商11',
                    value: 447
                },
                {
                    name: '供应商12',
                    value: 582
                },
                {
                    name: '供应商13',
                    value: 555
                },
                {
                    name: '供应商14',
                    value: 550
                },
                {
                    name: '供应商15',
                    value: 462
                }
            ]
      }
    }
  }
</script>
</script>



#### 样式2

<vuep template="#simple1"></vuep>

<script v-pre type="text/x-template" id="simple1">
<template>
    <e-wordcloud
		:config="{
			showShape: true
		}"
		:data="data"
		style="width: 600px; height: 400px;"
	></e-wordcloud>
</template>

<script>
  export default {
    data () {
      return {
        data: [
                {
                    name: '供应商01',
                    value: 200
                },
                {
                    name: '供应商02',
                    value: 181
                },
                {
                    name: '供应商03',
                    value: 386
                },
                {
                    name: '供应商04',
                    value: 155
                },
                {
                    name: '供应商05',
                    value: 467
                },
                {
                    name: '供应商06',
                    value: 244
                },
                {
                    name: '供应商07',
                    value: 898
                },
                {
                    name: '供应商08',
                    value: 484
                },
                {
                    name: '供应商09',
                    value: 112
                },
                {
                    name: '供应商10',
                    value: 465
                },
                {
                    name: '供应商11',
                    value: 447
                },
                {
                    name: '供应商12',
                    value: 582
                },
                {
                    name: '供应商13',
                    value: 555
                },
                {
                    name: '供应商14',
                    value: 550
                },
                {
                    name: '供应商15',
                    value: 462
                }
            ]
      }
    }
  }
</script>
</script>



#### data 数据

| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data[i].name | 数据项名称 | string | 必须 |
| data[i].value | 数据值 | number | 必须 |

#### config 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| showShape | 类型 | array | false 第一种类型，true第二种类型 （圆形） |