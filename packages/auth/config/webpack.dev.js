const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge')

const devConfig = {
  output: {
    publicPath: 'http://localhost:5002/',
  },
  mode: 'development',
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom', '@material-ui/core', '@material-ui/icons'],
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)
