<template>

  <el-menu class="el-menu" text-color='#fff' active-text-color='#409eff' :collapse="collapsed">


    <el-menu-item @click="goTo('chart')" index="1">
      <el-icon>
        <House />
      </el-icon>
      <template #title>SDE統計</template>
    </el-menu-item>




    <el-menu-item @click="goTo('other')" index="2">
      <el-icon>
        <icon-menu />
      </el-icon>
      <template #title>其它功能</template>
    </el-menu-item>


    <!-- <el-menu-item index="3">
      <el-icon>
        <document />
      </el-icon>
      <template #title></template>
    </el-menu-item>


    <el-menu-item index="4">
      <el-icon>
        <setting />
      </el-icon>
      <template #title></template>
    </el-menu-item> -->


  </el-menu>

</template>

<script setup>
import { useRouter } from 'vue-router';
import {

  Menu as IconMenu,

  House
} from '@element-plus/icons-vue'
defineProps(['collapsed'])
const router = useRouter()

function goTo(path) {
  router.push({
    path: path
  })
}



</script>

<style lang="scss">
.el-menu {

  background-color: $menuBg;
  border: none;

}
</style>