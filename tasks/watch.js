const gulp = require('gulp');
gulp.task("watch", function() {
    //资源
    gulp.watch("src/**/*.html", ['dev:html', 'refresh']);
    gulp.watch("src/**/*.scss", ['dev:sass', 'refresh']);
    gulp.watch("src/**/*.js", ['dev:js', 'refresh']);
    gulp.watch("src/assets/**/*", ['static', 'refresh']);
});
