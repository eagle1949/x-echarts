<!-- @format -->

<!--雷达图-->
<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderRadar } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'ERadar',
    mixins: [mixin],
    methods: {
        initChart() {
            return renderRadar(this.data, this.config);
        }
    }
};
</script>

<style scoped></style>
