'use strict'
var gulp = require('gulp')
gulp.task('build', ['dest'], function () {
  var minifyHTML = require('gulp-minify-html')
  var path = require('path')
  var config = require('../config.js')
  return gulp.src(path.join(config.dist, '/**/*.html'))
    .pipe(minifyHTML({ empty: true }))
    .pipe(gulp.dest(config.dist))
})
