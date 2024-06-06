import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals:{
        ...globals.browser,
        ...globals.node,
      },
   
      sourceType: "module",
      ecmaVersion: 2021,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-undef": "off", // Desactivar no-undef si estás usando variables globales que ESLint no reconoce
    },
  },
  pluginJs.configs.recommended,
];
