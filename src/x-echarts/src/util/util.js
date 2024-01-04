/**
 * /*
 *
 * @format
 * @Author: Caijw
 * @LastEditors: Caijw
 * @Description: 工具类
 * @Date: 2019-03-28 08:53:24
 * @LastEditTime: 2019-03-28 11:30:49
 */

export default new class Utils {
    constructor() {
        // 主要色调（用在图表当中）
        this.pColor = [
            '#a9abff',
            '#ff8896',
            '#f66bc7',
            '#6c93ee',
            '#79c628',
            '#2bcba7',
            '#f7a23e',
            '#27bae7',
            '#cb79ff',
            '#f95b5a',
            '#ccaf27',
            '#38b99c'
        ];
    }

    // 替换污染物下标
    replacePltName(value) {
        value = value || '';
        let labelObj = {
            'PM2.5': 'PM₂.₅',
            PM25: 'PM₂.₅',
            PM10: 'PM₁₀',
            O3: 'O₃',
            NO2: 'NO₂',
            SO2: 'SO₂'
        };
        return value.replace(/[A-Z]+[0-9]+\.*[0-9]*/g, function() {
            return labelObj[arguments[0]] || arguments[0];
        });
    }

    //pollutionName 污染物名称,dateType 筛选类型
    getlevelValueByPollution(pollutionName) {
        let num0, num1, num2, num3, num4, num5, num6;
        switch (pollutionName.toUpperCase()) {
            case 'SO2':
                num0 = 0;
                num1 = 75;
                num2 = 150;
                num3 = 500;
                num4 = 650;
                num5 = 800;
                num6 = 1600;
                break;
            case 'NO2':
                num0 = 0;
                num1 = 50;
                num2 = 100;
                num3 = 200;
                num4 = 700;
                num5 = 1200;
                num6 = 2340;
                break;
            case 'CO':
                num0 = 0;
                num1 = 2.5;
                num2 = 5;
                num3 = 10;
                num4 = 35;
                num5 = 60;
                num6 = 90;
                break;
            case 'O3':
                num0 = 0;
                num1 = 80;
                num2 = 160;
                num3 = 200;
                num4 = 300;
                num5 = 400;
                num6 = 800;
                break;
            case 'PM10':
                num0 = 0;
                num1 = 25;
                num2 = 50;
                num3 = 150;
                num4 = 250;
                num5 = 350;
                num6 = 420;
                break;
            case 'PM25':
                num0 = 0;
                num1 = 17.5;
                num2 = 35;
                num3 = 75;
                num4 = 115;
                num5 = 150;
                num6 = 250;
                break;
            case 'AQI':
                num0 = 0;
                num1 = 25;
                num2 = 50;
                num3 = 100;
                num4 = 150;
                num5 = 200;
                num6 = 300;
                break;
            default:
                break;
        }
        return [num0, num1, num2, num3, num4, num5, num6];
    }

    //传入污染物的值，然后对应的颜色
    //getLevelPollution('PM10', 100)
    getLevelPollution(pollutionName, value) {
        let color = '';
        let txt = '';
        let num0, num1, num2, num3, num4, num5, num6;
        let result = this.getlevelValueByPollution(pollutionName);
        num0 = result[0];
        num1 = result[1];
        num2 = result[2];
        num3 = result[3];
        num4 = result[4];
        num5 = result[5];
        num6 = result[6];
        if (value > num0 && value <= num1) {
            color = '#24bd5d';
            txt = '优';
        } else if (value >= num1 && value <= num2) {
            color = '#24bd5d';
            txt = '优';
        } else if (value > num2 && value <= num3) {
            color = '#d8bc37';
            txt = '良';
        } else if (value > num3 && value <= num4) {
            color = '#f87c12';
            txt = '轻度';
        } else if (value > num4 && value <= num5) {
            color = '#f60000';
            txt = '中度';
        } else if (value > num5 && value <= num6) {
            color = '#94004b';
            txt = '重度';
        } else if (value > num6) {
            color = '#6f001f';
            txt = '严重';
        } else {
            color = '#666666';
        }
        return {color:color,txt:txt};
    }

    /**
     * 获取时间单位中文
     *
     * @param type
     * @returns {string}
     *
     * @author 黄冠豪
     */
    convertDateTypeToUnit(type) {
        switch (type) {
            case 'MONTH':
                return '月';
            case 'YEAR':
                return '年';
            case 'JD':
                return '季度';
            case 'LJ':
                return '月累计';
            case 'SQ':
                return '水期';
        }
        return '';
    }

    //深拷贝对象
    deepClone(data) {
        const type = this.judgeType(data);
        let obj;
        if (type === 'array') {
          obj = [];
        } else if (type === 'object') {
          obj = {};
        } else {
      // 不再具有下一层次
          return data;
        }
        if (type === 'array') {
          // eslint-disable-next-line
          for (let i = 0, len = data.length; i < len; i++) {
            obj.push(this.deepClone(data[i]));
          }
        } else if (type === 'object') {
          // 对原型上的方法也拷贝了....
          // eslint-disable-next-line
          for (const key in data) {
            obj[key] = this.deepClone(data[key]);
          }
        }
        return obj;
      }
      
      //返回数据类型
      judgeType(obj) {
        // tostring会返回对应不同的标签的构造函数
            const toString = Object.prototype.toString;
            const map = {
              '[object Boolean]': 'boolean',
              '[object Number]': 'number',
              '[object String]': 'string',
              '[object Function]': 'function',
              '[object Array]': 'array',
              '[object Date]': 'date',
              '[object RegExp]': 'regExp',
              '[object Undefined]': 'undefined',
              '[object Null]': 'null',
              '[object Object]': 'object',
            };
            if (obj instanceof Element) {
              return 'element';
            }
            return map[toString.call(obj)];
          }
}();
