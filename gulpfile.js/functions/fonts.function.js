/* eslint-disable import/no-extraneous-dependencies */


const { src, dest } = require('gulp');
const config = require('../config').fonts;

function fonts() {
    return src(config.src)
        .pipe(dest(config.dest));
}

module.exports = {
    fonts,
};
