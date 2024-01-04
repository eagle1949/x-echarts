<!-- @format -->

<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { waterPolochart } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'EWaterPolo',
    mixins: [mixin],
    props: {
        data: {
            // type: Array,
            default: function() {
                return {};
            }
        }
    },
    methods: {
        initChart() {
            let obj = {
                data: this.data
            };
            Object.assign(obj, this.config);
            return waterPolochart(obj);
        }
    }
};
</script>

<style scoped></style>
