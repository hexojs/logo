var gulp = require('gulp'),
  svg2png = require('gulp-svg2png'),
  imagemin = require('gulp-imagemin');

gulp.task('png', function(){
  return gulp.src('svg/*.svg')
    .pipe(svg2png())
    .pipe(imagemin())
    .pipe(gulp.dest('png/'));
});

gulp.task('default', ['png']);