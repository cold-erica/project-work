const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const sassRollup = require('rollup-plugin-sass');

gulp.task('styles', () => {
    return gulp.src('css/**/*.*css')
        .pipe(sass({includePaths: ['node_modules']}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-fonts', () => {
    return gulp.src(
        'node_modules/@fortawesome/fontawesome-free/webfonts/*'
    ).pipe(
        gulp.dest('./webfonts/')
    );
});

gulp.task('copy-css', () => {
    return gulp.src(
        'node_modules/@fortawesome/fontawesome-free/css/all.css'
    ).pipe(
        gulp.dest('./dist/')
    );
});

gulp.task('clean', () => {
    return del([
        'dist/style.css',
    ]);
});

gulp.task('scripts', () => {
    return gulp.src('js/*.js')
      .pipe(rollup({ 
            plugins: [
                sassRollup(),
                babel({presets: ['@babel/env']}),
                resolve(),
                commonjs()
            ]
        }, 'umd'))
      .pipe(gulp.dest('dist/'));
  });

gulp.task('watch', () => {
    gulp.watch('css/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
    gulp.watch('js/**/*.js', (done) => {
        gulp.series(['scripts'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles', 'scripts', 'copy-fonts', 'copy-css', 'watch']));