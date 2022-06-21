<template>
<div class="logo">
  <img src="@/assets/apple-touch-icon.png" alt="">
  <h2 v-show="!collapsed" class="title"></h2>
</div>
</template>



<script setup>
defineProps(['collapsed'])
</script>







<style lang="scss" scoped>
.logo {
  padding-left: 14px;
  display: flex;
  align-items: center;
  padding: 14px;
  overflow: hidden;
  height: 64px;
  white-space: nowrap;
  img {
    height: 32px;
  }

  .title {
    font-size: 20px;
    color: white;
    margin-bottom: 0;
  }
}
</style>