'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();
var wp = require('webpack');

function webpack(watch, callback) {

  var webpackOptions = {
    watch: watch,
    module: {
      loaders: [
        { test: /\.ts$/, exclude: /node_modules/, loader: 'ts'},
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {
        optional: ['runtime'],
        stage: 1
      }}]
    },
    plugins: [
      new wp.optimize.OccurenceOrderPlugin(true),
      new wp.optimize.DedupePlugin(),
      new wp.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'common.js'
      })
    ],
    output: { filename: 'index.js' }
  };
  if(watch) {
    webpackOptions.devtool = 'inline-source-map';
  }

  var webpackChangeHandler = function(err, stats) {
    if(err) {
      conf.errorHandler('Webpack')(err);
    }
    $.util.log(stats.toString({
      colors: $.util.colors.supportsColor,
      chunks: false,
      hash: false,
      version: false
    }));
    browserSync.reload();
    if(watch) {
      watch = false;
      callback();
    }
  };

  return gulp.src([
    path.join(conf.paths.src, '/app/**/*.js'),
    path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
  ])
    .pipe($.angularFilesort())
    .pipe($.webpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}

gulp.task('scripts', function () {
  return webpack(false);
});

gulp.task('scripts:watch', ['scripts'], function (callback) {
  return webpack(true, callback);
});