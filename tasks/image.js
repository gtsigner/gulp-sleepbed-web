'use strict';

const gulp = require('gulp');
import imagemin from 'gulp-imagemin';

gulp.task('image', function () {
    return gulp.src('./src/assets/images/**/*')
    // .pipe(imagemin())
        .pipe(gulp.dest('temp/html/assets/images'))
        .pipe(gulp.dest('temp/angularjs/assets/images'))
});

gulp.task('build:image', function () {
    return gulp.src('./src/assets/images/**/*')
    // .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'))
        .pipe(gulp.dest('./dist/assets/images'))
});