module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.eslint.json",
      sourceType: "module",
      extraFileExtensions: [".json"],
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: [
      "@typescript-eslint",
      "eslint-plugin-react",
    ],
    extends: [
      "prettier/@typescript-eslint",
      "prettier/react",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    rules: {

    },
  };
