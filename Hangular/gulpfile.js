/// <reference path="typings/gulp/gulp.d.ts""/>
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('validate-js', function () {
    return gulp.src([
		'./scripts/**/*.js',
		'./*.js'
    ])
	.pipe(jscs())
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});