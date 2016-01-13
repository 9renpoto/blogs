'use strict'
var gulp = require('gulp')
gulp.task('dest', function () {
  var path = require('path')
  var config = require('../config.js')
  return gulp.src(path.join(config.root, 'public/**'))
    .pipe(gulp.dest(config.dist))
})
