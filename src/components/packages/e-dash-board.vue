<!-- @format -->

<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { dashboardchart, dashboardchart1, dashboardchart2, dashboardchart3 } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'EDashBoard',
    mixins: [mixin],
    props: {
        data: {
            // type: Array,
            default: function() {
                return {};
            }
        }
    },
    data(){
        return {
            angle: 0,
            timer: null
        }
    },
    mounted() {
        this._renderChart();
         if(this.config.type === '1'){
            //  this.clearTimer();
            this.timer = setInterval(()=>{
                this.angle += 3;
                this.refreshChart();
            }, 200);
         }
    },
    beforeDestroy(){
        this.clearTimer();
    },
    beforeUnmount(){
        this.clearTimer();
    },
    methods: {
       
        initChart() {
            let obj = {
                data: this.data
            };
            Object.assign(obj, this.config);
            if(this.config.type === '1'){
                //样式1
                return dashboardchart1(obj, this.angle)
            }else if(this.config.type === '2'){
                //样式2
                return dashboardchart2(obj)
            }else if(this.config.type === '3'){
               return dashboardchart3(obj)
            }

            //默认样式
            return dashboardchart(obj);
        },
        clearTimer(){
            if(this.timer){
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    }
};
</script>

<style scoped></style>
