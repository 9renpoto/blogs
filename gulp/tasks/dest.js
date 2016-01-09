'use strict'
var gulp = require('gulp')
gulp.task('dest', function () {
  var path = require('path')
  var root = require('../config.js').root
  return gulp.src(path.join(root, 'public/**'))
    .pipe(gulp.dest('dist'))
})
