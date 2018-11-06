// Подключение пакетов

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var scss = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var pug = require('gulp-pug');
var del = require('del');
var runSequense = require('run-sequence');



// Задачи для Gulp
gulp.task('clean:build',function() {
    return del('./build');
});
 
gulp.task('server',function() {

  browserSync.init({
    server: {baseDir: './build/'}
  })
  gulp.watch('src/pug/**/*.*', ['pug']);
  gulp.watch('src/scss/**/*.scss', ['scss']);
  gulp.watch('src/js/**/*.*', ['copy:js']);
  gulp.watch('src/img/**/*.*', ['copy:img']);
  gulp.watch('src/fonts/**/*.*', ['copy:fonts']);
  gulp.watch('src/libs/**/*.*', ['copy:libs']);
});

gulp.task('copy:js', function() {
    return gulp.src('src/js/**/*.*')
      .pipe(gulp.dest('./build/js'))
      .pipe(browserSync.stream());
});

gulp.task('copy:img', function() {
    return gulp.src('src/img/**/*.*')
      .pipe(gulp.dest('./build/img'))
      .pipe(browserSync.stream());
});

gulp.task('copy:fonts', function() {
    return gulp.src('src/fonts/**/*.*')
      .pipe(gulp.dest('./build/fonts'))
      .pipe(browserSync.stream());
});

gulp.task('copy:libs', function() {
    return gulp.src('src/libs/**/*.*')
      .pipe(gulp.dest('./build/libs'))
      .pipe(browserSync.stream());
});


gulp.task('scss', function() {

    return gulp.src('./src/scss/main.scss')
      .pipe( plumber({
          errorHandler: notify.onError( function(err){
            return {
              title: 'Styles',
              message: err.message
            }
          })
      }))
      .pipe(sourcemaps.init())
      .pipe(scss())
      .pipe( autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./build/css'))
      .pipe(browserSync.stream());

});

gulp.task('pug', function() {
    return gulp.src('./src/pug/pages/**/*.pug')
      .pipe( plumber({
          errorHandler: notify.onError( function(err){
            return {
              title: 'Pug',
              message: err.message
            }
          })
      }))
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('./build'))
      .pipe(browserSync.stream());
});


gulp.task('default', function(callback){
  runSequense(
    'clean:build',
    ['scss', 'pug', 'copy:js', 'copy:img', 'copy:fonts', 'copy:libs'],
    'server',
    callback
    )
});