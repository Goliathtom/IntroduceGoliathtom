'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import del from 'del';

gulp.task('default', ['clean', 'js', 'css', 'html', 'images', 'py-init', 'py'], () => {
	return gutil.log('Gulp is running');
});

/* Definition of directories */

const DIR = {
	SRC: 'app',
	DEST: 'dist/app'
};

const SRC = {
	JS: DIR.SRC + '/static/js/*.js',
	CSS: DIR.SRC + '/static/css/*.css',
	HTML: DIR.SRC + '/templates/*.html',
	IMAGES: [DIR.SRC + '/static/img/*.png', DIR.SRC + '/static/img/*.jpg', DIR.SRC + '/static/img/*.svg'],
	PY_INIT : DIR.SRC+ '/*.py',
	PY: [DIR.SRC + '/views/*.py', DIR.SRC + '/views/**/*.py']
};

const DEST = {
	JS: DIR.DEST + '/static/js',
	CSS: DIR.DEST + '/static/css',
	HTML: DIR.DEST + '/templates/',
	IMAGES: DIR.DEST + '/static/img',
	PY_INIT: DIR.DEST + '/',
	PY:  DIR.DEST+ '/views'
};

/* minify javascript */
gulp.task('js', () => {
	return gulp.src(SRC.JS)
			.pipe(concat('index.js'))
			.pipe(uglify('index.js'))
			.pipe(gulp.dest(DEST.JS));
});

/* minify CSS */
gulp.task('css', () => {
	return gulp.src(SRC.CSS)
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest(DEST.CSS));
});

/* minify html */
gulp.task('html', () => {
	return gulp.src(SRC.HTML)
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest(DEST.HTML));
});

/* compress images */
gulp.task('images', () => {
	return gulp.src(SRC.IMAGES)
			.pipe(imagemin())
			.pipe(gulp.dest(DEST.IMAGES));
});

/* CLEAN - Delect all files in 'dist' folder*/
gulp.task('clean', () => {
	return del.sync([DIR.DEST]);
});

gulp.task('py-init', () => {
	return gulp.src(SRC.PY_INIT)
			.pipe(gulp.dest(DEST.PY_INIT));
});

gulp.task('py', () => {
	return gulp.src(SRC.PY)
			.pipe(gulp.dest(DEST.PY));
});


// Monitoring modification
gulp.task('watch', () => {
    let watcher = {
        js: gulp.watch(SRC.JS, ['js']),
        css: gulp.watch(SRC.CSS, ['css']),
        html: gulp.watch(SRC.HTML, ['html']),
        images: gulp.watch(SRC.IMAGES, ['images'])
    };
 
    let notify = (event) => {
        gutil.log('File', gutil.colors.yellow(event.path), 'was', gutil.colors.magenta(event.type));
    };
 
    for(let key in watcher) {
        watcher[key].on('change', notify);
    }
});
