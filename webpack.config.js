var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack           = require('webpack');
var atImport          = require('postcss-import');
var customProperties  = require('postcss-custom-properties');
var bemLinter         = require('postcss-bem-linter');
var autoprefixer      = require('autoprefixer-core');

module.exports = {
  entry: {
    homepage: './src/components/ui-App/',
  },
  output: {
    path: './dist/',
    filename: 'app.js',

    // just for testing in the example page
    library: 'App',
    libraryTarget: 'umd'
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') },
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
      { test: /\.woff$/, loader: 'file-loader?name=fonts/[name].[ext]' }
    ]
  },
  // just for testing in the example page
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  },
  postcss: [
    atImport({
      path: ['node_modules', './src']
    }),
    autoprefixer(),
    bemLinter(),
    customProperties()
  ],
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};
