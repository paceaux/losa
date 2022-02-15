/* eslint-disable import/no-extraneous-dependencies */

const { src, dest } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');

const config = require('../config').postcss;

// gulp.task('stylus', () => gulp.src(config.src)
//     .pipe(stylus(config.opts))
//     .pipe(concat(config.destName))
//     .pipe(gulp.dest(config.dest)));

function buildStylus() {
    return src(config.src)
        .pipe(postcss(config.opts.plugins))
        .pipe(concat(config.destName))
        .pipe(dest(config.dest));
}

module.exports = {
    styles: buildStylus,
};
