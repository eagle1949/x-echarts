# Sankey

#### example
<vuep template="#simple"></vuep>

<script v-pre type="text/x-template" id="simple">
<template>
    <e-sankey :data="data" style="width: 600px; height: 800px;"></e-sankey>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {
              name: '广州',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '深圳',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '东莞',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '佛山',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '中山',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '清远',
              items: [
                  { name: '氨氮', value: '5' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          }
      ]
      }
    }
  }
</script>
</script>

#### set color
<vuep template="#simple_1"></vuep>

<script v-pre type="text/x-template" id="simple_1">
<template>
    <e-sankey 
        :config="{
            leftColor: ['#68cffe', '#49a1fe', '#37b70c'],
            rightColor: ['#fd77da', '#dea700']
        }"
        :data="data" 
        style="width: 600px; height: 800px;"
    ></e-sankey>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {
              name: '广州',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '深圳',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '东莞',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '佛山',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '中山',
              items: [
                  { name: '氨氮', value: '15' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          },
          {
              name: '清远',
              items: [
                  { name: '氨氮', value: '5' },
                  { name: 'COD', value: '25' },
                  { name: 'BOD', value: '5' }
              ]
          }
      ]
      }
    }
  }
</script>
</script>

#### data

| Data Item                        | Description          | Type   | Remarks  |
| -------------------------------- | -------------------- | ------ | -------- |
| data[i].name                     | Data item name       | string | Corresponds to the right-side data item. Required |
| data[i].items                    | Data array           | array  | Corresponds to the left-side data. Required |
| data[i].items[i].name            | Data item name       | string | Corresponds to the left-side data item. Required |
| data[i].items[i].value           | Data value           | number | Corresponds to the data on both sides. Required |

#### config
    
| Configuration Item | Description                          | Type   | Remarks        |
| ------------------ | ------------------------------------ | ------ | -------------- |
| leftColor          | Color                                | array  | Color for the left-side items |
| rightColor         | Color                                | array  | Color for the right-side items |