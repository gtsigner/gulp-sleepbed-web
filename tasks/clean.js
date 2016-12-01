var gulp = require("gulp")
var clean = require('gulp-clean');

gulp.task('dev:clean', function() {
    return gulp.src('tmp', { read: false })
        .pipe(clean());
});

gulp.task('build:clean', function() {
    return gulp.src('dist', { read: false })
        .pipe(clean());
});