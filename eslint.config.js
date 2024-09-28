import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRefresh from 'react-refresh';

export default [
  {
    languageOptions: {
      globals: [
        globals.browser,
        globals.es2020,
      ],
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  ...pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...reactRefresh.configs.recommended,
];
