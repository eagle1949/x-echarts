<!-- @format -->

<!--资产建设图-->
<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderAssetsBar } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'EAssetsBar',
    mixins: [mixin],
    methods: {
        initChart() {
            return renderAssetsBar(this.data, this.config);
        }
    }
};
</script>

<style scoped></style>
