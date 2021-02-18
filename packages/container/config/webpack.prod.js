const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const domain = process.env.PRODUCTION_DOMAIN

module.exports = {
  mode: 'production',
  output: {
    filename: '[name][contenthash].js',
    publicPath: '/container/latest/',
  },
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
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: ['react', 'react-dom', 'react-router-dom', '@material-ui/core', '@material-ui/icons'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
