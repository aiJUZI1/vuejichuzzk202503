<template>
    <div>v-show 条件渲染指令 zzk-20251203</div>
    <p v-if="flag">通过v-if控制的元素</p>
    <p v-show="flag">通过v-show控制的元素</p>
    <button @click="flag=!flag">显示/隐藏按钮</button>
</template>

<script setup>
import { ref } from 'vue';
const flag = ref(true)
</script>