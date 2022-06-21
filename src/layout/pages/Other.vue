<template>
  <div>

    <h1>this page is on progress~~~~~~</h1>
    <button class="btn">Locker key<br>管理系統???</button>
    <hr>
    <span class="heart"><span class="heart-left"></span><span class="heart-right"></span></span><br>
    <input type="checkbox" name="" id="">


  </div>
</template>

<script setup>

</script>

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
</style>