var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    browserify = require('browserify'),
    jade = require('gulp-jade'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    buffer = require('vinyl-buffer');

gulp.task('css',function(){
    gulp.src('./app/app.styl')
        .pipe(stylus({
            'include css': true
        }))
        .pipe(gulp.dest('./dist/styles'))
});

gulp.task('templates',function(){
    gulp.src('./app/*.jade')
        .pipe(jade({pretty:true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js',function(){
    var b = browserify();
    b.transform(reactify);
    b.add('./app/app.js');
    
    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script/'));
});

gulp.task('watch',function(){
    gulp.watch('./app/*.jade',['templates']);
    gulp.watch(['./app/**/*.js','./app/**/*.jsx'],['js']);
    gulp.watch('./app/**/*.styl',['css']);
})

gulp.task('default',['templates','js','css','watch']);