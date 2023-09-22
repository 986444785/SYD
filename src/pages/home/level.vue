<template>
<div class="l-content">
    
 <span>等级：</span>
    <li v-for="(item,index) in list" :key="index">
    {{ item }}
    </li>
 
</div>

</template>

<script setup lang="ts">
import {ref} from 'vue'

const list = ref(['1','三级甲等','三级甲等222'])


</script>

<style scoped lang="scss">
.l-content{
    display: flex;
    li{
        list-style: none;
        margin: 6px 8px;
    }
}

</style>