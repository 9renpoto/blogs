/* @flow */
const gulp = require('gulp')
const path = require('path')

gulp.task('dest', () => {
  return gulp.src(path.join(__dirname, '../../public/**'))
    .pipe(gulp.dest(path.join(__dirname, '../../dist')))
})
