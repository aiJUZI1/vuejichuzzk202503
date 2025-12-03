<template>
    <h1>Ref的响应</h1>
    {{ message }}
</template>

<script setup>
import { ref } from 'vue'

// 这里必须加 const
const message = ref('我思故我在')

setTimeout(() => {
    message.value = '生活在于思考'    
}, 3000)
</script>

<style>
.Ref {
    color: red;
    font-size: 30px;
}
</style>