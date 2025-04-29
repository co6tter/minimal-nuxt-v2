<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    <h1>About Us</h1>
    <p>アバウトページ</p>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
