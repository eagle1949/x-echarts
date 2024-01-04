/** @format */

import CONFIG from '../config/config';
// import { _merge } from 'lodash';
// import { _debounce } from 'lodash';
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
};
let _debounce = function(func, wait) {  
	let timeout;  
	return function() {  
	  const context = this;  
	  const args = arguments;  
	  clearTimeout(timeout);  
	  timeout = setTimeout(function() {  
		func.apply(context, args);  
	  }, wait);  
	};  
  };
import { getNoDataOption, getFontColor } from '../../src/util/nomalChart';
import util from './util';
// let echarts = require('echarts');
import * as echarts from 'echarts';

export default {
    data() {
        return {
            finalOpt: null,
            // chart: null,
            defaultOpt: {
                textStyle: {
                    color: getFontColor(),
                    fontSize: CONFIG.FONT_S,
                    fontFamily: CONFIG.FONT_FAMILY
                },
                toolbox: {
                    show: CONFIG.SHOW_TOOLBOX,
                    feature: {
                        saveAsImage: {
                            backgroundColor: CONFIG.BG_COLOR
                        },
                        restore: {}
                    },
                    iconStyle: {
                        borderColor: getFontColor()
                    }
                }
            },
            className: ''
        };
    },
    props: {
        // echarts图标的各种数据项目
        data: {
            // type: Object,
            default: function () {
                return {
                    xAxisData: [],
                    legendData: [],
                    seriesData: []
                };
            }
        },
        // 替换echarts的配置项
        option: {
            type: Object,
            default: function () {
                return {};
            }
        },
        //配置项
        config: {
            type: Object,
            default: function () {
                return {};
            }
        },
        showOption: {
            type: Boolean,
            default: false
        },
        autoresize: Boolean,
        onClick: {
            type: Function
        }
    },
    watch: {
        data: {
            handler() {
                this.reloadChart();
            },
            deep: true
        },
        option: {
            handler() {
                this.reloadChart();
            },
            deep: true
        },
        config: {
            handler() {
                this.reloadChart();
            },
            deep: true
        }
    },
    created() {
        // reloadChart 延迟调用，在同时 watch 属性：data, option, config 的时候，可能调用组件时会修改这三个属性，会导致重复调用三次
        // 使用 _debounce 来防抖动，只让最后一次调用生效，减少频繁刷新。
        this.reloadChart = _debounce(this.refreshChart, 100);
    },
    mounted() {
        this._renderChart();
    },
    methods: {
        setStyle(option){
            this.className = option.series ? '' : 'p-chart-no-data';
        },
        getOption() {
            return this.finalOpt;
        },
        refreshChart() {
            try {
                let opts = this.initChart();

                if (opts) {
                    let option = util.deepClone(this.option);
                    //let option = JSON.parse(JSON.stringify(this.option));
                    //避免无数据时 option中的series配置项（没有type）导致报错
                    if (!opts.series || !opts.series[0]) {
                        delete option.series;
                    }

                    opts = _merge({}, this.defaultOpt, opts, option);
              

                    //_merge(opts, this.defaultOpt, this.option);
                    this.chart.setOption(opts, true);
                    this.setStyle(opts);

                    // 判断是否打印配置
                    if (this.showOption) {
                        console.log(JSON.stringify(opts));
                        console.log(opts);
                    }
                    this.finalOpt = opts;
                }
            } catch (e) {
    
                console.warn(e); //打印错误提示
                let opts = getNoDataOption(); //已异常时使用无数据内容代替
                this.chart.setOption(opts, true);
                this.setStyle(opts);

                // 判断是否打印配置
                if (this.showOption) {
                    console.log(JSON.stringify(opts));
                    console.log(opts);
                }
                this.finalOpt = opts;
            }
        },
        _renderChart() {
            this.chart = echarts.init(this.$refs.chart);
            /*  this.chart.setOption_ = function(opts, bl){
                this.chart.setOption(opts, bl);
            } */

            // 渲染echarts
            this.refreshChart();

            CONFIG.EVENTS.forEach((event) => {
                this.chart.on(event, (params) => {
                    this.$emit(event, params);
                });
            });

            if (window.Vuep) {
                this.chart.on('dblclick', () => {
                    console.log(JSON.stringify(this.finalOpt));
                });
            }
        }
    }
};
