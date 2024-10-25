/** @format */

// import { FONT_S, FONT_M, FONT_L, COLOR } from '../config/config';
import CONFIG from '../config/config';

// import lodash from 'lodash';
// let _merge = lodash.merge;
// import imgSrc from '../images/nodata.png';

// import './lodash';
let _merge = function(...objects) {  
    let result = {};  
  
    objects.forEach(obj => {  
        for (let key in obj) {  
            if (obj.hasOwnProperty(key)) {  
                result[key] = obj[key];  
            }  
        }  
    });  
  
    return result;  
};;
// import imgSrc from '../images/nodata.png';
import util from './util';

// let echarts = require('echarts/lib/echarts');
import * as echarts from 'echarts';

// import * as echarts from 'echarts';
// require('echarts-liquidfill');
import 'echarts-liquidfill';

import 'echarts-wordcloud';


//修改配置样式
export const setChartConfig = (opt = {}) => {
    _merge(CONFIG, opt);
};

//坐标轴样式
export const AXIS_STYLE = () => {
    return {
        nameTextStyle: {
            color: getFontColor(),
            padding: [0, 0, -10, 0],
            fontSize: CONFIG.FONT_S
        },
        axisLabel: {
            color: getFontColor(),
            fontSize: CONFIG.FONT_S
        },
        axisTick: {
            /*  lineStyle: {
                color: getBorderColor(),
                width: 1
            }, */
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: getBorderColor(),
                width: 1
            },
            show: true
        }
    };
};

//图例
export const LEGEND = () => {
    return {
        top: 10,
        itemWidth: CONFIG.LEGEND_ICON_SIZE,
        itemHeight: CONFIG.LEGEND_ICON_SIZE,
        icon: CONFIG.LEGEND_ICON,
        // borderRadius: 0,
        // symbolKeepAspect: false,
        left: CONFIG.SHOW_TOOLBOX ? '10%' : 'center',
        padding: CONFIG.SHOW_TOOLBOX ? [0, 50, 0, 0] : 0,
        textStyle: {
            color: getFontColor(),
            fontSize: CONFIG.FONT_S,
			lineHeight: CONFIG.FONT_S,
			rich: {
				a: {
					// eslint-disable-next-line no-mixed-spaces-and-tabs
					verticalAlign: 'middle'
				},
			},
			padding:[0,-2,-3, 0]
        }
    };
};

//提示框
export const TOOLTIP = () => {
    return {
        backgroundColor: CONFIG.TOOLTIP_BG_COLOR,
        borderColor: CONFIG.TOOLTIP_BORDER_COLOR,
        textStyle: {
            color: CONFIG.TOOLTIP_FONT_COLOR
        }
    };
};

//获取颜色
export const getColor = (color) => {
    if (!color || color === 'normalColor') {
        //返回图表常规配色
        if (CONFIG.COLOR && CONFIG.COLOR.length) {
            return CONFIG.COLOR;
        }
        return CONFIG.THEME_COLOR === 'dark'
            ? CONFIG.COLOR_DARK
            : CONFIG.COLOR_LIGHT;
    } else if (typeof color === 'string' && CONFIG[color]) {
        //返回指定配色
        return CONFIG[color];
    } else {
        return color;
    }
};

//获取边线颜色
export const getBorderColor = () => {
    return CONFIG.BORDER_COLOR
        ? CONFIG.BORDER_COLOR
        : CONFIG.THEME_COLOR === 'dark'
        ? CONFIG.BORDER_COLOR_DARK
        : CONFIG.BORDER_COLOR_LIGHT;
};

//获取字体颜色
export const getFontColor = () => {
    return CONFIG.FONT_COLOR
        ? CONFIG.FONT_COLOR
        : CONFIG.THEME_COLOR === 'dark'
        ? CONFIG.FONT_COLOR_DARK
        : CONFIG.FONT_COLOR_LIGHT;
};

//十六进制颜色转为rgb颜色
const getColorRgb = (color = '#fff') => {
    if (typeof color !== 'string') {
        return color;
    }
    let pattern = /^#([0-9|a-f]{3}|[0-9|a-f]{6})$/;
    color = color.toLowerCase();
    if (pattern.test(color)) {
        if (color.length === 4) {
            // 将三位转换为六位
            color =
                '#' +
                color[1] +
                color[1] +
                color[2] +
                color[2] +
                color[3] +
                color[3];
        }
        //处理六位的颜色值
        let colorNew = [];
        for (let i = 1; i < 7; i += 2) {
            colorNew.push(parseInt('0x' + color.slice(i, i + 2)));
        }
        return colorNew;
        //return 'RGB(' + colorNew.join(',') + ')';
    } else if (color.indexOf('rgb') > -1) {
        color = color.replace(/[rgba()]/g, '');
        return color.split(',').slice(0, 3);
    }
    return [];
};

//颜色加透明度
/* const getOpacityColor = (color, opacity=1)=> {
    let colorArr = getColorRgb(color);
    return `rgba(${colorArr.concat(opacity).join(',')})`;
} */
//颜色减淡 或加深
const getChangeColor = (color, level = 0) => {
    //level -1~0减淡  0~1加深
    let colorArr = getColorRgb(color);
    if (level > 0) {
        for (let i = 0; i < 3; i++) {
            colorArr[i] = Math.floor(colorArr[i] * (1 - level));
        }
    } else {
        level = -level;
        for (let i = 0; i < 3; i++) {
            colorArr[i] = Math.floor((255 - colorArr[i]) * level + colorArr[i]);
        }
    }
    return `rgb(${colorArr.join(',')})`;
};

//获取象形柱状图的颜色
const getPictorialColor = (itemColor, pictorial) => {
    if (pictorial === 'diamond') {
        return {
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            type: 'linear',
            global: false,
            colorStops: [
                {
                    offset: 0,
                    color: itemColor
                },
                {
                    offset: 0.46,
                    color: itemColor
                },
                {
                    offset: 0.52,
                    color: getChangeColor(itemColor, 0.1) //颜色加深
                },
                {
                    offset: 1,
                    color: getChangeColor(itemColor, 0.2) //颜色加深
                }
            ]
        };
    } else if (pictorial === 'circle') {
        return {
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            type: 'linear',
            global: false,
            colorStops: [
                {
                    offset: 0,
                    color: itemColor
                },
                {
                    offset: 0.5,
                    color: itemColor
                },
                {
                    offset: 1,
                    color: getChangeColor(itemColor, 0.2) //颜色加深
                }
            ]
        };
    } else {
        return itemColor;
    }
};

//无数据时的配置项
export const getNoDataOption = () => {
    return {
       /*  graphic: [
            {
                type: 'image',
                id: 'logo',
                right: 'center',
                top: 'center',
                z: -10,
                bounding: 'raw',
                origin: [CONFIG.IMG_NONE_W / 2, CONFIG.IMG_NONE_H / 2],
                style: {
                    image: CONFIG.IMG_NONE,
                    width: CONFIG.IMG_NONE_W,
                    height: CONFIG.IMG_NONE_H
                },
                textContent: {
                    style: {
                        position: 'insideBottom',
                        text: CONFIG.TEXT_NONE,
                        fill: getFontColor(),
                        font: CONFIG.FONT_S + 'px sans-serif',
                        opacity: .8,
                        padding: 10
                    }
                },
                textConfig: {
                    position: 'bottom'
                }
            }
        ] */
    };
};

/**
 * 标准线
 *
 * @param {[]} data  标准线相关数据
 * @param {Object} [data[i].name] 标准线名称
 * @param {String} [data[i].value]    标准线对应数值
 * @param {Boolean} [data[i].color]    标准线对应颜色
 * @return {Object} [option] 标准线配置项
 */
const getMarkLine = (data) => {
    let lines = [];
    data.forEach((v) => {
        lines.push({
            name: v.name,
            yAxis: v.value,
            itemStyle: {
                color: v.color || '#f00'
            }
        });
    });
    let markLine = {
        animation: false,
        symbolSize: 0,
        linStyle: {
            type: 'dotted',
            width: 2
        },
        data: lines,
        label: {
                show: true,
                color: getFontColor(),
                formatter: '{b}'
        }
    };
    return markLine;
};

/**
 * 饼图
 *
 * @param {[]} data   标题的series数据
 * @param {Object} configObj
 * @param {Object} [configObj.el] 图表绑定的dom元素，不传时返回option配置项
 * @param {String} [configObj.color]    颜色
 * @param {Boolean} [configObj.showLegend=false]    是否显示图例
 * @param {Boolean} [configObj.showLabel=true]    是否显示线条文字
 * @param {String} [configObj.title]    中间的标题
 * @param {String} [configObj.showNullLabel]    是否显示无数据项的连线标签 默认 false
 * @param {String} [configObj.subtext]    标题 一般放数值
 * @param {String} [configObj.type='circle']     半径  实心圆circle， 圆环ring  玫瑰图rose
 * @param {Object} [opt]   自定义图表option中的属性
 * @return {Object} [option] option配置项
 */
export const renderPie = (data, configObj, opt) => {
    if (!data || data.length === 0) {
        return getNoDataOption();
    }
    //避免修改原data值
    data = JSON.parse(JSON.stringify(data));

    configObj.showLabel = configObj.showLabel !== false;

    let radius = configObj.radius;
    let radius_ = 0;
    let center = configObj.center;
    if (!center) {
        center = [configObj.legendOrient === 'vertical' ? '40%' : '50%', '50%'];
    }

    //半径
    if (!radius) {
        radius = configObj.type === 'ring' ? ['35%', '60%'] : '60%';
        radius_ = configObj.type === 'ring' ? ['35%', '40%'] : '0';
    } else if (radius.constructor === Array && radius[1]) {
        radius_ = [radius[0], parseFloat(radius[0]) + 5 + '%'];
    }


	
	

    let legendDataObj = {};
    //无数据的部分不显示label和连线 图例
    data.forEach((v, i) => {
        legendDataObj[v.name] = v.legendName;
        if (v && (!v.value || isNaN(v.value))) {
            data[i].value = 0;
            if (!configObj.showNullLabel) {
                data[i].label = {
                    show: false
                };
                data[i].labelLine = {
                    show: false
                };
            }
        }
    });

    let legend = {
        show: configObj.showLegend,
        ...LEGEND(),
        formatter: function (name) {
            return legendDataObj[name] || name;
        },
        textStyle: {
            color: getFontColor(),
            ...configObj.legendTextStyle
        }
    };

    if (configObj.legendOrient === 'vertical') {
        legend.left = 'auto';
        legend.right = '5%';
        legend.top = 'center';
        legend.orient = 'vertical';
    }
    let option = {
        textStyle: {
            color: null //避免全局字体颜色覆盖饼图颜色
        },
        legend,
        /* title: {
            left: 'center',
            top: 'center',
            text: configObj.title,
            subtext: configObj.subtext,
            textStyle: {
                lineHeight: CONFIG.FONT_L,
                color: CONFIG.FONT_COLOR,
                fontWeight: 400
            },
            subtextStyle: {
                fontSize: CONFIG.FONT_L
            }
        }, */
        color: getColor(configObj.color),
        tooltip: {
            ...TOOLTIP(),
            formatter: configObj.labelFormatter
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: radius,
                roseType: configObj.type === 'rose',
                center: center,
                label: {
                    show: configObj.showLabel,
                    color: getFontColor(),
                    formatter: configObj.labelFormatter
                },
                itemStyle: {
                        //shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 0
                },
                labelLine: {
                    show: configObj.showLabel
                },
                data: data
            }
        ]
    };


	// 分隔饼图
	let isShowSplit = configObj.isShowSplit;
	if(isShowSplit){
		option.series[0].itemStyle =  {
			borderWidth: 3,
			borderColor: '#fff'
		}
	}



    if (configObj.title || configObj.type === 'ring') {
        //为了标题始终在圆环中间，使用饼图的label显示标题
        option.series.push({
            name: '',
            type: 'pie',
            center: center,
            silent: true,
            data: [{ name: '', value: 100 }],
            radius: radius_,
            label: {
                position: 'center',
                formatter: configObj.title,
                fontSize: CONFIG.FONT_M,
                lineHeight: CONFIG.FONT_M * 1.4,
                color: getFontColor()
            },
            itemStyle: {
                color:
                    configObj.isShowInnerShadow !== false
                        ? 'rgba(0,0,0,0.3)'
                        : 'rgba(0,0,0,0)'
            },
            z: 10
        });
    }
    /*  if (configObj.showLabel) {
        option.series[0].label = {
            show: true,
            color: CONFIG.FONT_COLOR,
            formatter: configObj.labelFormatter
        };
    } */

    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 堆叠图
 * @param {Object} data 图表数据 必须,
 * @param {[]} data.xAxis x轴
 * @param {[]} data.yAxis y轴(与data.xAxis二选一)
 * @param {[]} data.series 必须
 * @param {Object} configObj 配置项 可选
 * @param configObj.el 图表绑定的dom元素 可选
 * @param configObj.color 颜色 可选
 * @param {String} configObj.unit  数值单位 可选 默认%
 * @param {Object}  opt 自定义图表option中的属性 可选
 * @return {Object} 图表配置项
 * */
