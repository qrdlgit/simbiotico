const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const inlineSource = require('gulp-inline-source');
const fileInclude = require('gulp-file-include');

function html() {
    return src('src/*.html')
        .pipe(fileInclude({ prefix: '@@', basepath: '@file' }))
        .pipe(inlineSource())
        .pipe(dest('dist'));
}

function css() {
    return src('src/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(dest('src'));
}

function js() {
    return src('src/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(dest('src'));
}

function watchFiles() {
    watch('src/*.html', series(html));
    watch('src/partials/*.html', series(html));
    watch('src/css/*.css', series(css));
    watch('src/js/*.js', series(js));
}

async function build() {
    return series(html, css, js);
}


exports.default = series(html, css, js, watchFiles);
exports.build = build;

