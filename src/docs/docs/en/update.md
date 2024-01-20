<!--
 * @Author: XieGao
 * @Date: 2022-03-11 09:11:00
 * @LastEditors  : XieGao
 * @LastEditTime : 2022-03-11 10:10:00
 * @Description: 
 -->

## 3.1.0
默认字体图例  16
## 3.0.15 版本跟新
- dark 颜色调整：（现新增到16颜色）#2ad9ff、#00ecb5、#f8dc4f、#0098ff、#f68b17、#f7449c、#4d76eb、#9465f4、#acdb1f、#d4c800、#1bc912、#567eff、#5a40fd、#ff7140、#fdff32、#2ae568
- 饼图优化，新增新style
- 柱状图新增圆角style
- liquidFill优化，删除不常用style
- guage优化，删除不常用style
- stripeBar新增style
- 新增wordcloud组件

## 3.0 版本说明
x-echarts3.X 对比 x-echarts2.X 有如下更新
 - 依赖的echarts从^4.6.0升级为^5.2.0。
 - 主题配色修改。
 - 各图表styleUI优化。
 - 全局配置中，有以下修改及添加项：
   - 主题颜色配置项修改；
   - 是否显示工具栏修改默认不显示；
   - 添加字体设置；
   - 添加直角坐标系边距设置，作用于折线图、柱状图、堆叠图、热力图等；
   - 支持图例形状及大小的配置；
   - 添加监听事件配置；
   - 添加tooltip提示框背景颜色、边框颜色、文字颜色配置。
 - 饼图添加label、legend格式化配置；添加纵向图例配置；圆环图style修改。
 - 折线图默认连接空数据。
 - 柱状图添加宽度的配置；增加圆柱、棱柱、模拟立体柱状图style，部分支持横向展示。
 - 堆叠图添加宽度配置，添加圆柱、棱柱形堆叠图。
 - liquidFillstyle修改，配置项修改。
 - guage新增style类型，空气aqiguagestyle优化。
 - stripeBar默认style修改，新增style类型。




[查看x-echarts2.X 使用文档](http://www.bovosz.com/uidemo/index.html#/intro)