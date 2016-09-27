import * as gulp from 'gulp'
import * as path from 'path'
import * as htmlmin from 'gulp-htmlmin'
import * as gulpIf from 'gulp-if'

import { dist } from '../config'

gulp.task('build', ['dest'], () => {
  return gulp.src(path.join(dist, '/**/**/**/**/**/**/*'))
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest(dist))
})
