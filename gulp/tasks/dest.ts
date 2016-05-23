/// <reference path="../../typings/index.d.ts" />

import * as gulp from 'gulp'
import * as path from 'path'

gulp.task('dest', () => {
  let config: any = require('../config')
  return gulp.src(path.join(config.root, 'public/**'))
    .pipe(gulp.dest(config.dist))
})
