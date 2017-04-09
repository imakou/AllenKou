var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver'),
  ejs = require("gulp-ejs"),
  sass = require('gulp-sass');

gulp.task('js', function() {
  gulp.src('public/js/**/*');
});

gulp.task('html', function() {
  gulp.src('public/*.html');
  // .pipe(gulp.dest("public/dist"));
});

gulp.task('ejs',function(){
	gulp.src("public/**/*.ejs")
	.pipe(ejs({
		msg: "Hello Gulp!"
	},{ext:'.html'}).on('error', gutil.log));
	// .pipe(gulp.dest("public/dist"));
})

gulp.task('sass', function () {
  return gulp.src('public/sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('css', function() {
  gulp.src('public/css/*.css')
});

gulp.task('watch', function() {
  gulp.watch('public/js/**/*', ['js']);
  gulp.watch('public/css/*.css', ['css']);
  gulp.watch('public/**/*.ejs', ['ejs']);
  gulp.watch('public/*.html', ['html']);
  gulp.watch('public/sass/**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('public/')
    .pipe(webserver({
      livereload: true,
      open: false
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'ejs', 'sass', 'webserver']);