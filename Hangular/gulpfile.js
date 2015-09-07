﻿/// <binding BeforeBuild='clean' AfterBuild='publish' Clean='clean' />
/// <reference path="typings/gulp/gulp.d.ts""/>
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var bower = require('gulp-main-bower-files');
var project = require("./project.json");

var webroot = "./" + project.webroot + "/";
var paths = {
    scriptSrc: './scripts/**/*.js',
    scriptDest: webroot + 'scripts/',
    htmlSrc: './*.html',
    htmlDest: webroot,
    bowerDest: webroot + 'lib/'
}

gulp.task('publish', ['publishHtml', 'publishJs', 'publishBower']);

gulp.task('publishJs', function () {
    return gulp.src(paths.scriptSrc)
               .pipe(gulp.dest(paths.scriptDest));
});

gulp.task('publishHtml', function () {
    return gulp.src(paths.htmlSrc)
               .pipe(gulp.dest(paths.htmlDest));
});

gulp.task("publishBower", function () {
    return gulp.src('./bower.json')
                .pipe(bower())
                .pipe(gulp.dest(paths.bowerDest));
});

gulp.task("clean", function () {
    del(paths.scriptDest + '**/*');    
    console.log(paths.htmlDest + '*.html');
    del(paths.htmlDest + '*.html');
    del(paths.bowerDest + '**/*');
});