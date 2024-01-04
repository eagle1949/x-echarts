<!-- @format -->

<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderBar, renderSimulated3DBar } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'EBar',
    mixins: [mixin],
    data() {
        return {
            businessConfigs: {}
        };
    },
    props: {
        business: {
            type: String
        }
    },
    methods: {
        initChart() {
            let businessConfig = this.businessConfigs[this.business] || {};
            let config = Object.assign({}, businessConfig, this.config);
            if(this.config.type === 'simulated3D'){
                return renderSimulated3DBar(this.data, config);
            }else{
                return renderBar(this.data, config);
            }
            
        }
    }
};
</script>

<style scoped></style>
