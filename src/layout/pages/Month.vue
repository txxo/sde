

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

<div ref="div" @click="()=>show()" class="month">Jun 2022</div>


<UsageView v-if="flag"/>
</template>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.btn {
  font-size: 30px;
  cursor: pointer;
}

input[type='checkbox'] {
  appearance: none;
  margin: 50px;
  border: 10px solid #c1c1c1;
  border-radius: 50px;
  width: 150px;
  height: 70px;
  background: #888;
  position: relative;
  cursor: pointer;
  transition: 0.6s;


}

input[type='checkbox']::after {
  content: '';
  display: block;
  width: 60px;
  height: 60px;
  position: absolute;
  border-radius: 60px;
  left: -5px;
  top: -5px;
  background: linear-gradient(to bottom, #d1d1d1, #9e9e9e);
  box-shadow: 0px 2px 5px 1px #000;
  transition: 0.6s;
}


input[type='checkbox']:checked:after {
  left: 75px;

}

input[type='checkbox']:checked {
  background: lightskyblue;
}


span {
  display: inline-block;
}


.heart-left,
.heart-right {
  width: 50px;
  height: 80px;
  background-color: pink;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.heart-left {
  transform: rotateZ(-45deg);
}

.heart-right {
  transform: translateX(-28px) rotateZ(45deg);

}

@keyframes beat {
  20% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

.heart {
  animation: beat 1.5s infinite;
}


.month {
  background-color: skyblue;
  height: 15%;
  width: 50%;
  margin: 10px auto;
  font-size: 45px;
  cursor: pointer;
  border-radius: 50px;
  text-align: center;
  transition: 1s;
  color: white;
}
.month:hover{
  background-color: skyblue;
  font-size: 30px;
  font-weight: bold;
  color: white;
}
</style>