<!-- @format -->

<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderLine } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'ELine',
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
            return renderLine(this.data, config);
        }
    }
};
</script>

<style scoped></style>
