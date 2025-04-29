// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "@vue/eslint-config-prettier";
import vitest from "@vitest/eslint-plugin";

export default withNuxt([
  eslintConfigPrettier,
  {
    files: ["**/__test__/**", "**/__tests__/**", "**/tests/**", "**/test/**"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
]);
