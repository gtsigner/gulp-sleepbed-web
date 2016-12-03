'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import source from 'vinyl-source-stream';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import autoprefixer from 'autoprefixer';
import stripCssComments from 'gulp-strip-css-comments';


gulp.task("build:sass", () => {
    return gulp.src("./src/app.scss")
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(stripCssComments())
        .pipe(gulp.dest('./dist/assets/css/'))
});
gulp.task("dev:sass", () => {
    return gulp.src("./src/app.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(stripCssComments())
        .pipe(gulp.dest('./tmp/assets/css/'))
});
