/** @format */
// import noDataPng from '../images/nodata.png';

export default {
    //主题颜色
    THEME_COLOR: 'light',
    //echarts事件
    EVENTS: [
        'click',
        'dblclick',
        /* 'mouseover',
        'mouseout',
        'mousemove',
        'mousedown',
        'mouseup' */
    ],
    //字体
    FONT_FAMILY: 'sans-serif',
    FONT_S: 16,
    FONT_M: 20,
    FONT_L: 28,
    //字体颜色
    FONT_COLOR: '',
    FONT_COLOR_DARK: '#fff',
    FONT_COLOR_LIGHT: '#666',
    //轴线颜色
    BORDER_COLOR: '',
    BORDER_COLOR_DARK: '#0169a2',
    BORDER_COLOR_LIGHT: '#c8c8c8',
    //颜色
    COLOR: null,
    COLOR_DARK: [
        '#4B97FF', '#7FFFB7', '#FDDD60', '#FF6E76', '#58D9F9', '#05C091', '#FF8A45', '#8D48E3', '#DD79FF'
    ],
    COLOR_LIGHT: [
        '#5470C6', '#91CC75', '#FACB59', '#EE6666', '#73C0DE', '#3BA272', '#FD8C56', '#9A60B4', '#EA7CCC'
    ],
    //水质Ⅰ~ 劣Ⅴ类颜色
    waterGradesColor: [
        '#44c5fd',
        '#51a5fd',
        '#73bb31',
        '#eebd15',
        '#f88e17',
        '#ee3b5b'
    ],
    //合并1，2类的水质级别颜色
    merge1n2WaterGradesColor: [
        '#44c5fd',
        '#73bb31',
        '#eebd15',
        '#f88e17',
        '#ee3b5b'
    ],

    //水质Ⅰ~ 劣Ⅴ类
    waterGradesLabel: ['Ⅰ类', 'Ⅱ类', 'Ⅲ类', 'Ⅳ类', 'Ⅴ类', '劣Ⅴ类'],

    //富营养状态等级颜色
    eutrophicationColor: [
        '#44c5fd',
        '#73bb31',
        '#eebd15',
        '#f88e17',
        '#ee3b5b'
    ],

    //空气质量 优 ~ 严重污染 颜色
    airGradesColor: [
        '#24bd5d',
        '#d8bc37',
        '#f87c12',
        '#f60000',
        '#94004b',
        '#6f001f'
    ],

    //是否显示工具栏
    SHOW_TOOLBOX: false,

    //保存为图片时的填充背景色
    BG_COLOR: 'rgba(0,0,0,0)',
    // TEXT_NONE: '暂时没有数据',
    // IMG_NONE: '',
    // IMG_NONE_W: 202,
    // IMG_NONE_H: 154,

    //边距
    GRID: {
        containLabel: true,
        top: '50',
        left: '5%',
        right: '5%',
        bottom: '5%'
    },

    LEGEND_ICON: 'rect',//图例图标
    LEGEND_ICON_SIZE: 16,//图例大小
    TOOLTIP_BG_COLOR: '#fff',//提示框背景色
    TOOLTIP_BORDER_COLOR: '#c8c8c8',//提示框边框颜色
    TOOLTIP_FONT_COLOR: '#666'//提示框文本颜色
};
