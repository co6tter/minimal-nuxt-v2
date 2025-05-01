import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: undefined as { email: string } | undefined,
    error: "",
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await $fetch<{ success: boolean }>("/api/login", {
          method: "POST",
          body: { email, password },
        });

        if (response.success) {
          this.isAuthenticated = true;
          this.user = { email };
          this.error = "";
        }
      } catch (error) {
        if (
          error instanceof Error &&
          "data" in error &&
          error.data &&
          typeof error.data === "object" &&
          "message" in error.data
        ) {
          this.error = error.data.message as string;
        } else {
          this.error = "ログインに失敗しました。";
        }
        throw error;
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.user = undefined;
      this.error = "";
    },
  },
});
