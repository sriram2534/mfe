const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'production',
  output: {
    filename: '[name][contenthash].js',
    publicPath: '/auth/latest/',
  },
  devServer: {
    port: 5002,
    open: true,
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
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom', '@material-ui/core', '@material-ui/icons'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