export const renderStackBar = (data, configObj, opt) => {
    if (!data || !data.series || data.series.length === 0) {
        return getNoDataOption();
    }

    let unit = configObj.unit || '';
    let barWidth = configObj.barWidth || 20;
    let legend = [];
    data.series.map((v) => {
        legend.push(v.name);
        v.stack = configObj.include ? '' : 'one';
        v.type = 'bar';
        v.barWidth = barWidth;
        v.barMaxWidth = '60%';
        v.barGap = configObj.include ? '-100%' : null;
    });

    //类目轴
    let categoryAxis = {
        ...AXIS_STYLE(),
        type: 'category',
        data: data.xAxis || data.yAxis || null
    };
    categoryAxis.axisLine.show = !data.yAxis; //y轴做类目轴时 不显示

    //数值轴
    let valueAxis = {
        ...AXIS_STYLE(),
        type: 'value',
        name: unit,
        nameTextStyle: {
            padding: [0, 20, 2, 0]
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: !data.yAxis, //y轴做类目轴时 不显示
            lineStyle: {
                color: getBorderColor(),
                width: 1,
                type: 'dashed'
            }
        }
    };

    let option = {
        tooltip: {
            ...TOOLTIP(),
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            }
        },
        grid: CONFIG.GRID,
        color: getColor(configObj.color),
        legend: LEGEND(),
        yAxis: data.yAxis ? categoryAxis : valueAxis,
        xAxis: data.xAxis ? categoryAxis : valueAxis,
        series: data.series
    };

    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 象形堆叠图
 * @param {Object} data 图表数据 必须,
 * @param {[]} data.xAxis x轴
 * @param {[]} data.yAxis y轴(与data.xAxis二选一)
 * @param {[]} data.series 必须
 * @param {Object} configObj 配置项 可选
 * @param configObj.el 图表绑定的dom元素 可选
 * @param configObj.color 颜色 可选
 * @param {String} configObj.unit  数值单位 可选 默认%
 * @param {Object}  opt 自定义图表option中的属性 可选
 * @return {Object} 图表配置项
 * */
export const renderPictorialStackBar = (data, configObj, opt) => {
    if (
        !data ||
        !data.xAxis ||
        !data.xAxis.length ||
        !data.series ||
        !data.series.length
    ) {
        return getNoDataOption();
    }

    let colorArr = getColor(configObj.color);
    let barWidth = configObj.barWidth || 20;
    let minArr = data.xAxis.map(() => {
        return 1;
    });
    let len = data.series.length;
    let series = [];
    let legendData = [];

    let unit = configObj.unit || '';
    let sumArr = data.xAxis.map(() => {
        return 0;
    });
    data.series.forEach((s, i) => {
        let color = colorArr[i] || colorArr[0];
        let color_ = colorArr[i - 1] || colorArr[0];
        let barColor =
            configObj.pictorial === 'diamond'
                ? getPictorialColor(color, configObj.pictorial)
                : color;
        let n = i + 1;
        legendData.push({
            name: s.name,
            itemStyle: {
                color: color
            }
        });

        if (configObj.include) {
            series.push(
                {
                    //柱子
                    name: s.name,
                    data: s.data,
                    type: 'bar',
                    barMaxWidth: 'auto',
                    barWidth: barWidth,
                    itemStyle: {
                        color: barColor
                        // opacity: 0.9
                    },
                    barMinHeight: 1,
                    z: 2 * n,
                    barGap: '-100%'
                },
                {
                    //柱子的底部图标
                    name: s.name,
                    data: minArr,
                    silent: true,
                    type: 'pictorialBar',
                    barMaxWidth: '20',
                    symbol: configObj.pictorial,
                    symbolOffset: [0, '50%'],
                    symbolSize: [barWidth, barWidth / 2],
                    itemStyle: {
                        color: barColor
                    },

                    z: 2 * n,
                    tooltip: {
                        show: false
                    }
                },
                {
                    //柱子的顶部图标
                    name: s.name,
                    data: s.data,
                    type: 'pictorialBar',
                    barMaxWidth: '20',
                    symbolPosition: 'end',
                    symbol: configObj.pictorial,
                    symbolOffset: [0, '-50%'],
                    symbolSize: [barWidth, barWidth / 2],
                    z: i > 0 && len > 1 ? 3 * n : 99,
                    itemStyle: {
                        // color: '#19a0fb'
                        /*  color:
                            i > 0 && len > 1 && configObj.pictorial === "diamond"
                                ? getPictorialColor(color_, configObj.pictorial)
                                : getChangeColor(color_, 0.1), */
                        color:
                            i > 0 &&
                            len > 1 &&
                            configObj.pictorial === 'diamond'
                                ? getPictorialColor(color_, configObj.pictorial)
                                : i > 0 && len > 1
                                ? color_
                                : getChangeColor(color_, 0.1)
                    },
                    barMinHeight: 1,
                    silent: true,
                    tooltip: {
                        show: false
                    }
                }
            );
        } else {
            // let lastArr = data.series[i - 1] ? data.series[i - 1].data : minArr
            let lastSum = sumArr;
            sumArr = s.data.map((v, idx) => {
                let n = isNaN(v) ? 0 : Number(v);
                return sumArr[idx] + n;
            });

            //堆叠 底部只要一个 底部图标需要求和
            series.push(
                {
                    //柱子
                    name: s.name,
                    data: s.data,
                    type: 'bar',
                    barMaxWidth: 'auto',
                    barWidth: barWidth,
                    itemStyle: {
                        color: barColor
                    },
                    barMinHeight: 1,
                    z: 2 * n,
                    stack: 'one'
                },
                {
                    //柱子的底部图标
                    name: s.name,
                    data: lastSum,
                    symbolPosition: 'end',
                    silent: true,
                    type: 'pictorialBar',
                    barMaxWidth: '20',
                    symbol: configObj.pictorial,
                    symbolOffset: [0, '-50%'],
                    symbolSize: [barWidth, barWidth / 2],
                    barMinHeight: 1,
                    itemStyle: {
                        color: barColor
                    },

                    z: 2 * n,
                    tooltip: {
                        show: false
                    }
                },
                {
                    //柱子的顶部图标
                    name: s.name,
                    data: sumArr,
                    type: 'pictorialBar',
                    barMaxWidth: '20',
                    symbolPosition: 'end',
                    symbol: configObj.pictorial,
                    symbolOffset: [0, '-50%'],
                    symbolSize: [barWidth, barWidth / 2],
                    z: 2 * n + 1,
                    barMinHeight: 1,
                    itemStyle: {
                        color: getChangeColor(color, 0.1)
                    },
                    silent: true,
                    tooltip: {
                        show: false
                    }
                }
            );
        }
    });

    // console.log(series);

    //类目轴
    let categoryAxis = {
        ...AXIS_STYLE(),
        type: 'category',
        data: data.xAxis || data.yAxis || null
    };
    categoryAxis.axisLine.show = !data.yAxis; //y轴做类目轴时 不显示
    if (configObj.pictorial) {
        categoryAxis.axisLabel.textStyle = {
            padding: [5, 0, 0, 0]
        };
    }

    //数值轴
    let valueAxis = {
        ...AXIS_STYLE(),
        type: 'value',
        name: unit,
        nameTextStyle: {
            padding: [0, 20, 2, 0]
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: !data.yAxis, //y轴做类目轴时 不显示
            lineStyle: {
                color: getBorderColor(),
                width: 1,
                // opacity: 0.6,
                type: 'dashed'
            }
        }
    };

    let option = {
        tooltip: {
            ...TOOLTIP(),
            trigger: 'axis'
        },
        grid: CONFIG.GRID,
        color: getColor(configObj.color),
        legend: {
            ...LEGEND(),
            data: legendData,
            selectedMode: !configObj.pictorial
        },
        yAxis: data.yAxis ? categoryAxis : valueAxis,
        xAxis: data.xAxis ? categoryAxis : valueAxis,
        series: series
    };

    if (opt) {
        _merge(option, opt);
    }

    // debugger

    return option;
};

/**
 * 条纹图
 * data  Array  图表数据 必须,
 * configObj  Object
 *   属性如下：
 *   el 图表绑定的dom元素 可选 不传时返回option配置项
 *   color  Array  颜色 可选
 *   unit   String  数值单位 可选
 *   barWidth Number 柱宽 可选
 * opt Object  自定义图表option中的属性
 * */
