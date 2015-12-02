var webpack = require('webpack');
var path = require('path');

var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);

module.exports = {
  resolve: {
    extensions: ['','.ts','.js','.json']
  },
  entry: {
    'angular2': [
      // Angular 2 Deps
      '@reactivex/rxjs',
      'zone.js',
      'reflect-metadata',
      'angular2/angular2',
      'angular2/router',
      'angular2/http'
    ],
    'angular1': [
      // Angular 1 Deps
      'angular/angular',
      'angular-animate/angular-animate',
      'angular-touch/angular-touch',
      'angular-sanitize/angular-sanitize',
      'angular-resource/angular-resource',
      'angular-ui-router/release/angular-ui-router',
      'leaflet/dist/leaflet',
      'ui-leaflet/dist/ui-leaflet',
      'angular-simple-logger/dist/angular-simple-logger'
    ],
    'index': [
      './src/app/bootstrap'     
    ]
  },
  module: {
    loaders: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts'},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {
      optional: ['runtime'],
      stage: 1
    }}]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['angular1', 'angular2'],
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: 'common',
      filename: 'common.js',
      minChunks: Infinity
    })//,
    //  new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    path: root('.tmp/serve/app'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
    // publicPath: 'http://mycdn.com/'
  }
};

function root(args) {
  args = sliceArgs(arguments, 0);
  return path.join.apply(path, [__dirname, '../'].concat(args));
}

function rootNode(args) {
  args = sliceArgs(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}
