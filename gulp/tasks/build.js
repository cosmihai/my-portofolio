const gulp        = require('gulp');
const imagemin    = require('gulp-imagemin');
const del         = require('del');
const usemin      = require('gulp-usemin');
const rev         = require('gulp-rev');
const cssnano     = require('gulp-cssnano');
const uglify      = require ('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('previewDist', () => {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
})

gulp.task('deleteDistFolder', () => {
  return del("./dist")
})

gulp.task('optimizeImages', ['deleteDistFolder'], () => {
  return gulp.src("./app/assets/images/**/*")
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest("./dist/assets/images"));
})

gulp.task('usemin', ['deleteDistFolder'], () => {
  return gulp.src("./app/index.html")
  .pipe(usemin({
    css: [() => {return rev()}, () => {return cssnano()}],
    js: [() => {return rev()}, () => {return uglify()}]
  }))
  .pipe(gulp.dest("./dist"));
})

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);