<script setup>

import { inject, onMounted, ref } from 'vue';
//import { useCounterStore } from '../stores/counter'
const props = defineProps(['data','index'])
let chart = ref(null)
//let store = useCounterStore()
let facility = props.data.data.map(v => v.Facilities);
let usage = props.data.data.map(v => v.Usage);
let date = props.data.date
let echarts = inject('echarts')


onMounted(() => {

  function makeChart(){
  var myChart = echarts.init(chart.value);
 
  let option = {
    toolbox: {
      feature: {
        saveAsImage: {},
      }
    }
    ,
    backgroundColor: '#E9EEF3',
    textStyle: {
      color: '#000'
    },

    title: {
      text: date + 'SDE設施使用量',
      textStyle: {
        fontSize: 16,
        color: '#333'
      },
    },
    legend: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: '{b}:{c}'
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: facility


    },
    series: [
      {
        itemStyle: {
          color: '#898',
          borderRadius: [0, 7, 7, 0]
        },
        type: 'bar',
        barMinHeight: 20,
        label: {
          color: '#333',
          show: true,
          fontSize: '16',
        },
        data: usage

      }
    ]
  };



  option && myChart.setOption(option);
  }



  setTimeout(()=>{
    chart.value.style.opacity = 1
    
    
    makeChart()

    
  },(props.index)*1200)




})


</script>

<template>
  <div class="chart"  ref="chart"></div>
</template>