var gulp = require('gulp');
var karma = require('karma');
var del = require('del');
var $ = require('gulp-load-plugins')();


//******************************************************************************
//* CLEAN
//******************************************************************************
var tsProject = $.typescript.createProject('./src/tsconfig.json');

gulp.task('clean', function(cb) {
    del(['src/app/**/**.+(js|map)', 'coverage/**']);
    cb();
});

//******************************************************************************
//* TYPESCRIPT
//******************************************************************************
var tsProject = $.typescript.createProject('./src/tsconfig.json');

gulp.task('ts', ['clean'], function() {
    return gulp.src([
            'src/app/**/*.ts',
            'typings/index.d.ts'
        ])
        .pipe($.sourcemaps.init())
            .pipe($.typescript(tsProject))
        .pipe($.sourcemaps.write('.', { sourceRoot: 'src/app' }))
        .pipe(gulp.dest('src/app'));
});

//******************************************************************************
//* REMAP
//******************************************************************************
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

gulp.task('remap-istanbul', function () {
    return gulp.src('coverage/coverage-final.json')
        .pipe(remapIstanbul({
            reports: {
                'json': 'coverage/coverage.json',
                'html': 'coverage/html-report-remap',
                'text': 'coverage/coverage.txt',
            }
        }));
});

//******************************************************************************
//* TEST
//******************************************************************************
gulp.task('test', ['ts'], function(cb) {
    var server = new karma.Server({
        configFile: __dirname + '/karma.conf.js'
    }, function(code) {
        cb();
        gulp.start('remap-istanbul');
    });

    server.start();
});