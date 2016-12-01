'use strict';

const gulp = require('gulp');
import fileinclude from 'gulp-file-include';
import htmlhint from "gulp-htmlhint";
//构建

gulp.task('dev:index', () => {
    return gulp.src(['src/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(gulp.dest('tmp/'));
});

gulp.task('build:index', () => {
    return gulp.src(['src/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(gulp.dest('dist/'));
});

gulp.task('dev:html', ['dev:index'], () => {
    return gulp.src(['src/html/**/*.html', '!src/html/include/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(gulp.dest('tmp/html/'))
});

gulp.task('build:html', ['build:index'], () => {
    return gulp.src(['src/html/**/*.html', '!src/html/include/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(gulp.dest('dist/html/'))
});
