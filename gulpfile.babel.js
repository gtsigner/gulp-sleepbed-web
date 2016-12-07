const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
const tasks = requireDir("./tasks");
let debug = true;

gulp.task('static', () => {
    let SAVE_PATH = debug == false ? './dist/' : './tmp/';
    console.log(SAVE_PATH);
    return gulp.src('./src/assets/libs/**/*')
        .pipe(gulp.dest(SAVE_PATH + "assets/libs/"));
});

gulp.task('build', () => {
    debug = false;
    return runSequence('build:clean', 'build:html', 'build:images', 'build:sass', 'static', 'build:js');
});


gulp.task('dev', () => {
    debug = true;
    return runSequence('dev:clean', 'dev:html', 'dev:sass', 'dev:images', 'dev:js', 'static', 'browser-sync', 'watch');
});