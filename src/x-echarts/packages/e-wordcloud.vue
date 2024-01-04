<!-- @format -->

<!--圆柱图-->
<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderWordcloud } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'PWordcloud',
    mixins: [mixin],
    methods: {
        initChart() {
            return renderWordcloud(this.data, this.config);
        }
    }
};
</script>

<style scoped></style>