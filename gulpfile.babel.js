const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
const tasks = requireDir("./tasks");
import cp from 'cp';

let debug = false;
const SAVE_PATH = debug == true ? './dist/' : './tmp/';

gulp.task('build', () => {
    debug = false;
    return runSequence('build:clean', 'build:html', 'build:images', 'build:sass', 'static', 'build:js');
});

//static 拷贝静态文件
gulp.task('static', () => {
    return gulp.src('./src/assets/libs/**/*')
        .pipe(gulp.dest(SAVE_PATH + "assets/libs/"));
});

gulp.task('dev', () => {
    debug = true;
    return runSequence('dev:clean', 'dev:html', 'dev:sass', 'dev:images','dev:js', 'static', 'browser-sync', 'watch');
});