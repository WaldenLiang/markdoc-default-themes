const gulp = require('gulp')
const data = require('gulp-data')
const stylus = require('gulp-stylus')
const watch = require('gulp-watch')

gulp.task('style', function (){
    return gulp.src('./src/css/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('watch', function (){
    return watch('./src/css/main.styl', function (){
        gulp.src('./src/css/main.styl')
            .pipe(stylus())
            .pipe(gulp.dest('./dist/css'))
    })
})
