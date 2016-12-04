'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const SERVE_CONFIG = {
    port: 3400,
    server: {
        baseDir: "./tmp/"
    },
    ui: {
        port: 3402
    }
};
const server = browserSync.create();

gulp.task('browser-sync', () => {
    server.init(SERVE_CONFIG);
});

//刷新所有文件
gulp.task("refresh", (cb) => {
    return gulp.src(["./src/**/*"])
        .on("error", function (err) {
            console.log(err);
            this.emit('end');
        })
        .pipe(server.stream())
});