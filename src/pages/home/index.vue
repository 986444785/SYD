<template>
    home
    <el-button type="danger">Danger</el-button>
</template>


<script setup lang="ts">
import { reject } from 'lodash';



// function reuqest(num:number) {
//     var pro = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('ok' + num)
//         }, 1000 * num);
//         // reject(num)
//     })
//     return pro
// }

// reuqest(1).then((res) => {
//     console.log('1111',res)
//     return reuqest(2)
// }).then((res) => {
//     console.log('2222',res)

// }).catch((err)=>{
//     console.log('333',err)
// })

var age = 18

console.log('开始1')

const pro2 = new Promise((reslove, reject) => {

    console.log('中间----2')

    reslove('回调 ');
})
console.log('中啊啊啊啊啊')

pro2.then((res) => {
    console.log('收到回调 4', res);
})

console.log('结束3')


console.log('-----------------------------------------')



Promise.resolve('Success!')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data)
    return data
  })
  .then(console.log)

 






</script>


<style scoped  lang="scss"></style>