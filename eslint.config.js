import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintConfigOpenWc from '@open-wc/eslint-config';

export default [
  {
    ignores: ['**/node_modules/**', '**/storybook-static/**'],
  },
  ...eslintConfigOpenWc,
  eslintConfigPrettier,
  {
    files: ['**/*.js', '**/*.mjs'],
    rules: {
      // deprecated, switch to @stylistic/eslint-plugin package
      // before eslint 11 to continue using rule
      // https://eslint.style/guide/migration
      // Check for conflicts with open-wc rules
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        },
      ],
      curly: ['error', 'all'],
    },
  },
];
