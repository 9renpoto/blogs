var gulp = require('gulp');

// Cleanup builded files
gulp.task('clean', function(callback) {
  var
    config = require('../config.js'),
    del = require('del');

  return del([
    'dist'
  ], callback);
});
