var gulp = require('gulp');
var watchify = require('watchify');
var jshint = require('gulp-jshint');
var util = require('gulp-util');
var package = require('./package');
var nodemon = require('gulp-nodemon');
var source = require('vinyl-source-stream');

gulp.task('serve', function() {
    var options = {
        script: 'bin/www',
        ext: 'html js',
        ignore: ['public/*'] 
    };

    nodemon(options).on('restart', onRestart);

    function onRestart() {
        console.log('restarted!')
    }
});

gulp.task('watch', function() {
    var bundler = watchify('./public/js/main.js');
    var options = {
       debug: true
    };

    bundler.on('update', rebundle)

    function rebundle () {
        util.log('Rebundling')
        return bundler.bundle(options)
            .on('error', onError)
            .pipe(source('main.js'))
            .pipe(gulp.dest('./public/js/dist'))
    }

    function onError(e) {
        util.log('Browserify Error', e);
    }

    return rebundle()
});

gulp.task('default', ['watch', 'serve']);
