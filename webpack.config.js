const path = require('path');
const nodeExternals = require('webpack-node-externals');

// Common configuration for both client and server
const commonConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

// Client-side bundle configuration
const clientConfig = {
  ...commonConfig,
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'build/public'),
    filename: 'bundle.js',
  },
};

// Server-side bundle configuration
const serverConfig = {
  ...commonConfig,
  entry: './src/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
};

module.exports = [clientConfig, serverConfig];