/// <reference path="../../typings/main.d.ts" />

import * as gulp from 'gulp'
import * as path from 'path'
import * as minifyHTML from 'gulp-minify-html'

gulp.task('build', ['dest'], () => {
  let dist: any = require('../config').dist

  return gulp.src(path.join(dist, '/**/*.html'))
    .pipe(minifyHTML({ empty: true }))
    .pipe(gulp.dest(dist))
})
