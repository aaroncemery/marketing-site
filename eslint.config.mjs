// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: ['apps/**', 'packages/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: ['@repo/eslint-config/library.js'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true,
      },
    },
  },
];
