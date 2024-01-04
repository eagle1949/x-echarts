<!-- @format -->

<!--圆柱图-->
<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderSanKey } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'ESankey',
    mixins: [mixin],
    methods: {
        initChart() {
            return renderSanKey(this.data, this.config);
        }
    }
};
</script>

<style scoped></style>
