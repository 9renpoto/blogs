'use strict'
var gulp = require('gulp')
gulp.task('build', ['dest'], function () {
  var minifyHTML = require('gulp-minify-html')
  return gulp.src('dist/**/*.html')
    .pipe(minifyHTML({ empty: true }))
    .pipe(gulp.dest('dist'))
})
