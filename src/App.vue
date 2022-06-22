<script setup>



import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ToolboxComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

import { provide } from 'vue';

echarts.use([
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer
]);

provide('echarts', echarts)




</script>

<template>

    <RouterView></RouterView>



</template>

<style lang="scss">
html,
body {

  margin: 0;
  box-sizing: border-box;
}



</style>
