<!-- @format -->

<!--堆叠图-->
<template>
    <div ref="chart" :class="className"></div>
</template>

<script>
import { renderStackBar, renderPictorialStackBar } from '../src/util/nomalChart';
import mixin from '../src/util/mixin';
export default {
    name: 'EStackBar',
    mixins: [mixin],
    methods: {
        initChart() {
             if(this.config.pictorial){
                return renderPictorialStackBar(this.data, this.config);
            }
            return renderStackBar(this.data, this.config);
        }
    }
};
</script>

<style scoped></style>
