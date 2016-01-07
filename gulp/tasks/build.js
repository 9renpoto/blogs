'use strict'

var gulp = require('gulp')
gulp.task('build', ['minify-html'], function (callback) {
  var path = require('path')
  var root = require('../config.js').root
  return gulp.src(path.join(root, 'public/**'))
    .pipe(gulp.dest('dist'))
})
