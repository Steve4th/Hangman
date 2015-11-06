/// <binding BeforeBuild='clean' AfterBuild='publish' Clean='clean' />
/// <reference path="typings/gulp/gulp.d.ts" />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var bowerFiles = require('main-bower-files');
var project = require('./project.json');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-uglify');
var htmlmin = require('gulp-minify-html');
var jasmine = require('gulp-jasmine');

var webroot = "./" + project.webroot + "/";
var paths = {
    testScriptSrc: './scripts/*Tests.js',
    scriptSrc: './scripts/*.js',
    scriptDest: webroot + 'scripts/',
    htmlSrc: './*.html',
    htmlDest: webroot,
    bowerDest: webroot + 'lib/',
    cssSrc: './bower_components/bootstrap/dist/css/*min.css',
    cssDest: webroot + 'css/'
}

gulp.task('publish', ['publishHtml', 'publishJs', 'publishTestJs', 'publishBower', 'publishCss']);

gulp.task('publishJs', function() {
    return gulp.src([paths.scriptSrc, '!./scripts/*Tests.js'])
        .pipe(concat('hangular.min.js'))
        //.pipe(jsmin())
        .pipe(gulp.dest(paths.scriptDest));
});

gulp.task('publishTestJs', function() {
    return gulp.src(paths.testScriptSrc)
        .pipe(concat('hangular.tests.min.js'))
        .pipe(jsmin())
        .pipe(gulp.dest(paths.scriptDest));
});

gulp.task('publishHtml', function () {
    var minifyOptions = {
        empty: true         // do not remove empty attributes like ng-app
    };

    return gulp.src(paths.htmlSrc)
               .pipe(htmlmin(minifyOptions))
               .pipe(gulp.dest(paths.htmlDest));
});

gulp.task("publishBower", function () {
    return gulp.src(bowerFiles())
                .pipe(gulp.dest(paths.bowerDest));
});

gulp.task('publishCss', function () {
    return gulp.src(paths.cssSrc)
                .pipe(concat('bootstraped.min.css'))
                .pipe(cssmin())
                .pipe(gulp.dest(paths.cssDest));
});

gulp.task('runClientTests', function () {
    return gulp.src(['./scripts/**/*Tests.js', './bower_components/angular/angular.min.js'])
            .pipe(jasmine());
});

gulp.task("clean", function () {
    del(paths.scriptDest + '**/*');    
    console.log(paths.htmlDest + '*.html');
    del(paths.htmlDest + '*.html');
    del(paths.bowerDest + '**/*');
    del(paths.cssDest);
});