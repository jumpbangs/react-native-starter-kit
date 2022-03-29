module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src/utils',
            rootPathPrefix: '@utils',
          },
          {
            rootPathSuffix: './src/styles',
            rootPathPrefix: '@styles',
          },
        ],
      },
    ],
  ],
};
