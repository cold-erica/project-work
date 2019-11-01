const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('css/**/*.*css')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', () => {
    return del([
        'dist/style.css',
    ]);
});

gulp.task('watch', () => {
    gulp.watch('css/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles']));