<template>
    <p>v-model 双向数据绑定指令</p>
    请输入姓名：<input type="text" v-model="name"></input>
    <div>姓名：{{name}}</div>
    <input type="text" v-model="n1">+
    <input type="text" v-model="n2">=
    {{n1+n2}}
</template>

<script setup>
import { ref } from 'vue';
const name = ref('zzk-20251203');
const n1 = ref(1);
const n2 = ref(2);
</script>