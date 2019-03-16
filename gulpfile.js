var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');

gulp.task('default', defaultTask);

function defaultTask(done) {
  console.log('Задание выполнено');
  done();
}

gulp.task('minify-css', function(done){
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS({

    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css/'))
});

gulp.task('move-js', function(done){
  return gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js/'))
});

gulp.task('htmlmin', function(done){
  return gulp.src('./src/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('dist/'))
});

gulp.task('fonts', function(done){
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('tinyPNG', function (done) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
      .pipe(tinyPNG({
          key: '5GDx1Z96dJNllKjlBmQ79yDbFGqks3X8',
          
      }))
      .pipe(gulp.dest('dist/img'));
      done();
});