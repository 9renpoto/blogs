'use strict'
var gulp = require('gulp')
gulp.task('clean', function (callback) {
  var del = require('del')

  return del([
    'dist'
  ], callback)
})
