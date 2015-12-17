﻿/// <binding  AfterBuild='apps' Clean='clean' />

var gulp = require('gulp');
var rimraf = require('rimraf');

var paths = {
    npm: "./node_modules/",
    lib: "./wwwroot/lib/",
    app: "./wwwroot/app/",
};

var libs = [
    paths.npm+"angular2/bundles/angular2.dev.js",
    paths.npm + "es6-shimm/es6-shim.js",
    paths.npm + "systemjs/dist/system.js"
];

var apps = [
    "scripts/app/**/*.js"
];


gulp.task("libs", function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task("apps", function () {
    return gulp.src(apps).pipe(gulp.dest(paths.app));
});


gulp.task("clean", function (callback) {
    rimraf(paths.lib, callback);
    rimraf(paths.app, callback);
});