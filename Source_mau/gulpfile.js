const gulp = require('gulp');
const bs = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'node_modules/animate.css/animate.css', 'node_modules/swiper/dist/css/swiper.min.css', 'node_modules/lightgallery/dist/css/lightgallery.css', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(bs.stream());
})
gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/wow.js/dist/wow.min.js', 'node_modules/swiper/dist/js/swiper.js', 'node_modules/lightgallery/dist/js/lightgallery.min.js', 'node_modules/lightgallery/lib/js/lg-utils.js'])
        .pipe(gulp.dest('src/js'))
        .pipe(bs.stream());
})
gulp.task('server', ['sass'], function () {
    bs.init({
        server: './src'
    })
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch('src/*.html').on('change', bs.reload);
})
gulp.task('font', function () {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('src/libs/fonts'));
})
gulp.task('fa', function () {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(gulp.dest('src/css'));
})
gulp.task('default', ['js', 'server', 'font', 'fa']);