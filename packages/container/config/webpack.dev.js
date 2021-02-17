const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  devServer: {
    port: 5000,
    open: true,
    hot: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:5001/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom', '@material-ui/core', '@material-ui/icons'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
