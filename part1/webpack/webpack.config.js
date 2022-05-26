const HTMLWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: ['@babel/plugin-syntax-optional-chaining'],
    },
  },
};

const ProductionPlugins = [new CompressionPlugin()];

module.exports = (env, { mode }) => ({
  output: {
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [javascriptRules],
  },
  plugins: [
    mode === 'production' && [...ProductionPlugins],
    new HTMLWebpackPlugin({
      title: 'Webpack step by step',
      template: 'src/index.html',
    }),
  ].filter(Boolean),
});
