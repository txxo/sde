<script setup>
import logoBar from '@/layout/components/logoBar/index.vue'
import menuBar from '@/layout/components/menuBar/index.vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { isMobile } from '@/utils/isMobile.js'

const collapsed = ref(false)

const autoWidth = computed(() => {

  if (isMobile()) {
    if (collapsed.value) {
      return '64px'
    } else {
      return '0px'
    }
  }




  if (!isMobile() && !collapsed.value) {
    return '200px'
  } else {
    return '64px'
  }

})




</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside :style="'width:' + autoWidth">
        <logoBar :collapsed="collapsed" />
        <menuBar :collapsed="collapsed" />
      </el-aside>
      <el-container>
        <el-header>
          <el-row>
            <!--側邊欄按鈕 展開摺叠-->
            <el-icon style="font-size:26px; cursor: pointer;" @click="() => { collapsed = !collapsed }">
              <component :is="collapsed ? Expand : Fold" />

            </el-icon>
          </el-row>
          <div style="text-align: center; width: 100%;"><img height="50" src="@\assets\hkgta.png" alt=""></div>

        </el-header>

        <el-main>
          <Suspense>
            <RouterView></RouterView>
          </Suspense>

        </el-main>

      </el-container>
    </el-container>
  </div>
</template>


<style lang="scss">
.common-layout {
  display: flex;
  height: 100vh;
}


.el-header {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: $menuBg;
  color: #333;
  text-align: center;
  line-height: 200px;
  transition: 0.6s;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;

  padding: 0;
}

img{
  margin-top: 20px;
}



</style>