<template>
    <div><p>v-if 条件渲染指令</p></div>
    小明学习成绩评定等级为：
    <p v-if="type==='A'">优秀</p>
    <p v-else-if="type==='B'">良好</p>
    <p v-else>差</p>
    <button @click="type==='A'">切换成绩为优秀</button><br></br>
    <button @click="type==='B'">切换成绩为良好</button><br></br>
    <button @click="type==='C'">切换成绩为差</button><br></br>
</template>

<script setup>
import { ref } from 'vue'

const type = ref('B')
</script>

<style scoped>
p{
    color: red;
    font-size: 20px;
    font-weight: bold;
}
</style>