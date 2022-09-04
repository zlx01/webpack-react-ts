const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// https://www.jianshu.com/p/f4638f5df1c7
// console.log('process.env', process.env);
const DEV = process.env.NODE_ENV === 'development'
const PROD = process.env.NODE_ENV === 'production'
console.log('process.env.NODE_ENV', process.env.NODE_ENV, DEV, PROD);

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
    clean: true,
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        // Babel7 中提供的 babel-loader 就可以完美进行编译ts，需要在 .babelrc 中配置 @babel/preset-typescript
        // loader: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html')
    }),
    PROD && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  resolve: {
    modules: ['node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  }
}
