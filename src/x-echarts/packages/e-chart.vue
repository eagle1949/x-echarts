<!-- @format -->

<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import mixin from '../src/util/mixin';
import CONFIG from '../src/config/config';
import lodash from 'lodash';
let _merge = lodash.merge;
// let _merge =  function(...objects) {  
//     let result = {};  
  
//     objects.forEach(obj => {  
//         for (let key in obj) {  
//             if (obj.hasOwnProperty(key)) {  
//                 result[key] = obj[key];  
//             }  
//         }  
//     });  
  
//     return result;  
// };
import {
    AXIS_STYLE,
    LEGEND,
    TOOLTIP,
    getColor,
    getFontColor
} from '../src/util/nomalChart';
import util from '../src/util/util';
export default {
    name: 'EChart',
    mixins: [mixin],
    methods: {
        initChart() {
            //let option = this.option;
            // let option = JSON.parse(JSON.stringify(this.option));
            let option = util.deepClone(this.option);
            if (option.legend) {
                option.legend = _merge(LEGEND(), option.legend);
            }

            option.color = option.color || getColor();
            option.textStyle = {
                color: getFontColor(),
                fontSize: CONFIG.FONT_S
            };

            //当配置项有坐标轴时， 取坐标轴的统一样式， 并使统一样式优先级低于设置样式
            let xAxis = option.xAxis;
            if (option.xAxis) {
                if (xAxis.constructor === Array) {
                    xAxis.forEach((v, i) => {
                        xAxis[i] = _merge({}, AXIS_STYLE(), v);
                    });
                } else {
                    xAxis = _merge(AXIS_STYLE(), xAxis);
                }
            }
            option.xAxis = xAxis;

            let yAxis = option.yAxis;
            if (option.yAxis) {
                if (yAxis.constructor === Array) {
                    yAxis.forEach((v, i) => {
                        yAxis[i] = _merge({}, AXIS_STYLE(), v);
                    });
                } else {
                    yAxis = _merge({}, AXIS_STYLE(), yAxis);
                }
            }
            option.yAxis = yAxis;

            if (option.series) {
                option.series.forEach((v) => {
                    if (v.type === 'bar' && !v.barWidth && !v.barMaxWidth) {
                        v.barMaxWidth = 20;
                    }
                });
            }

            if (option.tooltip) {
                option.tooltip = {
                    ...TOOLTIP(),
                    ...option.tooltip
                };
            }
            return option;
        }
    }
};
</script>

<style scoped></style>
