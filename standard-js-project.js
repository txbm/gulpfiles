'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  jshint = require('gulp-jshint'),
  size = require('gulp-size'),
  uglify = require('gulp-uglify'),
  util = require('gulp-util'),
  del = require('del'),
  srcFiles = './src/*.js',
  outDir = '.';

gulp.task('clean', function (cb) {
  del('./http-api.min.js', cb);
});

gulp.task('build', ['clean'], function () {
  return gulp.src(srcFiles)
    .pipe(uglify())
    .pipe(concat('http-api.min.js'))
    .pipe(gulp.dest(outDir));
});


gulp.task('default', ['build']);