

<script setup>
import { ref } from 'vue';
import UsageView from './UsageView.vue';
let flag = ref(false)
let div = ref(null)
function show(){
  flag.value = true
  div.value.style.display = 'none'
}

</script>
<template>

<div ref="div" @click="()=>show()" class="month">Facilities Usage<br>June 2022</div>


<UsageView v-if="flag"/>
</template>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}



.month {
  background-color: skyblue;
  height: 100px;

  margin: 10px auto;
  font-size: 25px;
  cursor: pointer;
  border-radius: 10px;
  text-align:center;
  transition: 1s;
  color: white;
  box-sizing: border-box;
  word-wrap: break-word;
  inline-size: 150px;
  font-weight: bold;
  
}
.month:hover{
  background-color: pink;
  font-weight: bold;
  color: white;
}

</style>