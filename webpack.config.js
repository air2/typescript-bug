
const path = require('path')
// const nodeExternals = require('webpack-node-externals')
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// const TerserPlugin = require('terser-webpack-plugin')

module.exports = {

  entry: ['./src/index.ts'],
  mode: 'production',
  // devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            projectReferences: true
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // plugins: [new TsconfigPathsPlugin({/* options: see below */})],
    // alias: {
    //   [path.resolve(__dirname, 'src/environments/environment.ts')]:
    //       path.resolve(__dirname, 'src/environments/environment.prod.ts')
    // }
  },
  target: 'node',
  node: {
    __dirname: false
  },
//   externals: [nodeExternals({
//     // allowlist: [/^lodash/, 'axios', 'big.js']
//   })]
  //   optimization: {
  //     minimizer: [new TerserPlugin()]
  //   },
//   resolve: {
//     extensions: ['.ts', '.js']
//   }
}
