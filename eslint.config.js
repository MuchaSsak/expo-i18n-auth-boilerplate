// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const pluginLingui = require("eslint-plugin-lingui");
const pluginSimpleImportSort = require("eslint-plugin-simple-import-sort");

module.exports = defineConfig([
  expoConfig,
  pluginLingui.configs["flat/recommended"],
  {
    ignores: ["dist/*"],

    plugins: {
      "simple-import-sort": pluginSimpleImportSort,
    },

    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
]);
