<template>
    <p>v-bind 属性绑定指令</p>
    <P><input type="text" v-bind:placeholder="username"></input></P>
    <P><input type="password" v-bind:placeholder="password"></input></P>
</template>

<script setup>
const username = "请输入用户名"
const password = "请输入密码"
</script>