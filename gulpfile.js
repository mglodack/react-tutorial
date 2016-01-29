'use strict';

const babel = require('gulp-babel');
const del = require('del');
const gulp = require('gulp');
const gulpList = require('gulp-task-listing');

gulp.task('help', gulpList);

gulp.task('default', ['help']);

gulp.task('clean', function() {
  return del(['./dist/*']);
});

gulp.task('build', ['clean'], function() {
  return gulp.src('index.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist'));
});
