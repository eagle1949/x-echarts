<!-- @format -->

<!--热力图-->
<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderHeatmap } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'EHeatmap',
    mixins: [mixin],
    data() {
        return {
            businessConfigs: {
                waterGrades: {
                    type: 'piecewise',
                    categories: ['Ⅰ类', 'Ⅱ类', 'Ⅲ类', 'Ⅳ类', 'Ⅴ类', '劣Ⅴ类'],
                    color: 'waterGradesColor'
                }
                /*'merge1n2WaterGrades': {
                      type: 'piecewise',
                      categories: ['Ⅰ~Ⅱ类', 'Ⅲ类', 'Ⅳ类', 'Ⅴ类', '劣Ⅴ类'],
                      color: 'merge1n2WaterGradesColor'
                  },*/
            }
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
            return renderHeatmap(this.data, config);
        }
    }
};
</script>

<style scoped></style>
