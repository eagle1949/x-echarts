<!-- @format -->

<!--变化排名条纹图-->
<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderVarietyBar } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'EVarietyBar',
    mixins: [mixin],
    methods: {
        initChart() {
            return renderVarietyBar(this.data, this.config);
        }
    }
};
</script>

<style scoped></style>
