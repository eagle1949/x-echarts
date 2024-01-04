<!-- @format -->

<!--圆柱图-->
<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderCylinderBar } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'ECylinderBar',
    mixins: [mixin],
    methods: {
        initChart() {
            return renderCylinderBar(this.data, this.config);
        }
    }
};
</script>

<style scoped></style>
