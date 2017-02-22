var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var path = require('path');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
    
    
gulp.task('default', ['browserify'], function() {

});

gulp.task('less', function () {
    return gulp.src('src/less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('frontend/css/'));
});

gulp.task('browserify', function() {
    return browserify({ entries: ['src/jk-base.js'] })
        .bundle()
        .pipe(source('jk.lib.js'))
        .pipe(gulp.dest('build'));
});


gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['browserify']);
//    gulp.watch('src/less/**/*.less', ['less']);
//    gulp.watch('src/images/*', ['imagemin']);
});
