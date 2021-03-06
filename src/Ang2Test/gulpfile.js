﻿/// <binding AfterBuild='apps, libs' Clean='clean' />

var gulp = require('gulp');
var rimraf = require('rimraf');

var paths = {
    npm: "./node_modules/",
    lib: "./wwwroot/lib/",
    app: "./wwwroot/app/",
    css: "./wwwroot/css/",
};

var libs = [
    paths.npm + 'angular2/bundles/angular2.dev.js',
    paths.npm + 'angular2/bundles/angular2-polyfills.js',
    paths.npm + 'angular2/bundles/router.dev.js',
    paths.npm + 'es6-shim/es6-shim.js',
    paths.npm + 'systemjs/dist/system.src.js',
    paths.npm + 'systemjs/dist/system-polyfills.js',
    paths.npm + 'rxjs/bundles/Rx.js',
    paths.npm + 'rxjs/bundles/Rx.js',
];

var css = [
    paths.npm + 'bootstrap/dist/css/bootstrap.min.css'
]

var apps = [
    "scripts/app/**/*.js"
];


gulp.task('libs', ['css'], function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task("css", function () {
    return gulp.src(css).pipe(gulp.dest(paths.css));
});


gulp.task("apps", function () {
    return gulp.src(apps).pipe(gulp.dest(paths.app));
});


gulp.task("clean", function (callback) {
    rimraf(paths.lib, callback);
    rimraf(paths.app, callback);
});