export const renderStripeBar = (data, configObj, opt) => {
    if (!data || data.length === 0) {
        return getNoDataOption();
    }

    let seriesData = [];
    let unit = configObj.unit || '';
    let max = 0;
    let yAxis = [];
    let barWidth = configObj.barWidth || 10;
    let color = configObj.color || [
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
                {
                    offset: 0,
                    color: '#459ded' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: '#20dbe7' // 100% 处的颜色
                }
            ]
        },
        '#eee'
    ];
    data.forEach((v) => {
        if (v.rank !== undefined) {
            let rank = v.rank;
            yAxis.push(rank + '   ' + v.name);
            seriesData.push(v.value);
        } else {
            yAxis.push(v.name);
            seriesData.push(v.value || 0);
        }
    });
    max = Math.max(...seriesData);
    max = max && !isNaN(max) ? max : 100;

    let option = {
        grid: {
            containLabel: true,
            top: 40,
            right: 80,
            left: 10,
            bottom: 10
        },
        tooltip: {
            ...TOOLTIP()
        },
        yAxis: {
            type: 'category',
            data: yAxis,
            inverse: true,
            axisLabel: {
                textStyle: {
                    color: getFontColor(),
                    fontSize: CONFIG.FONT_S
                },
                interval: 0
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        xAxis: {
            show: false,
            max: max
        },
        series: [
            {
                type: 'bar',
                barWidth: barWidth,
                barGap: '-100%',
                data: seriesData.map(() => max), //每个值都取最大值
                itemStyle: {
                        barBorderRadius: barWidth / 2,
                        //borderColor: color[1],
                        color: color[1]
                },
                label: {
                    show:
                        configObj.showLabel ||
                        configObj.showLabel === undefined,
                    position: 'right',
                    color: getFontColor(),
                    padding: [0, 10],
                    formatter: function (o) {
                        let n = seriesData[o.dataIndex];
                        n = isNaN(n + '') ? '-' : n;
                        return n + unit;
                    }
                },
                silent: true
            },
            {
                type: 'bar',
                barGap: '-100%',
                barWidth: barWidth,
                data: seriesData,
                itemStyle: {
					barBorderRadius: 8,
					color: color[0],
					shadowBlur: 0,
					shadowColor: '#000'
                }
            }
        ]
    };

    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 条纹图样式2
 * data  Array  图表数据 必须,
 * configObj  Object
 *   属性如下：
 *   el 图表绑定的dom元素 可选 不传时返回option配置项
 *   color  Array  颜色 可选
 *   unit   String  数值单位 可选
 *   barWidth Number 柱宽 可选
 * opt Object  自定义图表option中的属性
 * */
export const renderStripeBar2 = (data, configObj, opt) => {
    if (!data || data.length === 0) {
        return getNoDataOption();
    }

    let seriesData = [];
    let unit = configObj.unit || '';
    let max = 0;
    let yAxis = [];
    let barWidth = configObj.barWidth || 10;
    data.forEach((v) => {
        if (v.rank !== undefined) {
            let rank = v.rank;
            yAxis.push(rank + '   ' + v.name);
            seriesData.push(v.value);
        } else {
            yAxis.push(v.name);
            seriesData.push(v.value || 0);
        }
    });
    max = Math.max(...seriesData);
    max = max && !isNaN(max) ? max : 100;

    let option = {
        color: getColor(configObj.color),
        grid: {
            containLabel: true,
            top: 40,
            right: 80,
            left: 10,
            bottom: 10
        },
        tooltip: {
            ...TOOLTIP()
        },
        yAxis: {
            type: 'category',
            data: yAxis,
            inverse: true,
            axisLabel: {
                textStyle: {
                    fontSize: CONFIG.FONT_S
                },
                interval: 0
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        xAxis: {
            show: false,
            max: max
        },
        series: [
            {
                type: 'pictorialBar',
                symbolClip: true,
                symbol: configObj.pictorial,
                symbolRepeat: 'fixed',
                symbolPosition: 'start',
                // symbol: 'image://' + pBar3,
                symbolBoundingData: max,
                // symbolOffset: [20, '0'],
                symbolSize: [barWidth * 0.4, barWidth],
                symbolRotate: configObj.symbolRotate,
                symbolMargin: barWidth * 0.3,
                label: {
                    show:
                        configObj.showLabel ||
                        configObj.showLabel === undefined,
                    color: getFontColor(),
                    verticalAlign: 'middle',
                    position: 'right',
                    fontWeight: '600',
                    fontSize: 16,
                    padding: [4, 0, 0, 10],
                    formatter: '{c}' + unit
                },
                data: seriesData
            }
        ]
    };

    if (opt) {
        _merge(option, opt);
    }

    return option;
};




/**
 * 条纹图样式3
 *   data  Array  图表数据 必须,
 *   configObj  Object
 *   属性如下：
 *   el 图表绑定的dom元素 可选 不传时返回option配置项
 *   color  Array  颜色 可选
 * 	 opt Object  自定义图表option中的属性
 * */
export const renderStripeBar3 = (data, configObj, opt) => {
    if (!data || data.length === 0) {
        return getNoDataOption();
    }

	// 新加的方法
	
	var defaultData = [];
	data.forEach(item=>{
		console.log(item);
		defaultData.push(item);
	})
	let getArrByKey = function(data, k) {
		let key = k || 'value';
		let res = [];
		if (data) {
			data.forEach(function (t) {
				res.push(t[key]);
			});
		}
		return res;
	};
	let getSymbolData = function(data) {
		let arr = [];
		for (var i = 0; i < data.length; i++) {
			arr.push({
				value: data[i].value,
				symbolPosition: 'end',
			});
		}
		return arr;
	};



    let seriesData = [];
    let max = 0;
    let yAxis = [];
    data.forEach((v) => {
        if (v.rank !== undefined) {
            let rank = v.rank;
            yAxis.push(rank + '   ' + v.name);
            seriesData.push(v.value);
        } else {
            yAxis.push(v.name);
            seriesData.push(v.value || 0);
        }
    });
    max = Math.max(...seriesData);
    max = max && !isNaN(max) ? max : 100;

    let option = {
        color: [
            {
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                type: 'linear',
                global: false,
                colorStops: [
                    {
                        offset: 0,
                        color: 'rgb(0,251,253,0)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(0,251,253,1)'
                    }
                ]
            }
        ],
        tooltip: {
            ...TOOLTIP()
        },
		grid: {
            containLabel: true,
            top: 40,
            right: 10,
            left: 40,
            bottom: 10
        },
        yAxis:[
			{
				triggerEvent: false,
				show: true,
				inverse: true,
				data: getArrByKey(data, 'name'),
				axisLine: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				axisLabel: {
					show: false,
					interval: 0,
					align: 'left',
					margin: 80,
					fontSize: CONFIG.FONT_S,
					formatter: function (value) {
						return '{title|' + value + '}';
					},
					rich: {
						title: {
							width: 165,
						},
					},
				},
			},
			{
				triggerEvent: false,
				show: true,
				inverse: true,
				data: getArrByKey(data, 'name'),
				axisLine: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
	
				axisLabel: {
					interval: 0,
					shadowOffsetX: '-40px',
					align: 'right',
					verticalAlign: 'bottom',
					lineHeight: 40,
					fontSize: CONFIG.FONT_S,
					formatter: function (value, index) {
						return (
							'' + data[index].value + '  ' 
						);
					},
					rich: {
						percentNumber: {
							color: '#ff8e2e',
						},
					},
				},
			},
		],
        xAxis: {
            show: false,
            max: max
        },
        series: [
			{
				name: 'XXX',
				type: 'pictorialBar',
				symbol:
					'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
				symbolSize: [50, 50],
				symbolOffset: [25, 0],
				z: 12,
				itemStyle: {
					color: '#fff',
				},
				data: getSymbolData(data),
			},
			{
				name: '背景',
				type: 'bar',
				barWidth: 10,
				barGap: '-100%',
				z: 1,
				data: defaultData,
				itemStyle: {
					color: '#0b2645',
					barBorderRadius: 10,
				},
			},
			{
				name: '条',
				type: 'bar',
				showBackground: true,
				// backgroundColor:'#fff',
				barBorderRadius: 30,
				yAxisIndex: 0,
				data: data,
				barWidth: 10,
				// align: left,
				itemStyle: {
					// color: [
					// 	{
					// 		x: 0,
					// 		y: 0,
					// 		x2: 1,
					// 		y2: 0,
					// 		type: 'linear',
					// 		global: false,
					// 		colorStops: [
					// 			{
					// 				offset: 0,
					// 				color: '#224059'
					// 			},
					// 			{
					// 				offset: 1,
					// 				color: '#4AF2F5'
					// 			}
					// 		]
					// 	}
					// ]
					// normal: {
                    //     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
					// 		{
					// 			offset: 0,
					// 			color: 'rgb(0,251,253,0)',
					// 		},
					// 		{
					// 			offset: 1,
					// 			color: 'rgb(0,251,253,1)',
					// 		},
					// 	]),
					// 	barBorderRadius: 10,
                    // },
					// barBorderRadius: 4,
				},
				label: {
					color: '#fff',
					show: true,
					position: [0, '-20px'],
					textStyle: {
						fontSize: 16,
					},
					formatter: function (a) {
						return a.name;
					},
				},
			},
        ]
    };

    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 圆柱图
 * data  Object  图表数据 必须,
 *   xAxis 必须
 *   data 必须
 * configObj  Object
 *   属性如下：
 *   el 图表绑定的dom元素 可选 不传时返回option配置项
 *   color  Array  颜色 可选
 *   unit   String  数值单位 可选
 *   barWidth Number 柱宽 可选
 * opt Object  自定义图表option中的属性
 * */
export const renderCylinderBar = (data, configObj, opt) => {
    if (!data || !data.data || data.data.length === 0) {
        return getNoDataOption();
    }

    let barWidth = configObj.barWidth || 30;
    let color = getColor(configObj.color);
    let seriesData = [];
    if (configObj.color) {
        data.data.forEach((v, i) => {
            seriesData.push({
                value: v,
                itemStyle: {
                    color: color[i] || color[0]
                }
            });
        });
    } else {
        seriesData = data.data;
    }
    let option = {
        color: color.slice(0, 1),
        grid: {
            containLabel: true,
            left: 0
        },
        xAxis: {
            type: 'category',
            data: data.xAxis,
            offset: 5,
            axisLabel: {
                interval: 0,
                textStyle: {
                    fontSize: CONFIG.FONT_S
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            show: false
        },
        series: [
            {
                type: 'pictorialBar',
                symbolSize: [barWidth, 10],
                symbolOffset: [0, -5],
                symbolPosition: 'end',
                z: 12,
                label: {
					textStyle: {
						color: getFontColor()
					},
					show: true,
					position: 'top',
					formatter: '{c}' + (configObj.unit || '')
                },
                silent: true,
                data: seriesData
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [barWidth, 10],
                symbolOffset: [0, 5],
                z: 12,
                data: seriesData,
                silent: true
            },
            {
                type: 'bar',
                /* itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                }, */
                barWidth: barWidth,
                silent: true,
                data: seriesData
            }
        ]
    };

    if (opt) {
        _merge(option, opt);
    }


    return option;
};



/**
 *   词云
 * 	 data  Object  图表数据 必须, 
 *   data 必须
 * 	 configObj  Object  showShape true false  两种不同形式
 *   属性如下：
 * 	 opt Object  自定义图表option中的属性
 * */
export const renderWordcloud = (data, configObj, opt) => {
    if (!data || data.length === 0) {
        return getNoDataOption();
    }

	let wordCloudColor = getColor();

    let option =   { 
		series: [
			{
				type: "wordCloud",
				textPadding: 0,
				autoSize: {
					enable: true,
					minSize: 6
				},
				textStyle: {
					color: () => {
						const r = Math.floor(
							Math.random() * wordCloudColor.length
						);
						return wordCloudColor[r];
					}
				},
				width: '100%',
				height: '100%',
				//数据
				data: data
			}
		]
	};

	// 是否变换展现形式
	if(configObj.showShape){
		option.series[0].shape = 'circle';
		option.series[0].gridSize = 20;
		option.series[0].sizeRange= [12, 50];
		option.series[0].rotationRange= [0, 0];	
		option.series[0].autoSize = {
			"enable": true,
			"minSize": 18
		}
	}

    if (opt) {
        _merge(option, opt);
    }

    return option;
};


/**
 * 彩虹图
 * configObj  Object
 *   属性如下：
 *   data  Object  图表数据 必须,
 *       包含xAxis或yAxis二选一
 *       series 必须
 *   el 图表绑定的dom元素 可选 不传时返回option配置项
 *   color  Arrway  颜色 可选
 *   unit   String  数值单位 可选 默认%
 * opt Object  自定义图表option中的属性
 * */

export const rainbowchart = (configObj, opt) => {
    let seriesd = [];
    let legend = [];
    let test_data = configObj.data;
    let maxData = Number(test_data[0].value);
    for (let i = 1; i < test_data.length; i++) {
        maxData =
            maxData < Number(test_data[i].value) ? test_data[i].value : maxData;
    }
    for (let j in test_data) {
        if (legend.indexOf(test_data[j]['name'] == -1)) {
            legend.push({
                icon: 'rect',
                name: test_data[j]['name']
            });
        }
        let ra = test_data.length - 1 - j;
        seriesd.push({
            name: test_data[j]['name'],
            type: 'pie',
            radius: [ra * 20 + 52 + '%', 43 + ra * 20 + '%'],
            itemStyle: {
				label: {
					show: false
				}
            },
            hoverAnimation: false,
            startAngle: 180,
            center: ['50%', '75%'],
            data: [
                {
                    value: test_data[j]['value'],
                    name: test_data[j]['name'],
                    label: {
                        postion: 'center'
                    }
                },
                {
                    value: maxData - test_data[j]['value'],
                    itemStyle: {
						color: 'rgba(203,203,203,0.5)',
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
                        emphasis: {
                            color: 'rgba(203,203,203,1)'
                        }
                    },
                    name: 'showtip_' + test_data[j]['value']
                },
                {
                    value: maxData,
                    itemStyle: {
                        // normal: {
						color: 'rgba(0,0,0,0)',
						label: {
							show: true
						},
						labelLine: {
							show: true
						},
                        // },
                        emphasis: {
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    name: 'hide'
                }
            ]
        });
    }

    let option = {
        //legend: {},
        maxnum: maxData,
        tooltip: {
            show: true,
            ...TOOLTIP(),
            formatter: function (params) {
                if (params.name === 'hide') {
                    return null;
                } else {
                    let num = '';
                    if (params.name.indexOf('showtip_') != -1) {
                        num = Number(params.name.split('_')[1]);
                    } else {
                        num = params.value;
                    }
                    if (Number(num) === 0)
                        return params.seriesName + ':' + Number(num) + '';
                    return (
                        params.seriesName +
                        ':' +
                        parseFloat((num * 100) / maxData).toFixed(2) +
                        '%'
                    );
                }
            }
        },

        grid: {
            top: 0,
            height: 0,
            left: '10%',
            right: '10%'
        },
        series: seriesd,
        color: getColor(configObj.color)
    };

    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 圆环图
 * configObj  Object
 *   属性如下：
 *   data  Object  图表数据 必须,
 *       包含xAxis或yAxis二选一
 *       series 必须
 *   el 图表绑定的dom元素 可选 不传时返回option配置项
 *   color  Arrway  颜色 可选
 *   unit   String  数值单位 可选 默认%
 * opt Object  自定义图表option中的属性
 * */

export const ringchart = (configObj, opt) => {
    let text = configObj.data.name;
    let val = configObj.data.value;
    let dataStyle = {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		shadowBlur: 0,
		shadowColor: 'rgba(40, 40, 40, 0.1)'
    };
    let placeHolderStyle = {
		color: configObj.color ? getColor(configObj.color[0]) : '#78b4ff', // 未完成的圆环的颜色
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
        emphasis: {
            color: configObj.color ? getColor(configObj.color[0]) : '#78b4ff' // 未完成的圆环的颜色
        }
    };

    let option = {
        title: {
            text: text,
            x: 'center',
            y: 'center',
            subtext: val,
            textStyle: {
                fontWeight: 'normal',
                color: configObj.color
                    ? getColor(configObj.color[0])
                    : '#78b4ff',
                fontSize: 18
            },
            subtextStyle: {
                color: configObj.color
                    ? getColor(configObj.color[0])
                    : '#78b4ff', // 副标题文字颜色
                fontSize: '25',
                fontWeight: 'normal'
            }
        },
        tooltip: {
            show: false
        },
        series: [
            {
                name: 'Pie2',
                type: 'pie',
                clockWise: false,
                radius: ['80%', '90%'],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['50%', '50%'],
                data: [
                    {
                        value: 100 - Number(val),
                        itemStyle: {
							color: configObj.color
								? getColor(configObj.color[1])
								: '#eee',
							shadowBlur: 0
                        }
                    },
                    {
                        value: val,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            }
        ]
    };

    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 热力图
 * configObj  Object
 *   属性如下：
 *   data  Object  图表数据 必须,
 *       xAxis 必须
 *       series 必须
 *   el 图表绑定的dom元素 可选 不传时返回option配置项
 *   type 类型 连续continuous 或分段piecewise 默认连续
 *       连续型：
 *           max 图例最大值 可选 默认数值中的最大值
 *           min 图例最小值 可选 默认数值中的最小值
 *       分段型：
 *           categories Array 各分段名称
 *   color  Arrway  颜色 可选
 *   unit   String  数值单位 可选
 *   showLabel Boolean 是否显示文字 默认显示
 * opt Object  自定义图表option中的属性
 * */
export const renderHeatmap = (data, configObj, opt) => {
    if (!data || !data.series || data.series.length === 0) {
        return getNoDataOption();
    }

    let xAxis = data.xAxis;
    let yAxis = [];
    let seriesData = [];
    let series = [...data.series].reverse();
    let nums = [];
    let visualMap = [];

    for (let i = 0; i < xAxis.length; i++) {
        for (let j = 0; j < series.length; j++) {
            let n = series[j].data[i];
            let arrItem = [i, j, n];
            seriesData.push(arrItem);
            if (i === 0) {
                yAxis.push(series[j].name);
            }
            if (!isNaN(n)) {
                nums.push(Number(n));
            }
        }
    }

    if (configObj.type === 'piecewise' && configObj.categories) {
        let colors = getColor(configObj.color);
        let pieces = [];
        configObj.categories.forEach((v, i) => {
            pieces.push({
                label: v,
                value: i + 1,
                color: colors[i]
            });
        });

        visualMap = [
            {
                type: 'piecewise',
                pieces: pieces,
                calculable: false,
                orient: 'horizontal',
                left: 'center',
                top: 20,
                itemWidth: CONFIG.LEGEND_ICON_SIZE,
                itemHeight: CONFIG.LEGEND_ICON_SIZE,
                itemSymbol: CONFIG.LEGEND_ICON,
                textStyle: {
                    color: getFontColor(),
                    fontSize: CONFIG.FONT_S
                }
            }
        ];
    } else {
        let max = configObj.max;
        let min = configObj.min;
        let unit = configObj.unit || '';
        configObj.color = configObj.color || ['#C7021D', '#79E73C'];
        if (min === undefined) {
            min = Math.min(...nums);
        }
        if (max === undefined) {
            max = Math.max(...nums);
        }
        visualMap = [
            {
                min: min,
                max: max,
                calculable: false,
                orient: 'horizontal',
                left: 'center',
                top: 20,
                color: configObj.color,
                text: ['高' + '      ' + unit, '低'],
                textStyle: {
                    color: getFontColor(),
                    fontSize: CONFIG.FONT_S
                }
            }
        ];
    }

    let option = {
        /*textStyle: {
            color: null
        },*/
        tooltip: {
            ...TOOLTIP(),
            formatter: function (v) {
                let val = v.value[2];
                if (configObj.categories) {
                    return configObj.categories[val - 1] || '-';
                }
                return val;
            }
        },
        grid: CONFIG.GRID,
        xAxis: {
            ...AXIS_STYLE(),
            type: 'category',
            data: xAxis,
            axisLabel: {
                interval: 0,
                textStyle: {
                    fontSize: CONFIG.FONT_S
                }
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(200,200,200,0.3)', 'rgba(200,200,200,0.2)']
                }
            }
        },
        yAxis: {
            ...AXIS_STYLE(),
            type: 'category',
            data: yAxis,
            axisLabel: {
                interval: 0,
                textStyle: {
                    fontSize: CONFIG.FONT_S
                }
            }
        },
        visualMap: visualMap,
        series: [
            {
                type: 'heatmap',
                data: seriesData,
                label: {
					show: configObj.showLabel !== false,
					color: '#fff',
					formatter: function (v) {
						let val = v.value[2];
						if (configObj.categories) {
							return configObj.categories[val - 1] || '-';
						}
						return val;
					}
                },
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    emphasis: {
                        shadowBlur: 0,
                        shadowColor: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            }
        ]
    };
    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 仪表盘
 * configObj  Object
 *   属性如下：
 *   data  Object  图表数据 必须,
 *       包含xAxis或yAxis二选一
 *       series 必须
 *   el 图表绑定的dom元素 可选 不传时返回option配置项
 *   color  Arrway  颜色 可选
 *   unit   String  数值单位 可选 默认%
 *   max: Number 最大刻度
 *   min: Number 最小刻度
 * opt Object  自定义图表option中的属性
 *
 * config中配置color 色值为字体色值
 * */
export const dashboardchart = (configObj, opt) => {
    let fontColor = '#27e4ae';

    //size为small  和 mini 缩小样式尺寸
    let size = configObj.size;
    let scale = 1;
    if (size === 'mini') {
        scale = 0.3;
    } else if (size === 'small') {
        scale = 0.5;
    } else if (size && !isNaN(size)) {
        scale = Number(size);
    }
    let axisLineWidth = 10 * scale; //刻度环宽度
    let axisTickLength = 6 * scale; //刻度长度
    let splitLineLength = 15 * scale; //刻度分隔线长度

    if (configObj.color) {
        fontColor = configObj.color;
    }
    if (configObj.max === undefined || isNaN(configObj.max)) {
        configObj.max = 100;
    }

    if (configObj.min === undefined || isNaN(configObj.min)) {
        configObj.min = 0;
    }
    configObj.unit = configObj.unit || '%';

    let option = {
        //backgroundColor:'#fff',
        title: {
            show: false
        },
        series: [
            {
                type: 'gauge',
                splitNumber: scale < 0.8 ? 5 : 10,
                min: configObj.min,
                max: configObj.max,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: axisLineWidth,
                        color: [
                            [0.33, '#e54261'],
                            [0.66, '#4876e5'],
                            [1, '#27e4ae']
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    length: axisTickLength,
                    distance: 10 * scale,
                    lineStyle: {
                        width: 1,
                        color: 'auto'
                    }
                },
                axisLabel: {
                    show: true,
                    distance: 15 * scale,
                    textStyle: {
                        fontSize: 12 * scale,
                        color: fontColor
                    }
                },
                splitLine: {
                    show: true,
                    distance: 10 * scale,
                    length: splitLineLength, //调刻度高度
                    lineStyle: {
                        width: 1,
                        color: 'auto'
                    }
                },
                pointer: {
                    show: true,
                    length: '60%',
                    itemStyle: {
                        color: '#27e4ae'
                    },
                    width: 6 * scale //指针粗细
                },
                detail: {
                    formatter: '{value}' + configObj.unit,
                    offsetCenter: ['0', '50%'],
                    textStyle: {
                        fontSize: 24 * scale,
                        color: fontColor
                    }
                },
                data: [{ value: configObj.data.value }]
            }
        ]
    };
    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 仪表盘样式1
 * */
export const dashboardchart1 = (configObj, angle = 0) => {
    // let angle = 0;//角度，用来做简单的动画效果的
    let value = configObj.data.value || 0;
    let unit = configObj.unit || '';
    let max = configObj.max || 100;

    let decorationRadius = configObj.decorationRadius || 0.7; //装饰线条和圆点距离中心的半径比例 >0 <=1

    let bgColor =
        CONFIG.THEME_COLOR === 'light' ? '#e4e4e4' : 'rgba(255,255,255,0.2)';
    let colorArr = configObj.color || [
        '#0CD3DB',
        bgColor,
        '#0CD3DB',
        '#0CD3DB'
    ]; //依次是 圆环数值区域颜色、圆环背景色、线条颜色、文字颜色

    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    function getCirlPoint(x0, y0, r, angle) {
        let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
        let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
        return {
            x: x1,
            y: y1
        };
    }
    let option = {
        title: {
            text: '{a|' + value + '}{c|' + unit + '}',
            x: 'center',
            y: 'center',
            textStyle: {
                rich: {
                    a: {
                        fontSize: 28,
                        color: colorArr[3] || getFontColor()
                    },

                    c: {
                        fontSize: 14,
                        color: colorArr[3] || getFontColor()
                    }
                }
            }
        },
        series: [
            {
                name: 'ring5',
                type: 'custom',
                coordinateSystem: 'none',
                renderItem: function (params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r:
                                (Math.min(api.getWidth(), api.getHeight()) /
                                    2) *
                                decorationRadius,
                            startAngle: ((0 + angle) * Math.PI) / 180,
                            endAngle: ((90 + angle) * Math.PI) / 180
                        },
                        style: {
                            stroke: colorArr[2],
                            fill: 'transparent',
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            {
                name: 'ring5',
                type: 'custom',
                coordinateSystem: 'none',
                renderItem: function (params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r:
                                (Math.min(api.getWidth(), api.getHeight()) /
                                    2) *
                                decorationRadius,
                            startAngle: ((180 + angle) * Math.PI) / 180,
                            endAngle: ((270 + angle) * Math.PI) / 180
                        },
                        style: {
                            stroke: colorArr[2],
                            fill: 'transparent',
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            {
                name: 'ring5',
                type: 'custom',
                coordinateSystem: 'none',
                renderItem: function (params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r:
                                (Math.min(api.getWidth(), api.getHeight()) /
                                    2) *
                                (decorationRadius - 0.05),
                            startAngle: ((270 + -angle) * Math.PI) / 180,
                            endAngle: ((40 + -angle) * Math.PI) / 180
                        },
                        style: {
                            stroke: colorArr[2],
                            fill: 'transparent',
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            {
                name: 'ring5',
                type: 'custom',
                coordinateSystem: 'none',
                renderItem: function (params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r:
                                (Math.min(api.getWidth(), api.getHeight()) /
                                    2) *
                                (decorationRadius - 0.05),
                            startAngle: ((90 + -angle) * Math.PI) / 180,
                            endAngle: ((220 + -angle) * Math.PI) / 180
                        },
                        style: {
                            stroke: colorArr[2],
                            fill: 'transparent',
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            {
                name: 'ring5',
                type: 'custom',
                coordinateSystem: 'none',
                renderItem: function (params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r =
                        (Math.min(api.getWidth(), api.getHeight()) / 2) *
                        (decorationRadius - 0.05);
                    let point = getCirlPoint(x0, y0, r, 90 + -angle);
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: colorArr[2], //粉
                            fill: colorArr[2]
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            {
                name: 'ring5', //绿点
                type: 'custom',
                coordinateSystem: 'none',
                renderItem: function (params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r =
                        (Math.min(api.getWidth(), api.getHeight()) / 2) *
                        (decorationRadius - 0.05);
                    let point = getCirlPoint(x0, y0, r, 270 + -angle);
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: colorArr[2], //绿
                            fill: colorArr[2]
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            {
                type: 'pie',
                radius: configObj.radius || ['58%', '45%'],
                silent: true,
                clockwise: true,
                startAngle: 90,
                z: 0,
                label: {
                    position: 'center'
                },
                data: [
                    {
                        value: value,
                        name: '',
                        itemStyle: {
                                color: colorArr[0]
                                /* color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#4FADFD' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#28E8FA' // 100% 处的颜色
                                    }]
                                }, */
                        }
                    },
                    {
                        value: max - value,
                        name: '',
                        label: {
                            show: false
                        },
                        itemStyle: {
                            color: colorArr[1]
                        }
                    }
                ]
            }

            /* {
                name: "",
                type: "gauge",
                radius: "58%",
                center: ['50%', '50%'],
                startAngle: 0,
                endAngle: 359.9,
                splitNumber: 8,
                hoverAnimation: true,
                axisTick: {
                    show: false
                },
                splitLine: {
                    length: 60,
                    lineStyle: {
                        width: 5,
                        color: 'transparent'
                        // color: colorArr[1]
                    }
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0
                    }
                },
                detail: {
                    show: false
                },
                data: [{
                    value: 0,
                    name: ""
                }]
            }, */
        ]
    };

    return option;
};

/**
 * 仪表盘样式2
 * */
export const dashboardchart2 = (configObj, opt) => {
    let value = configObj.data.value; //数值
    let angle = configObj.angle || 270; //刻度轴角度 180-360
    let barWidth = configObj.barWidth || 20; //轴宽度
    let title = configObj.title || '';
    let bgColor =
        CONFIG.THEME_COLOR === 'light' ? '#e4e4e4' : 'rgba(255,255,255,0.2)';
    let colors = configObj.color || [getColor()[0], bgColor]; //颜色
    let isShowTick = !!configObj.isShowTick;
    let isShowTickLabel = !!configObj.isShowTickLabel;
    let isShowPointer = !!configObj.isShowPointer;
    let fontColor = getFontColor();
    let max = configObj.max || 100;
    let min = configObj.min || 0;
    let unit = configObj.unit === undefined ? '%' : configObj.unit;
    let textOffset = configObj.textOffset || '40%';
    if (max != 100) {
        value = (configObj.data.value * 100) / (max - min);
    }

    //size为small  和 mini 缩小样式尺寸
    let size = configObj.size;
    let scale = 1;
    if (size === 'mini') {
        scale = 0.3;
    } else if (size === 'small') {
        scale = 0.5;
    } else if (size && !isNaN(size)) {
        scale = Number(size);
    }

    let option = {
        title: [
            {
                text: title,
                y: parseFloat(textOffset) - 0 + 35 + '%',
                x: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 24 * scale,
                    color: fontColor
                }
            }
        ],
        angleAxis: {
            show: false,
            max: (100 * 360) / angle, //-45度到225度，二者偏移值是270度除360度
            type: 'value',
            startAngle: 180 + (angle - 180) / 2 //极坐标初始角度
        },
        barWidth: barWidth,
        radiusAxis: {
            show: false,
            type: 'category'
        },
        //圆环位置和大小
        polar: {
            center: ['50%', '50%'],
            radius: '180%'
        },
        series: [
            {
                type: 'bar',
                data: [
                    {
                        //上层圆环，显示数据
                        value: value,
                        itemStyle: {
                            color: colors[0]
                        }
                    }
                ],
                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true, //顶端圆角
                z: 3
            },
            {
                //下层圆环，显示最大值
                type: 'bar',
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            color: colors[1] || bgColor,
                            borderWidth: 0
                        }
                    }
                ],
                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true,
                z: 2,
                silent: true
            },
            //仪表盘
            {
                type: 'gauge',
                radius: '96%',
                center: ['50%', '50%'],
                startAngle: 270 - (180 - angle / 2), //起始角度，同极坐标
                endAngle: -90 + (180 - angle / 2), //终止角度，同极坐标
                max,
                min,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: isShowTick,
                    lineStyle: {
                        width: 1
                    }
                },
                axisTick: {
                    show: isShowTick
                },
                axisLabel: {
                    show: isShowTick || isShowTickLabel,
                    distance: isShowTick ? 15 : 10,
                    textStyle: {
                        color: fontColor,
                        fontSize: 14 * scale
                    }
                },

                pointer: {
                    // 分隔线
                    show: isShowPointer, //是否显示指针
                    shadowBlur: 0,
                    length: '70%',
                    width: '5'
                },
                itemStyle: {
                    color: colors[0]
                },
                detail: {
                    show: true,
                    formatter: configObj.data.value + unit,
                    color: fontColor,
                    fontSize: 28 * scale,
                    fontWeight: 'normal',
                    offsetCenter: [0, textOffset]
                },
                data: [
                    {
                        value: configObj.data.value
                    }
                ]
            }
        ]
    };
    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 仪表盘样式3
 * */
export const dashboardchart3 = (configObj, opt) => {
    let value = configObj.data.value; //数值
    let title = configObj.title || '';
    let sColor =
        CONFIG.THEME_COLOR === 'light' ? '#dfefff' : 'rgba(255,255,255,0.2)';
    let bgColor =
        CONFIG.THEME_COLOR === 'light' ? '#e4e4e4' : 'rgba(255,255,255,0.2)';

    let colors = configObj.color || ['#458EFD', '#abd4ff', sColor]; //颜色

    let max = configObj.max || 100;
    let min = configObj.min || 0;
    let unit = configObj.unit || '%';

    let size = configObj.size || 1;
    let scale = Number(size);

    let option = {
        title: {
            show: true,
            text: title,
            x: '50%',
            y: '57%',
            z: 10,
            textAlign: 'center',
            textStyle: {
                color: '#f1f7fe',
                fontSize: 20 * scale,
                fontWeight: 'normal'
            }
        },
        series: [
            {
                type: 'gauge',
                radius: '65%',
                max,
                min,
                axisLine: {
                    lineStyle: {
                        color: [
                            [value / max, colors[0]],
                            [1, bgColor]
                        ],
                        width: 14 * scale
                    }
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                pointer: {
                    show: false
                }
            },
            {
                name: '外部刻度',
                type: 'gauge',
                radius: '100%',
                min, //最小刻度
                max, //最大刻度
                axisLine: {
                    show: false
                },
                //仪表盘文字
                axisLabel: {
                    show: true,
                    color: colors[0],
                    distance: 30 * scale,
                    fontSize: 12 * scale
                }, //刻度标签。
                axisTick: {
                    show: true,
                    splitNumber: 7,
                    lineStyle: {
                        color: colors[0], //用颜色渐变函数不起作用
                        width: 2 * scale
                    },
                    length: -8 * scale
                }, //刻度样式
                splitLine: {
                    show: true,
                    length: -12 * scale,
                    lineStyle: {
                        color: colors[0] //用颜色渐变函数不起作用
                    }
                }, //分隔线样式
                detail: {
                    show: false
                },
                pointer: {
                    show: false
                }
            },
            /*内部*/
            {
                type: 'pie',
                radius: ['0', '40%'],
                center: ['50%', '50%'],
                z: 8,
                hoverAnimation: false,
                data: [
                    {
                        value: value,
                        itemStyle: {
                            color: colors[0]
                        },
                        label: {
							formatter: function (params) {
								return params.value + unit;
							},
							color: '#fff',
							fontSize: 30 * scale,
							fontWeight: 'normal',
							position: 'center',
							show: true
                        },
                        labelLine: {
                            show: false
                        }
                    }
                ]
            },
            /*外一层*/
            {
                type: 'pie',
                radius: '45%',
                startAngle: 220,
                endAngle: -40,
                hoverAnimation: false,
                center: ['50%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data: [
                    {
                        value: 1,
                        itemStyle: {
                            color: colors[1]
                        }
                    }
                ]
            },
            //外二层圈
            {
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                avoidLabelOverlap: false,
                z: 0,
                hoverAnimation: false,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data: [
                    {
                        value: 1,
                        itemStyle: {
                            color: colors[2]
                        }
                    }
                ]
            }
        ]
    };
    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 仪表盘
 * configObj  Object
 *   属性如下：
 *   data  Object  图表数据 必须,
 *       包含xAxis或yAxis二选一
 *       series 必须
 *   el 图表绑定的dom元素 可选 不传时返回option配置项
 *   color  Arrway  颜色 可选
 *   unit   String  数值单位 可选 默认%
 * opt Object  自定义图表option中的属性
 *
 * */
export const airwrwchart = (configObj, opt) => {
    let data = configObj.data;
    let rel = util.getLevelPollution('AQI', data.value);
    let max = 500;
    let barWidth = configObj.barWidth || 15; //轴宽度
    let angle = configObj.angle || 270; //刻度轴角度 180-360

    let value = (data.value * 100) / max;
    let bgColor =
        CONFIG.THEME_COLOR === 'light' ? '#e4e4e4' : 'rgba(255,255,255,0.2)';
    let ringColor = configObj.ringColor || bgColor;
    /*  let bgColor = '#aaa';
    if (configObj.backgroundColor) {
        bgColor = configObj.backgroundColor;
    } */
    let option = {
        title: {
            text: 'AQI',
            textStyle: {
                fontSize: 16,
                color: getFontColor()
            },
            left: 'center',
            top: '30%'
        },
        angleAxis: {
            show: false,
            max: (100 * 360) / angle, //-45度到225度，二者偏移值是270度除360度
            type: 'value',
            startAngle: 180 + (angle - 180) / 2 //极坐标初始角度
        },
        barWidth: barWidth,
        radiusAxis: {
            show: false,
            type: 'category'
        },
        //圆环位置和大小
        polar: {
            center: ['50%', '50%'],
            radius: '160%'
        },
        series: [
            {
                type: 'bar',
                data: [
                    {
                        //上层圆环，显示数据
                        value: value,
                        itemStyle: {
                            color: rel.color
                        }
                    }
                ],
                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true, //顶端圆角
                z: 3
            },
            {
                //下层圆环，显示最大值
                type: 'bar',
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            color: ringColor,
                            borderWidth: 0
                        }
                    }
                ],
                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true,
                z: 2,
                silent: true
            },
            {
                name: 'AQI',
                type: 'gauge',
                radius: '90%',
                startAngle: 245,
                endAngle: -65,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 20,
                        color: [
                            [data.value / max, rel.color],
                            [1, '#eee']
                        ]
                    }
                },
                splitLine: { show: false },
                axisTick: { show: false },
                axisLabel: { show: false },
                splitLabel: { show: false },
                pointer: { show: false },
                itemStyle: {
                    borderWidth: 30,
                    color: '#0f0'
                },
                title: {
                    offsetCenter: [0, 0],
                    color: getFontColor(),
                    fontSize: 20,
                    fontWeight: 700
                },
                detail: {
                    formatter: rel.txt || '-',
                    color: '#fff',
                    offsetCenter: [0, '30%'],
                    backgroundColor: rel.color,
                    borderRadius: 5,
                    fontSize: 16,
                    padding: [2, 10],
                    lineHeight: 25,
                    width: rel.txt.length * 16
                },
                data: [{ value: data.value, name: data.value }]
            }
        ]
    };

    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 水球图
 * configObj  Object
 *   属性如下：
 *   data  Object  图表数据 必须,
 *       包含xAxis或yAxis二选一
 *       series 必须
 *   el 图表绑定的dom元素 可选 不传时返回option配置项
 *   color  Arrway  颜色 可选
 *   unit   String  数值单位 可选 默认%
 * opt Object  自定义图表option中的属性
 *
 * */
export const waterPolochart1 = (configObj, opt) => {
    let itemColor = configObj.itemColor || getColor()[0];
    let option = {
        backgroundColor: configObj.background
            ? configObj.background
            : 'rgba(0,0,0,0)',
        series: [
            {
                type: 'liquidFill',
                itemStyle: {
                    // color: itemColor,
                    shadowColor: configObj.shadowColor,
                    shadowBlur: configObj.shadowColor ? 20 : 0
                },
                radius: '80%',
                // color: getColor(),
                // data: [configObj.data.value, configObj.data.value],
                data: [
                    {
                        value: configObj.data.value,
                        itemStyle: {
                            color: itemColor
                        }
                    },
                    {
                        value: configObj.data.value,
                        itemStyle: {
                            color: itemColor,
                            opacity: 0.8
                        }
                    }
                ],
                outline: {
                    show: false
                },

                backgroundStyle: {
                    borderWidth: 2,
                    borderColor: configObj.borderColor || itemColor,
                    color: configObj.backgroundColor || 'transparent'
                },
                label: {
					//formatter: (value * 100).toFixed(2) + '%',
					textStyle: {
						fontSize: 30,
						color: configObj.labelColor
					}
                }
            }
        ]
    };
    if (opt) {
        _merge(option, opt);
    }

    return option;
};

// 水球图
export const waterPolochart = (configObj) => {
    let itemColor = configObj.itemColor || getColor()[0];
    let shadowColor =
        configObj.shadowColor ||
        (typeof itemColor === 'string' ? itemColor : getColor()[0]);
    let value = isNaN(configObj.data.value) ? '0' : configObj.data.value;

    let fillColor =
        typeof itemColor === 'string' ? getColorRgb(itemColor).join(',') : '';
    let shadowColorStr = getColorRgb(shadowColor).join(',');
    let scale = configObj.scale || 1;
    let itemNum = configObj.itemNum || 1;
    let color = fillColor
        ? {
              type: 'linear',
              x: 0,
              y: 1,
              x2: 0,
              y2: 0,
              colorStops: [
                  {
                      offset: 1,
                      color: [`rgba(${fillColor},0.4)`] // 0% 处的颜色
                  },
                  {
                      offset: 0,
                      color: [`rgba(${fillColor}, 1)`] // 100% 处的颜色
                  }
              ]
          }
        : itemColor;
    let data = [];
    for (let n = 0; n < itemNum; n++) {
        // data.push((value * scale) / 100);
        data.push({
            value: ((value * scale) / 100) * (1 - 0.1 * n),
            itemStyle: {
                color,
                opacity: 1 - n * 0.2
            }
        });
    }

    let option = {
        title: {
            text: configObj.title,
            textStyle: {
                fontSize: 20,
                fontWeight: 400,
                color: configObj.labelColor || getFontColor()
            },
            x: 'center',
            y: '40%'
        },
        graphic: [
            {
                type: 'group',
                left: 'center',
                top: configObj.title ? '55%' : 'center',
                children: [
                    {
                        type: 'text',
                        z: 100,
                        left: '10',
                        top: 'middle',
                        style: {
                            fill: configObj.labelColor || getFontColor(),
                            text: value + '%',
                            fontSize: '30',
                            fontWeight: 'bold'
                            //   fontFamily: "FZHZGBJW",
                        }
                    }
                ]
            }
        ],
        series: [
            {
                type: 'liquidFill',
                radius: '80%',
                // center: ["50%", "55%"],
                // waveAnimation: 5, // 动画时长
                // amplitude: 10, // 振幅
                data: data,
                /* color: [
                    fillColor
                        ? {
                              type: "linear",
                              x: 0,
                              y: 1,
                              x2: 0,
                              y2: 0,
                              colorStops: [
                                  {
                                      offset: 1,
                                      color: [`rgba(${fillColor},0.4)`], // 0% 处的颜色
                                  },
                                  {
                                      offset: 0,
                                      color: [`rgba(${fillColor}, 1)`], // 100% 处的颜色
                                  },
                              ],
                          }
                        : itemColor,
                ], */
                itemStyle: {
                    shadowBlur: 0
                },
                /* color: [
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#446bf5',
                        },
                        {
                            offset: 1,
                            color: '#2ca3e2',
                        },
                    ],
                    globalCoord: false,
                },
            ], */
                label: {
                        show: false
                        //formatter: (value * 100).toFixed(2) + '%',
                        /*  top: '60%',
                    textStyle: {
                        fontSize: 30,
                        color: configObj.labelColor || CONFIG.FONT_COLOR
                    } */
                },
                outline: {
                    show: !!configObj.borderColor,
                    borderDistance:
                        configObj.borderDistance === undefined
                            ? 8
                            : configObj.borderDistance,
                    itemStyle: {
                        borderWidth: 3,
                        borderColor: configObj.borderColor
                        /* shadowBlur: 10,
                    shadowColor: '#000', */
                    }
                },
                backgroundStyle: {
                    color: configObj.backgroundColor
                        ? configObj.backgroundColor
                        : {
                              type: 'radial',
                              x: 0.5,
                              y: 0.5,
                              r: 0.5,
                              colorStops: [
                                  {
                                      offset: 1,
                                      color: `rgba(${shadowColorStr}, 0.3)`
                                  },
                                  {
                                      offset: 0.95,
                                      color: `rgba(${shadowColorStr}, 0.5)`
                                  },
                                  {
                                      offset: 0.8,
                                      color: `rgba(${shadowColorStr}, 0.3)`
                                  },
                                  {
                                      offset: 0.4,
                                      color: `rgba(${shadowColorStr}, 0.01)`
                                  }
                              ]
                          }
                }
            }
        ]
    };

    return option;
};
/**
 * 折线图
 * @param {Object} data 图表数据 必须,
 * @param {[]} data.xAxis x轴
 * @param {[]} data.yAxis y轴(与data.xAxis二选一)
 * @param {[]} data.series 必须
 * @param {Object} configObj 配置项 可选
 * @param configObj.el 图表绑定的dom元素 可选
 * @param configObj.color 颜色 可选
 * @param {Boolean} configObj.showLabel  是否显示数值 默认不显示
 * @param {Boolean} configObj.showFillArea 是否填充颜色
 * @param {String} configObj.unit  数值单位 可选 默认不显示
 * @param {Object}  opt 自定义图表option中的属性 可选
 * @return {Object} 图表配置项
 * */
export const renderLine = (data, configObj, opt) => {
    if (!data || !data.series || data.series.length === 0) {
        return getNoDataOption();
    }
    data = _merge({}, data);
    let hasBar = false; //是否混合有柱型图
    let color = getColor(configObj.color);
    data.series.map((v, i) => {
        v.type = v.type || 'line';
        v.symbol = 'circle';
        v.symbolSize = 2;
        if (v.type === 'bar') {
            hasBar = true;
            v.barMaxWidth = 20;
        }
        v.smooth = configObj.smooth !== false;
        v.connectNulls = configObj.connectNulls !== false;
        if (configObj.showLabel) {
            v.label = {
                show: true,
                color: getFontColor(),
                position: 'top'
            };
        }

        if (configObj.showFillArea) {
            let fillColor = getColorRgb(color[i]).concat(0.3);
            let fillColor_ = getColorRgb(color[i]).concat(0);
            v.areaStyle = {
                //区域填充样式
				color: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [
						{
							offset: 0,
							color: `rgba(${fillColor.join(',')})` // 0% 处的颜色
						},
						{
							offset: 1,
							color: `rgba(${fillColor_.join(',')})` // 100% 处的颜色
						}
					]
				},
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 0
            };
        }
    });
    //类目轴
    let categoryAxis = {
        ...AXIS_STYLE(),
        type: 'category',
        data: data.xAxis || data.yAxis || null,
        boundaryGap: hasBar
    };
    categoryAxis.axisLine.show = !data.yAxis; //y轴做类目轴时 不显示

    //数值轴
    let valueAxis = {
        ...AXIS_STYLE(),
        type: 'value',
        name: configObj.unit || '',
        nameTextStyle: {
            padding: [0, 20, 2, 0]
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: !data.yAxis, //y轴做类目轴时 不显示
            lineStyle: {
                color: getBorderColor(),
                width: 1,
                // opacity: 0.6,
                type: 'dashed'
            }
        }
    };
    let option = {
        legend: {
            ...LEGEND()
            //itemWidth: hasBar ? 10 : 20
        },
        color: getColor(configObj.color),
        grid: CONFIG.GRID,
        xAxis: data.xAxis ? categoryAxis : valueAxis,
        yAxis: data.yAxis ? categoryAxis : valueAxis,

        series: data.series,
        tooltip: {
            ...TOOLTIP(),
            trigger: 'axis'
        }
    };

    if (configObj.markLine) {
        let markLine = getMarkLine(configObj.markLine);
        option.series[0].markLine = markLine;
    }
    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 柱状图
 * @param {Object} data 图表数据 必须,
 * @param {[]} data.xAxis x轴
 * @param {[]} data.series 必须
 * @param {Object} configObj 配置项 可选
 * @param configObj.el 图表绑定的dom元素 可选
 * @param configObj.color 颜色 可选
 * @param {Boolean} configObj.showLabel  是否显示数值 默认不显示
 * @param {String} configObj.unit  数值单位 可选
 * @param {Object}  opt 自定义图表option中的属性 可选
 * @return {Object} 图表配置项
 * */
export const renderBar = (data, configObj, opt) => {
    if (!data || !data.series || data.series.length === 0) {
        return getNoDataOption();
    }
    data = _merge({}, data);

    let colors = getColor(configObj.color);

    let barWidth = configObj.barWidth || 20;

    let series_ = [];

    let legendData = [];

    data.series.map((v, i) => {
        v.type = v.type || 'bar';
        if (v.type === 'line') {
            v.smooth = true;
            v.symbol = 'circle';
            v.symbolSize = 2;
            v.connectNulls = true;
        } else {
            v.barMaxWidth = configObj.barMaxWidth || '60%';
            v.barWidth = barWidth;

            if (configObj.pictorial) {
                v.itemStyle = {
                    opacity: 1
                };
            }

			// 顶部圆角
			if(configObj.topRing){
				v.itemStyle = {
					barBorderRadius: [30, 30, 0, 0]
				}
			}

			// 右边圆角
			if(configObj.rightRing){
				v.itemStyle = {
					barBorderRadius: [0, 30, 30, 0]
				}
			}

			// 顶部，底部圆环
			if(configObj.tbRing){
				v.itemStyle = {
					barBorderRadius: [30, 30, 30, 30]
				}
			}
			

            if (configObj.pictorial) {
                let itemColor = colors[i];

                v.itemStyle.color = getPictorialColor(
                    itemColor,
                    configObj.pictorial
                );
            }
        }

        if (configObj.showLabel) {
            v.label = {
                show: true,
                color: getFontColor(),
                position: data.yAxis ? 'right' : 'top'
            };
        }
    });

    let bars = data.series.filter((v) => {
        return v.type !== 'line';
    });

    if (configObj.pictorial && bars.length <= 5) {
        //象形柱状图图标横向偏移距离
        let symbolOffsetXObj = {
            1: '0',
            2: ['-60%', '60%'],
            3: ['-120%', 0, '120%'],
            4: ['-180%', '-60%', '60%', '180%'],
            5: ['-240%', '-120%', 0, '120%', '240%']
        };

        let symbolOffsetXArr =
            configObj.symbolOffsetXArr || symbolOffsetXObj[bars.length];

        bars.forEach((v, i) => {
            legendData.push({
                name: v.name,
                itemStyle: {
                    color: colors[i]
                }
            });

            let itemColor = colors[i];
            let symbolOffsetX = symbolOffsetXArr[i];

            let barColor = bars[i].itemStyle.color;

            series_.push(
                {
                    tooltip: { show: false },
                    name: v.name,
                    data: v.data,
                    type: 'pictorialBar',
                    symbol: configObj.pictorial,
                    symbolPosition: 'start',
                    symbolOffset: [symbolOffsetX, '50%'],
                    symbolSize: [barWidth, barWidth / 2.5],
                    z: 2,
                    itemStyle: {
                        color: barColor
                        // color: v.name ? barColor : colors[0]
                    }
                },
                {
                    name: v.name,
                    tooltip: { show: false },
                    data: v.data,
                    type: 'pictorialBar',
                    symbol: configObj.pictorial,
                    symbolPosition: 'end',
                    symbolOffset: [symbolOffsetX, '-50%'],
                    symbolSize: [barWidth, barWidth / 2.5],
                    z: 3,
                    itemStyle: {
                        color: getChangeColor(itemColor, 0.1)
                    }
                }
            );
        });
    }

    //类目轴
    let categoryAxis = {
        ...AXIS_STYLE(),
        type: 'category',
        data: data.xAxis || data.yAxis || null
    };
    categoryAxis.axisLine.show = !data.yAxis; //y轴做类目轴时 不显示

    //数值轴
    let valueAxis = {
        ...AXIS_STYLE(),
        type: 'value',
        name: configObj.unit || '',
        nameTextStyle: {
            padding: [0, 20, 2, 0]
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: !data.yAxis, //y轴做类目轴时 不显示
            lineStyle: {
                color: getBorderColor(),
                width: 1,
                // opacity: 0.6,
                type: 'dashed'
            }
        }
    };
    let option = {
        legend: {
            ...LEGEND(),
            selectedMode: !configObj.pictorial,
            data: configObj.pictorial ? legendData : null
        },
        color: getColor(configObj.color),
        grid: CONFIG.GRID,
        xAxis: data.xAxis ? categoryAxis : valueAxis,
        yAxis: data.yAxis ? categoryAxis : valueAxis,
        series: data.series.concat(series_),
        tooltip: {
            ...TOOLTIP(),
            trigger: 'axis'
        }
    };
    if (opt) {
        _merge(option, opt);
    }

    return option;
};

//模拟3D
export const renderSimulated3DBar = (data, configObj, opt) => {
    if (!data || !data.series || data.series.length === 0) {
        return getNoDataOption();
    }

    let colors = getColor(configObj.color);
    let customColor = configObj.customColor || [];
    let colors_ = [];

    let barWidth = configObj.barWidth || 20;

    let barGap = configObj.barGap || 0.5;

    //类目轴
    let categoryAxis = {
        ...AXIS_STYLE(),
        type: 'category',
        data: data.xAxis,
        splitLine: {
            show: false
        }
    };

    //数值轴
    let valueAxis = {
        ...AXIS_STYLE(),
        type: 'value',
        name: configObj.unit || '',
        nameTextStyle: {
            padding: [0, 20, 2, 0]
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: getBorderColor(),
                width: 1,
                // opacity: 0.6,
                type: 'dashed'
            }
        }
    };

    // 绘制左侧面
    const wid = barWidth;
    const w1 = Math.sin(Math.PI / 6) * wid; //4
    const w2 = Math.sin(Math.PI / 3) * wid; // 6.8
    const snapHeight = wid / 2;
    const CubeLeft = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function (ctx, shape) {
            const xAxisPoint = shape.xAxisPoint;
            const c0 = [shape.x, shape.y];
            const c1 = [shape.x - w2, shape.y];
            const c2 = [shape.x - w2, xAxisPoint[1]];
            const c3 = [shape.x, xAxisPoint[1]];
            ctx.moveTo(c0[0], c0[1])
                .lineTo(c1[0], c1[1])
                .lineTo(c2[0], c2[1])
                .lineTo(c3[0], c3[1])
                .closePath();
        }
    });
    // 绘制右侧面
    const CubeRight = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function (ctx, shape) {
            const xAxisPoint = shape.xAxisPoint;
            const c1 = [shape.x, shape.y];
            const c2 = [shape.x, xAxisPoint[1]];
            const c3 = [shape.x + w1, xAxisPoint[1] - w2 + snapHeight];
            const c4 = [shape.x + w1, shape.y - w2 + snapHeight];
            ctx.moveTo(c1[0], c1[1])
                .lineTo(c2[0], c2[1])
                .lineTo(c3[0], c3[1])
                .lineTo(c4[0], c4[1])
                .closePath();
        }
    });
    // 绘制顶面
    const CubeTop = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function (ctx, shape) {
            //
            const c1 = [shape.x, shape.y];
            const c2 = [shape.x + w1, shape.y - w2 + snapHeight]; //右点
            const c3 = [shape.x - w2 + w1, shape.y - w2 + snapHeight];
            const c4 = [shape.x - w2, shape.y];
            ctx.moveTo(c1[0], c1[1])
                .lineTo(c2[0], c2[1])
                .lineTo(c3[0], c3[1])
                .lineTo(c4[0], c4[1])
                .closePath();
        }
    });
    // 三个面图形
    echarts.graphic.registerShape('CubeLeft', CubeLeft);
    echarts.graphic.registerShape('CubeRight', CubeRight);
    echarts.graphic.registerShape('CubeTop', CubeTop);

    let n = -(data.series.length - 1) / 2;

    let series = [];
    data.series.forEach((v, idx) => {
        colors_.push(customColor[idx] ? customColor[idx].top : colors[idx]);
        series.push({
            name: v.name || '',
            type: 'custom',
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                location[0] =
                    location[0] + wid * (n + idx) * (1 + Number(barGap));
                const xlocation = api.coord([api.value(0), 0]);
                xlocation[0] = xlocation[0] + wid * 0;
                return {
                    type: 'group',
                    children: [
                        {
                            type: 'CubeLeft',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: xlocation
                            },
                            style: {
                                fill: customColor[idx]
                                    ? customColor[idx].left
                                    : colors[idx]
                            }
                        },
                        {
                            type: 'CubeRight',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0] - 1,
                                y: location[1],
                                xAxisPoint: xlocation
                            },
                            style: {
                                fill: customColor[idx]
                                    ? customColor[idx].right
                                    : getChangeColor(colors[idx], 0.1)
                            }
                        },
                        {
                            type: 'CubeTop',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1] + 1,
                                xAxisPoint: xlocation
                            },
                            style: {
                                fill: customColor[idx]
                                    ? customColor[idx].top
                                    : getChangeColor(colors[idx], -0.1)
                            }
                        }
                    ]
                };
            },
            data: v.data
        });
    });

    let option = {
        legend: {
            ...LEGEND()
            // selectedMode: !configObj.pictorial,
            // data: configObj.pictorial ? legendData: null
        },
        color: colors_,
        grid: CONFIG.GRID,
        xAxis: categoryAxis,
        yAxis: valueAxis,

        tooltip: {
            ...TOOLTIP(),
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        series: series
    };

    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 雷达图
 * @param {Object} data 图表数据 必须,
 * @param {[]} data.xAxis x轴
 * @param {[]} data.series 必须
 * @param {Object} configObj 配置项 可选
 * @param configObj.el 图表绑定的dom元素 可选
 * @param configObj.color 颜色 可选
 * @param {Boolean} configObj.areaColor  分隔区域颜色 可选
 * @param {Object}  opt 自定义图表option中的属性 可选
 * @return {Object} 图表配置项
 * */
export const renderRadar = (data, configObj, opt) => {
    if (!data || !data.series || data.series.length === 0 || !data.indicator) {
        return getNoDataOption();
    }
    let indicator = [];
    let max = 100;
    let vals = [];
    let color = getColor(configObj.color);
    let seriesData = [];
    configObj.areaColor = configObj.areaColor || [
        'rgba(0, 0, 0, 0)',
        'rgba(0, 0, 0, 0)'
    ];
    data.series.forEach((v, i) => {
        let fillColor = getColorRgb(color[i]).join(',');
        let areaStyle = {
            // color: `rgba(${fillColor.join(',')})`
            color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                    {
                        offset: 0,
                        color: `rgba(${fillColor}, 0.14)` // 0% 处的颜色
                    },
                    {
                        offset: 0.15,
                        color: `rgba(${fillColor}, 0.14)` // 100% 处的颜色
                    },
                    {
                        offset: 0.75,
                        color: `rgba(${fillColor}, 0.4)` // 100% 处的颜色
                    },
                    {
                        offset: 1,
                        color: `rgba(${fillColor}, 0.5)` // 100% 处的颜色
                    }
                ],
                global: false // 缺省为 false
            }
        };
        v.value.forEach((num) => {
            if (!isNaN(num)) {
                vals.push(Number(num));
            }
        });
        seriesData.push({
            ...v,
            areaStyle,
            itemStyle: {
                // borderColor: color[i],
                // color: configObj.symbolColor || color[i],
                color: color[i]
                // borderWidth: 0.2,
            },
            lineStyle: {
                // color: color[i],
                width: 1
            }
        });
    });
    max = Math.max(...vals);
    data.indicator.forEach((v) => {
        if (typeof v === 'object') {
            v.max = v.max === undefined ? max : max;
            indicator.push(v);
        } else if (typeof v === 'string') {
            indicator.push({
                name: v,
                max: max
            });
        }
    });

    let option = {
        color: getColor(configObj.color),
        tooltip: {
            ...TOOLTIP()
        },
        radar: {
            radius: '60%',
            splitArea: {
                areaStyle: {
                    color: configObj.areaColor
                }
            },
            indicator: indicator,
            name: {
                textStyle: {
                    color: getFontColor()
                }
            },
            axisLine: {
                lineStyle: {
                    color: configObj.lineColor || getBorderColor()
                }
            },
            splitLine: {
                lineStyle: {
                    color: configObj.lineColor || getBorderColor()
                }
            }
        },
        series: [
            {
                type: 'radar',
                data: seriesData,
                symbol: 'circle',
                symbolSize: 8
            }
        ]
    };
    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 桑基图 只支持两侧数据
 * @param {[]} data 图表数据 必须,
 * @param {String} data[i].name,
 * @param {[]} data[i].items ,
 * @param {String} data[i].items[i].name 右侧项对应的,
 * @param {Number} data[i].items[i].value ,
 * @param {Object} configObj 配置项 可选
 * @param configObj.el 图表绑定的dom元素 可选
 * @param {[]} configObj.leftColor 左侧颜色 可选
 * @param {[]} configObj.rightColor 右侧颜色 可选
 * @param {Object}  opt 自定义图表option中的属性 可选
 * @return {Object} 图表配置项
 * */
export const renderSanKey = (data, configObj, opt) => {
    let rightItems = []; //右侧项
    let leftItems = []; //左侧项
    let links = [];
    let itemName = [];
    let leftColor = configObj.leftColor || ['#055165', '#076983'];
    let rightColor = configObj.rightColor || [
        'rgb(113, 127, 231)',
        'rgb(99, 144, 235)',
        'rgb(71, 120, 217)',
        'rgb(45, 97, 201)',
        'rgb(42, 137, 218)',
        'rgb(30, 157, 216)',
        'rgb(25, 136, 187)',
        'rgb(31, 165, 185)',
        'rgb(18, 131, 148)',
        'rgb(21, 175, 170)',
        'rgb(15, 149, 138)',
        'rgb(12, 149, 118)',
        'rgb(15, 140, 88)',
        'rgb(13, 136, 42)',
        'rgb(107, 183, 57)',
        'rgb(133, 184, 34)',
        'rgb(173, 182, 31)',
        'rgb(209, 189, 57)',
        'rgb(224, 167, 68)',
        'rgb(205, 131, 51)',
        'rgb(210, 106, 54)'
    ];
    data.forEach((v, i) => {
        if (v.items && v.items.length > 0) {
            rightItems.push({
                name: v.name,
                itemStyle: {
                    color: rightColor[i % rightColor.length]
                }
            });
        }

        v.items.forEach((val) => {
            let name = val.name;

            if (itemName.indexOf(name) === -1) {
                let len = leftItems.length;
                itemName.push(name);
                leftItems.push({
                    name: name,
                    itemStyle: {
                        color: leftColor[len % leftColor.length]
                    }
                });
            }
            links.push({
                target: v.name,
                source: name,
                value: val.value || 1,
                value_: val.value,
                lineStyle: {
                    //color: val.rate ? sankeyCityColors[i] : 'rgba(0,0,0,0)'
                    color: rightColor[i % rightColor.length]
                }
            });
        });
    });

    let option = {
        tooltip: {
            ...TOOLTIP(),
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: function (o) {
                let str = '';
                if (o.dataType === 'edge') {
                    //线条的提示文字
                    return (
                        o.data.target +
                        ' - ' +
                        o.data.source +
                        '：' +
                        o.data.value_ +
                        '%'
                    );
                }
                if (o.dataType === 'node') {
                    let name = o.name;
                    str = name + ' <br/>';
                    if (itemName.indexOf(name) === -1) {
                        //左侧的提示文字
                        data.forEach((v) => {
                            if (v.name === name) {
                                v.items.forEach((val) => {
                                    str +=
                                        val.name + '：' + val.value + '%<br/>';
                                });
                                return false;
                            }
                        });
                        return str;
                    } else {
                        //右侧上的提示文字
                        data.forEach((v) => {
                            v.items.forEach((val) => {
                                if (val.name === name) {
                                    str += v.name + '：' + val.value + '%<br/>';
                                    return false;
                                }
                            });
                        });
                        return str;
                    }
                }
            }
        },
        series: [
            {
                type: 'sankey',
                data: rightItems.concat(leftItems),
                links: links,
                right: 5,
                left: 5,
                bottom: 20,
                top: 25,
                nodeWidth: 90,
                nodeGap: 0,
                layoutIterations: 0,
                focusNodeAdjacency: 'allEdges',
                draggable: false,
                itemStyle: {
                        borderWidth: 0,
                        borderColor: '#fff',
                        opacity: 1
                },
                label: {
					align: 'center',
					padding: [0, 0, 0, -90],
					color: '#fff',
					fontSize: CONFIG.FONT_S
                },
                lineStyle: {
					curveness: 0.5,
					opacity: 0.6,
					color: 'rgb(18, 180, 129)'
                }
            }
        ]
    };

    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 变化排名图
 * @param {[]} data 图表数据 必须
 * @param {Number} data[i].rank 排名 可选
 * @param {Number} data[i].name 名称，显示在y轴 必须
 * @param {Number} data[i].value 数值， 必须
 * @param {Object} configObj 配置项 可选
 * @param configObj.el 图表绑定的dom元素 可选
 * @param {[]} configObj.color 颜色 可选
 * @param {String} configObj.unit 数值单位 可选
 * @param {Number} configObj.barWidth 条纹宽度 可选 默认20
 * @param {Object}  opt 自定义图表option中的属性 可选
 * @return {Object} 图表配置项
 * */
export const renderVarietyBar = (data, configObj, opt) => {
    if (!data || data.length === 0) {
        return getNoDataOption();
    }
    configObj.color = configObj.color || ['#ef3a3a', '#1bb543', '#01799a'];
    configObj.unit = configObj.unit || '';
    configObj.barWidth = configObj.barWidth || 20;

    let data1 = [];
    let data2 = [];
    let data3 = [];
    let yAxis = [];

    let itemStyleUp = {
		barBorderRadius: [
			0,
			configObj.barWidth / 2,
			configObj.barWidth / 2,
			0
		],
		color: configObj.color[0]
    };
    let itemStyleDn = {
		barBorderRadius: [
			configObj.barWidth / 2,
			0,
			0,
			configObj.barWidth / 2
		],
		color: configObj.color[1]
    };
    let series = [];
    data.forEach((v) => {
        let rank = v.rank || '';
        rank = v.rank > 9 ? v.rank : v.rank + '  ';
        yAxis.push(rank + '    ' + v.name);
        data1.push(v.value);
        series.push({
            value: v.value,
            itemStyle: v.value > 0 ? itemStyleUp : itemStyleDn
        });
    });

    let max = Math.max(...data1) + 1;
    let min = Math.min(...data1) - 1;
    max = Math.max(max, -min) * 1.4;
    data.forEach(() => {
        data2.push(max);
        data3.push(-max);
    });
    let option = {
        grid: {
            top: 20,
            left: 80,
            right: 0,
            bottom: 0
        },
        tooltip: {
            ...TOOLTIP()
        },
        yAxis: [
            {
                type: 'category',
                data: yAxis,
                inverse: true,
                offset: 60,
                axisLabel: {
                    interval: 0,
                    align: 'left',
                    padding: [0, 30, 0, 0],
                    textStyle: {
                        fontSize: CONFIG.FONT_S
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },
            {
                data: yAxis,
                inverse: true,
                axisLabel: { show: false }
            }
        ],
        xAxis: {
            axisLabel: { show: false },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: [
            {
                type: 'bar',
                barWidth: configObj.barWidth + 2,
                barGap: '-100%',
                yAxisIndex: 1,
                data: data3,
                itemStyle: {
					barBorderRadius: [
						configObj.barWidth / 2,
						0,
						0,
						configObj.barWidth / 2
					],
					borderColor: configObj.color[2],
					borderWidth: 1,
					color: 'rgba(0,0,0,0)'
                },
                silent: true
            },
            {
                type: 'bar',
                barWidth: configObj.barWidth + 2,
                barGap: '-100%',
                data: data2,
                yAxisIndex: 1,
                itemStyle: {
					barBorderRadius: [
						0,
						configObj.barWidth / 2,
						configObj.barWidth / 2,
						0
					],
					borderColor: configObj.color[2],
					borderWidth: 1,
					color: 'rgba(0,0,0,0)'
                },
                label: {
                    show: true,
                    position: 'insideRight',
                    color: getFontColor(),
                    padding: [0, 2, 0, 0],
                    formatter: function (o) {
                        let v = series[o.dataIndex].value;
                        let s = v + configObj.unit;
                        s = v > 0 ? '+' + s : s;
                        return s;
                    }
                },
                silent: true
            },
            {
                type: 'bar',
                barGap: '-100%',
                barWidth: configObj.barWidth,
                data: series
            }
        ]
    };
    if (opt) {
        _merge(option, opt);
    }

    return option;
};

/**
 * 资产建设图
 * @param {[]} data 图表数据 必须
 * @param {Number} data[i].name 项目名称，显示在y轴 必须
 * @param {Number} data[i].time1 数值，统计项目1的年份时间 必须
 * @param {Number} data[i].time2 数值，统计项目2的年份时间 必须
 * @param {Object} configObj 配置项 可选
 * @param configObj.el 图表绑定的dom元素 可选
 * @param {Number} configObj.label1 数值，统计项目1名称 默认值"建设时间"
 * @param {Number} configObj.label2 数值，统计项目2名称 默认值"数据上传时间"
 * @param {[]} configObj.color 颜色 可选
 * @param {Number} configObj.barWidth 条纹宽度 可选 默认20
 * @param {Object}  opt 自定义图表option中的属性 可选
 * @return {Object} 图表配置项
 * */
export const renderAssetsBar = (data, configObj, opt) => {
    configObj.barWidth = configObj.barWidth || 16;
    configObj.color = configObj.color || ['#04556b', '#1cc4d8'];
    let data1 = [];
    let data2 = [];
    let yAxis = [];
    let max = new Date().getFullYear() + 1;
    data.forEach((v) => {
        yAxis.push(v.name);
        if (v.time1 && !isNaN(v.time1)) {
            data1.push(max - v.time1);
        } else {
            data1.push('');
        }

        if (v.time2 && !isNaN(v.time2)) {
            data2.push(max - v.time2);
        } else {
            data2.push('');
        }
    });
    //let n = Math.max(...data1, ...data2);
    //n = n > 5 ? n : 5;
    let option = {
        legend: LEGEND(),
        grid: {
            containLabel: true,
            left: '10%'
        },
        tooltip: {
            ...TOOLTIP(),
            formatter: function (v) {
                return `${v.seriesName}：${max - v.value}年`;
            }
        },
        yAxis: {
            type: 'category',
            data: yAxis,
            inverse: true,
            offset: 50,
            axisLabel: {
                textStyle: {
                    fontSize: CONFIG.FONT_S,
                    color: getFontColor()
                },
                interval: 0,
                align: 'left'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        xAxis: {
            min: 0,
            //max: n,
            inverse: true,
            axisLabel: {
                textStyle: {
                    fontSize: CONFIG.FONT_S
                },
                //interval: 0,
                formatter: function (v) {
                    if (v === 0) {
                        return '';
                    }
                    return max - v;
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: [
            {
                name: configObj.label1 || '建设时间',
                type: 'bar',
                barWidth: configObj.barWidth,
                barGap: '-100%',
                data: data1,
                itemStyle: {
					barBorderRadius: [
						configObj.barWidth / 2,
						0,
						0,
						configObj.barWidth / 2
					],
					color: configObj.color[0]
                },
                z: 5
            },
            {
                name: configObj.label2 || '数据上传时间',
                type: 'bar',
                barWidth: configObj.barWidth,
                data: data2,
                itemStyle: {
					barBorderRadius: [
						configObj.barWidth / 2,
						0,
						0,
						configObj.barWidth / 2
					],
					color: configObj.color[1]
                },
                z: 10
            }
        ]
    };

    if (opt) {
        _merge(option, opt);
    }

    return option;
};

export const renderMap = (data, configObj, opt) => {
    let option = {
        xAxis: {},
        yAxis: {},
        series: []
    };

    if (opt) {
        _merge(option, opt);
    }

    return option;
};