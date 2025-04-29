<script setup>
// ホームページのロジック
const { data } = await useFetch("/api/hello");
</script>

<template>
  <div>
    <h1>Welcome to Our Company</h1>
    <p>ホームページ</p>
    <p>{{ data.message }}</p>
    <NuxtLink to="/about">About Us</NuxtLink>
    <NuxtLink to="/contact">Contact Us</NuxtLink>
  </div>
</template>
