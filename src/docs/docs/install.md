<!--
 * @Author: Caijw
 * @Date: 2020-01-06 17:19:00
 * @LastEditors: Caijw
 * @LastEditTime: 2020-03-13 12:38:07
 * @Description: 
 -->
# 安装和引入
## 配置私服
本项目是发布到公司私服上，所以要先配置环境，新建.npmrc文件(和package.json同级)
```$xslt
registry=http://nexus.szboanda.com:8081/repository/npm-all
```

## 安装依赖
```
npm install p-charts || yarn add p-charts
```

## main.js 中引入
```
import powerDataChart from 'p-charts';
Vue.use(powerDataChart); // Vue3中 app.use(powerDataChart);
```

## 移动端使用说明
 - 使用uniapp的移动端可使用p-charts-mobile  当前最新版本1.0.3
 - p-charts-mobile依赖lime-echart ^1.0.1
 - 可在pages.json中配置easycom
```
"easycom": {
	//...其他配置
	"^l-echart": "lime-echart/components/lime-echart/index.vue",
	"^p-(.*)": "p-charts-mobile/packages/p-$1.vue"
}
```

