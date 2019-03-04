const {src, dest, series, parallel} = require('gulp')
const clean = require('gulp-clean')
const pug = require('gulp-pug')

function cleanDest(cb) {
    return src('dist/', {allowEmpty: true})
        .pipe(clean({force: true}))
}

function build(cb) {
    return src('src/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest('dist/'))
}

exports.default = series(cleanDest, build);