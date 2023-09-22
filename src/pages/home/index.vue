<template>
  <Header></Header>

  <!-- home
    <el-button type="danger">Danger</el-button> -->

  <div class="base">

    <div class="content">
      <Banner @bannerIsClick="bannerClick"></Banner>
      <Search/>
      <Level></Level>
    </div>
  </div>
</template>


<script setup lang="ts">
 
import Header from '@/components/header/index.vue'
import Banner from '@/components/banner/index.vue'
import Search from '@/components/Search/index.vue'
import Level from './level.vue'


console.log('-----------------------------------------')
 

const bannerClick = (item:any) => {
  console.log('bannerClick====== ', item)
}





</script>


<style scoped  lang="scss">
.base {
  margin-top: 70px;
}

.content {
  margin: 0 auto;
  // color: palevioletred;
  width: 1200px;
  height: 2000px;
}
</style>