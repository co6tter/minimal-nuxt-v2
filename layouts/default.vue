<script setup>
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const handleLogout = () => {
  authStore.logout();
  navigateTo("/login");
};
</script>

<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <button v-if="authStore.isAuthenticated" @click="handleLogout">
        Logout
      </button>
      <NuxtLink v-else to="/login">Login</NuxtLink>
    </header>
    <slot />
    <footer>
      <p>&copy; hello-newworld.com</p>
    </footer>
  </div>
</template>
