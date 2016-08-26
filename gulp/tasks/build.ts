import * as gulp from 'gulp'
import * as path from 'path'
import * as htmlmin from 'gulp-htmlmin'

import { dist } from '../config'

gulp.task('build', ['dest'], () => {
  return gulp.src(path.join(dist, '/**/*.html'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(dist))
})
