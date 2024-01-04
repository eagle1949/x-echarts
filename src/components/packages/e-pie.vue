<!-- @format -->

<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderPie } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'EPie',
    mixins: [mixin],
    data() {
        return {
            businessConfigs: {
                waterGrades: {
                    color: 'waterGradesColor',
                    type: 'ring'
                },
                merge1n2WaterGrades: {
                    color: 'merge1n2WaterGradesColor',
                    type: 'ring'
                },
                eutrophicationColor: {
                    color: 'eutrophicationColor',
                    type: 'ring'
                }
            }
        };
    },
    props: {
        data: {
            type: Array,
            default: function() {
                return [];
            }
        },
        business: {
            type: String
        }
    },
    methods: {
        initChart() {
            let businessConfig = this.businessConfigs[this.business] || {};
            let config = Object.assign({}, businessConfig, this.config);
            return renderPie(this.data, config);
        }
    }
};
</script>

<style scoped></style>
