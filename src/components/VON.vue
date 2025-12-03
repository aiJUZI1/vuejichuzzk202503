<template>
    <p>v-on</p>
    <button v-on:click="showInfo">输出信息</button>
</template>

<script setup>
const showInfo = () => {
    console.log("鼠标点击")
    confirm("你点击了按钮")
}
</script>