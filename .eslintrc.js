module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'react-hooks'],
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
