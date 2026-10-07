import globals from "globals";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      "dist/**",
      ".astro/**",
      ".husky/**",
      "node_modules/**",
    ],
  },
];
