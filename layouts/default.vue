<script setup>
// レイアウトのロジック
</script>

<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </header>
    <slot />
    <footer>
      <p>&copy; hello-newworld.com</p>
    </footer>
  </div>
</template>
