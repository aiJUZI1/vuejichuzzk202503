<template>
    <p>v-text内容渲染指令--zzk</p>
    {{ message }}
    <div v-html="message2"></div>
    <div v-text="message1"></div>
</template>

<script setup>
const message = '<h1>v-text不会解析HTML内容</h1>'
const message1 = '<h1>双大括号不会解析HTML内容</h1>'
const message2 = '<h1>v-html会解析HTML内容</h1>'
</script>
