<template>
  <template v-for="(item, index) in post" :key="item">
    <Chart :data="item" :index="index" />
  </template>
</template>
<script setup>
import Chart from '@/layout/components/chartPart/index.vue'
const post = await fetch('data.json').then(r => r.json())
</script>