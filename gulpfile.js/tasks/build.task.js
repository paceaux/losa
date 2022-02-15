const { series, parallel } = require('gulp');

const {
    assemble,
    images,
    fonts,
    javascript,
    sitemap,
    styles,
} = require('../functions');

const buildAssets = parallel(javascript, styles, images, fonts);

const buildPages = series(assemble, sitemap);

module.exports = {
    buildAssets,
    buildPages,
    'build:styles': styles,
    'build:js': javascript,
    'build:sitemap': sitemap,
    build: parallel(buildAssets, buildPages),
};
