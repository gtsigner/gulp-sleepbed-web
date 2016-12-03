import gulp from 'gulp';
import runSequence from 'run-sequence';

/**
 *
 */
gulp.task("watch", () => {
    gulp.watch(["./src/**/*.scss"], ["dev:sass", "refresh"]);
    gulp.watch(["./src/**/*.png"], ["dev:images", "refresh"]);
    gulp.watch(["./src/**/*.html"], ["dev:html", "refresh"]);
    gulp.watch(["./src/**/*.js"], ["dev:js", "refresh"]);
});

