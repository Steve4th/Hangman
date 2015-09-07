/// <binding AfterBuild='publish' />
/// <reference path="typings/gulp/gulp.d.ts""/>
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var paths = {
    scriptSrc: "./scripts/**/*.js",
    scriptDest: "./wwwroot/scripts/",
    htmlSrc: "./*.html",
    htmlDest: "./wwwroot/"
}

gulp.task('publish', function () {
    return gulp.start(['publishHtml', 'publishJs']);
});

gulp.task('publishJs', function () {
    return gulp.src(paths.scriptSrc)
               .pipe(gulp.dest(paths.scriptDest));
});

gulp.task('publishHtml', function () {
    return gulp.src(paths.htmlSrc)
               .pipe(gulp.dest(paths.htmlDest));
});
