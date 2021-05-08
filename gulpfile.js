const {series,watch,src,dest} = require('gulp');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin')

const sassTask = () =>{
   return src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('./dist/css'))
}
const minhtmlTask = () =>{
    return src('./src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist'))
}
const fontAwesome = () =>{
    return src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(dest('./dist/webfonts/'));
}

const watchTask = () =>{
    watch('./src/scss/**/*.scss',sassTask)
    watch('./src/**/*.html',minhtmlTask)
}

exports.default = series(
    sassTask,
    fontAwesome,
    minhtmlTask,
    watchTask
)