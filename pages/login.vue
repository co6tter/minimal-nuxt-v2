<script setup>
import { useAuthStore } from "~/stores/auth";
import { onMounted } from "vue";

definePageMeta({
  layout: false,
});

const email = ref("");
const password = ref("");
const authStore = useAuthStore();

const handleLogin = async () => {
  await authStore.login(email.value, password.value);
  navigateTo("/");
};

onMounted(() => {
  authStore.error = "";
});
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email:</label>
          <input id="email" v-model="email" type="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" v-model="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="authStore.error" class="error">
        {{ authStore.error }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  --primary: #7649ff;
  --primary-light: #8a60ff;
  --primary-dark: #653af4;
  --bg-light: #f5f7fb;

  display: grid;
  place-items: center;
  min-height: 100dvh;
  padding: 1rem;
  background: var(--bg-light);

  .card {
    max-width: 420px;
    width: 100%;
    padding: 3rem 4rem;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 24px rgb(0 0 0 / 0.08);

    & h1 {
      font-weight: 700;
    }

    & form {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      & div {
        display: flex;
        flex-direction: column;
      }

      & label {
        font-weight: 600;
      }

      & input {
        margin-top: 0.25rem;
        padding: 0.75rem 1rem;
        border: 1px solid #ddd;
        border-radius: 0.5rem;
        font-size: 1rem;

        &:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px
            color-mix(in srgb, var(--primary) 25%, transparent);
        }
      }

      & button {
        margin-top: 0.5rem;
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background: var(--primary);
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
          background: var(--primary-dark);
        }
      }
    }

    & .error {
      margin-top: 1rem;
      color: #e63946;
      font-weight: 600;
    }
  }
}
</style>
