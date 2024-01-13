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

| Data Property | Description | Type | Remarks |
| --- | --- | --- | --- |
| data[i].name | Name of the data item | string | Required |
| data[i].value | Data value | number | Required |

#### config 配置项

| Configuration Option | Description | Type | Remarks |
| --- | --- | --- | --- |
| showShape | Shape visibility | array | false for the first type, true for the second type (circle) |