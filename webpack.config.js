const path = require('path');

const config = {
  mode: 'development',
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: process.env.PORT || 9999, /* default : 8080 */
        open: true,
        devMiddleware: {
            writeToDisk: false, /* refer to for more explanation in detail: 
            @ https://github.com/webpack/webpack-dev-middleware#writetodisk 
            @ https://dev.to/projektorius96/webpack-devserver-26g7
            */
    },
  },
  module: {
    rules: [
      /* rules specificity up-dated from : @https://github.com/sveltejs/svelte-loader */
      {
        test: /\.(html|svelte)$/,
        use: 'svelte-loader'
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.m?js$/,
        resolve: {
          fullySpecified: false
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.css',
      '.svelte'
    ]
  },
}

module.exports = config;