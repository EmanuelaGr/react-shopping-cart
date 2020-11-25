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
    //   "eslint-plugin-jsdoc",
    //   "eslint-plugin-import",
    //   "eslint-plugin-no-null",
      "eslint-plugin-react",
    //   "eslint-plugin-react-hooks",
    ],
    extends: [
      "prettier/@typescript-eslint",
      "prettier/react",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    rules: {
    //   "react-hooks/rules-of-hooks": "error",
    //   "react-hooks/exhaustive-deps": "off", // Enable later
    //   "no-restricted-imports": [2, ".."],
    //   "@typescript-eslint/array-type": [
    //     "error",
    //     {
    //       default: "array",
    //     },
    //   ],
    //   "@typescript-eslint/await-thenable": "warn",
    //   "@typescript-eslint/dot-notation": "warn",
    //   "@typescript-eslint/explicit-member-accessibility": [
    //     "warn",
    //     {
    //       accessibility: "explicit",
    //       overrides: {
    //         accessors: "explicit",
    //         constructors: "explicit",
    //         parameterProperties: "explicit",
    //       },
    //     },
    //   ],
    //   "@typescript-eslint/indent": "off",
    //   "@typescript-eslint/member-ordering": "off",
    //   "@typescript-eslint/naming-convention": "off",
    //   "@typescript-eslint/no-empty-function": "warn",
    //   "@typescript-eslint/no-empty-interface": "off",
    //   "@typescript-eslint/no-explicit-any": "error",
    //   "@typescript-eslint/no-floating-promises": "off",
    //   "@typescript-eslint/no-misused-new": "error",
    //   "@typescript-eslint/no-unnecessary-type-assertion": "off", // Too many false positives. See https://github.com/typescript-eslint/typescript-eslint/issues/1410
    //   "@typescript-eslint/no-var-requires": "error",
    //   "@typescript-eslint/unified-signatures": "error",
    //   "constructor-super": "error",
    //   curly: "error",
    //   "default-case": "error",
    //   "eol-last": "off",
    //   eqeqeq: ["error", "always"],
    //   "id-blacklist": ["warn", "any", "String", "string", "Boolean", "boolean", "Undefined", "undefined"],
    //   "id-match": "error",
    //   "import/order": [
    //     "warn",
    //     {
    //       pathGroups: [
    //         {
    //           pattern: "~/**",
    //           group: "external",
    //         },
    //       ],
    //     },
    //   ],
    //   "jsdoc/check-alignment": "warn",
    //   "jsdoc/check-indentation": "off", // TODO: enable
    //   "jsdoc/newline-after-description": "warn",
    //   "linebreak-style": "off",
    //   "no-caller": "error",
    //   "no-console": "warn",
    //   "no-debugger": "error",
    //   "no-duplicate-imports": "error",
    //   "no-empty": "error",
    //   "no-eval": "error",
    //   "no-invalid-this": "off",
    //   "no-null/no-null": "off",
    //   "no-redeclare": "warn",
    //   "no-unused-vars": "off",
    //   "no-multiple-empty-lines": ["error", { max: 1 }],
    //   "react/jsx-uses-vars": "warn",
    //   "react/jsx-uses-react": "warn",
    //   "@typescript-eslint/no-unused-vars": [
    //     "warn",
    //     {
    //       vars: "all",
    //       args: "none", // "after-used", TODO: enable
    //       // argsIgnorePattern: "^_",
    //       ignoreRestSiblings: true,
    //     },
    //   ],
    //   "@typescript-eslint/no-shadow": [
    //     "warn",
    //     {
    //       hoist: "all",
    //     },
    //   ],
    //   "no-template-curly-in-string": "error",
    //   "no-undef-init": "warn",
    //   "no-underscore-dangle": "off",
    //   "no-var": "warn",
    //   "prefer-arrow-functions": "off",
    //   "prefer-const": "warn",
    //   "react/jsx-key": "off",
  
    //   "@typescript-eslint/ban-types": ["off"],
    //   "@typescript-eslint/no-inferrable-types": "error",
    //   "prefer-spread": "error",
  
   
    },
  };
  