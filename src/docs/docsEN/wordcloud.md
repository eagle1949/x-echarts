# wordcloud


#### style1

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
                    name: 'supplier01',
                    value: 200
                },
                {
                    name: 'supplier02',
                    value: 181
                },
                {
                    name: 'supplier03',
                    value: 386
                },
                {
                    name: 'supplier04',
                    value: 155
                },
                {
                    name: 'supplier05',
                    value: 467
                },
                {
                    name: 'supplier06',
                    value: 244
                },
                {
                    name: 'supplier07',
                    value: 898
                },
                {
                    name: 'supplier08',
                    value: 484
                },
                {
                    name: 'supplier09',
                    value: 112
                },
                {
                    name: 'supplier10',
                    value: 465
                },
                {
                    name: 'supplier11',
                    value: 447
                },
                {
                    name: 'supplier12',
                    value: 582
                },
                {
                    name: 'supplier13',
                    value: 555
                },
                {
                    name: 'supplier14',
                    value: 550
                },
                {
                    name: 'supplier15',
                    value: 462
                }
            ]
      }
    }
  }
</script>
</script>



#### style2

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
                    name: 'supplier01',
                    value: 200
                },
                {
                    name: 'supplier02',
                    value: 181
                },
                {
                    name: 'supplier03',
                    value: 386
                },
                {
                    name: 'supplier04',
                    value: 155
                },
                {
                    name: 'supplier05',
                    value: 467
                },
                {
                    name: 'supplier06',
                    value: 244
                },
                {
                    name: 'supplier07',
                    value: 898
                },
                {
                    name: 'supplier08',
                    value: 484
                },
                {
                    name: 'supplier09',
                    value: 112
                },
                {
                    name: 'supplier10',
                    value: 465
                },
                {
                    name: 'supplier11',
                    value: 447
                },
                {
                    name: 'supplier12',
                    value: 582
                },
                {
                    name: 'supplier13',
                    value: 555
                },
                {
                    name: 'supplier14',
                    value: 550
                },
                {
                    name: 'supplier15',
                    value: 462
                }
            ]
      }
    }
  }
</script>
</script>



#### data

| Data Property | Description | Type | Remarks |
| --- | --- | --- | --- |
| data[i].name | Name of the data item | string | Required |
| data[i].value | Data value | number | Required |

#### config

| Configuration Option | Description | Type | Remarks |
| --- | --- | --- | --- |
| showShape | Shape visibility | array | false for the first type, true for the second type (circle) |