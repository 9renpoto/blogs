import * as gulp from 'gulp'
import * as path from 'path'

import { global, dist } from '../config'

gulp.task('dest', () => {
  return gulp.src(path.join(global, 'public/**'))
    .pipe(gulp.dest(dist))
})
