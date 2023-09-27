module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: ['@react-native', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'react-hooks', 'simple-import-sort'],
  settings: { react: { version: 'detect' } },
  rules: {
    // allow .js files to contain JSX code
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'no-alert': 'off',
    'eol-last': 'error',
    'no-console': 'error',
    'react/display-name': 0,
    'prettier/prettier': 0,
    'no-unused-vars': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|components)(/.*|$)'],
          // Internal packages.
          ['^(@screen|@navigation)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'require-jsdoc': [
      'error',
      {
        require: {
          MethodDefinition: false,
          ClassDeclaration: false,
          FunctionExpression: false,
          FunctionDeclaration: true,
          ArrowFunctionExpression: false,
        },
      },
    ],
  },
};
