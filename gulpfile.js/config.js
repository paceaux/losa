const nested = require('postcss-nested');
const atImport = require('postcss-import');

const dest = 'public';
const src = 'src';
const templatePath = `${src}/templates`;
const cssPath = `${src}/assets/css`;
const imgPath = `${src}/assets/img`;
const fontPath = `${src}/assets/fonts`;
const jsPath = `${src}/assets/js`;


module.exports = {
    dest,
    src,
    assemble: {
        partials: `${templatePath}/partials/*.hbs`,
        layouts: `${templatePath}/layouts/default.hbs`,
        pages: `${src}/pages/**/*.hbs`,
        dest,
        content: 'src/content.json',
    },
    postcss: {
        dest: `${dest}/css`,
        destName: 'main.css',
        opts: {
            plugins: [
                nested,
                atImport,
            ],
        },
        src: [
            `${cssPath}/**/*.css`,
        ],

    },
    js: {
        dest: `${dest}/js`,
        destName: 'main.js',
        src: [
            `${jsPath}/**/*.js`,
        ],
    },
    images: {
        dest: `${dest}/assets/img`,
        src: `${imgPath}/**.*`,
    },
    fonts: {
        dest: `${dest}/assets/fonts`,
        src: `${fontPath}/**.*`,
    },
    watch: {
        assemble: `${templatePath}/**/*.hbs`,
        styles: `${cssPath}/**/*.*`,
        js: `${jsPath}/**/*.js`,
    },
    sitemap: {
        dest: `${dest}`,
        src: `${dest}/**/*.html`,
        opts: {
            siteUrl: 'http://league-of-sexual-anarchy.com',
            changefreq: 'monthly',
        },
    },

};
