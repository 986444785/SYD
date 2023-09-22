<template>
    <div class="h-content">


        <div class="left">

            <img src="http://syt.atguigu.cn/_nuxt/img/logo.7086376.png">
            <p>尚医通 预约挂号统一平台</p>

        </div>
        <div class="right">

            <span>帮助中心</span>
            <span>登录/注册</span>
        </div>

    </div>
</template>


<script setup lang="ts">


</script>


<style scoped lang="scss">
.h-content {
    position: fixed;
    top: 0;
    left: 50%;
    margin-left: -600px;
    width: 1200px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    z-index: 100;

    .left {
        display: flex;
        // margin-top: 10px;
        align-items: center;
        justify-content: center;

        img {
            margin-right: 8px;
            width: 50px;
            height: 50px;
        }

        p {
            font-size: 20px;
            color: lightblue;
        }
    }

    .right {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            margin-right: 8px;
        }

        span:hover {
            color: lightblue;
            cursor: pointer;
        }
    }


}</style>