<template>
    <el-carousel height="350px">
        <el-carousel-item v-for="item in 4" :key="item">
            <img src="../../assets/img/web-banner1.b91d1a1.png" @click="bannerClick(item)">

        </el-carousel-item>
    </el-carousel>
</template>


<script setup lang="ts">

const emits = defineEmits(['bannerIsClick'])

const bannerClick = (item: any) => {
    // console.log('bannerClick', item)
    emits('bannerIsClick', item)
}

</script>

<style scoped lang="scss">
img {

    height: 100%;

}
</style>