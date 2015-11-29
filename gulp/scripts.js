'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

function webpackTask(watch, callback) {

  if(watch) {
    webpackConfig.devtool = 'inline-source-map';
    webpackConfig.watch = true;
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
  webpack(webpackConfig, webpackChangeHandler);
  // return gulp.src([
  //   path.join(conf.paths.src, '/app/**/*.ts'),
  //   path.join('!' + conf.paths.src, '/app/**/*.spec.ts'),
  // ])
  //   // .pipe($.angularFilesort())
  //   .pipe($.order([
  //     '**/*.module.*',
  //     '**/*.*',
  //     'src/app/bootstrap.ts'
  //   ]))
  //   .pipe($.webpack(webpackOptions, null, webpackChangeHandler))
  //   .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}

gulp.task('scripts', function () {
  return webpackTask(false);
});

gulp.task('scripts:watch', ['scripts'], function (callback) {
  return webpackTask(true, callback);
});