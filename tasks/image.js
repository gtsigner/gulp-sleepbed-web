'use strict';

const gulp = require('gulp');
import imagemin from 'gulp-imagemin';

gulp.task('dev:images', function () {
    return gulp.src('./src/assets/images/**/*')
    // .pipe(imagemin())
        .pipe(gulp.dest('tmp/assets/images'));
});

gulp.task('build:images', function () {
    return gulp.src('./src/assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images'));
});