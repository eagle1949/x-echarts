<!-- @format -->

<!--条纹图-->
<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderStripeBar, renderStripeBar2, renderStripeBar3 } from '../src/util/nomalChart.js';
import mixin from '../src/util/mixin';
export default {
    name: 'EStripeBar',
    mixins: [mixin],
    methods: {
        initChart() {

			if(this.config.percentBar){
                return renderStripeBar3(this.data, this.config);
            }

            if(this.config.pictorial){
                return renderStripeBar2(this.data, this.config);
            }
            return renderStripeBar(this.data, this.config);
            
        }
    }
};
</script>

<style scoped></style>
