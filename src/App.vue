<script>
export default {
	created(){
		// this.$xEchart.setChartConfig({
        //       THEME_COLOR: 'dark'
        //   });
	},
	data () {
      return {
        pieData: [
            { name: 'A类', value: 5 },
            { name: 'B类', value: 5 },
            { name: 'C类', value: 30 },
            { name: 'D类', value: 20 },
            { name: 'E类', value: 10 },
            { name: 'F类', value: 2 }
        ]
      }
    }
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
	<e-pie :data="pieData" style="width: 400px; height: 400px;"></e-pie>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
