# Chart Properties

## Self owned attributes

The attributes of the chart itself, such as whether to display legend `showLegend` and form type `type`, are placed in `config`. The unique attributes of each chart are not exactly the same. Please refer to the specific chart configuration for specific parameters

## Public attributes

Each chart should be set with corresponding width and height
```
 <e-bar :data="data" style="width: 600px; height: 400px;"></e-bar>
```

| Configuration Item | Introduction | Type | Remarks |
| --- | --- | --- | --- |
| data | data | object | -
| config | Configuration items (each chart's own properties)  | object | -
| option | Replace Echarts default configuration | object | -
| show-option | Whether to print the configuration items for echarts (which can be viewed on the console) | boolean | false


