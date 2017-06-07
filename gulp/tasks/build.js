/* @flow */
const gulp = require('gulp')
const path = require('path')
const htmlmin = require('gulp-htmlmin')
const gulpIf = require('gulp-if')

gulp.task('build', ['dest'], () => {
  return gulp.src(path.join(__dirname, '../../public/**/**/**/**/**/**/*'))
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest(path.join(__dirname, '../../dist')))
})
