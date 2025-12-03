<template>
    <p>reactive()</p>
    <div class="ReactiveS">{{ obj.message }}</div>
</template>

<script setup>
import { reactive } from 'vue'

const obj = reactive({ message: 'Hello Vue 3.0!' })

setTimeout(() => {
    obj.message = '每一个不曾起舞的日子，都是对生命的辜负!'
}, 1000)  // 建议加个延迟时间，比如1000ms
</script>

<style>
.ReactiveS {
    color: blue;
    font-size: 30px;
}
</style>