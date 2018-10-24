/**
 * Licensed Materials - Property of tenxcloud.com
 * (C) Copyright 2016 TenxCloud. All Rights Reserved.
 *
 * gulp config
 *
 * v0.1 - 2016-12-12
 * @author Gaojian
 */

'use strict'
//gulp加载插件
var gulp = require('gulp'); //自动加载插件
var g = require('gulp-load-plugins')({
  lazy: false
}); //插件能自动加载package.json文件里的gulp插件
var fs = require('fs');
var less = require('gulp-less'); //less编译插件

var config = {
    paths: {
      html: {
        src: ['src/coms/views/*.html']
      },
      libs: {
        src: ['src/lib/**']
      },
      comsjs: {
        src: ['src/coms/js/*.js']
      },
      libcss: {
        src: ["src/lib/**/*.css"]
      },
      appcss: {
        src: ['src/css/*.css']
      },
      less: {
        src: ['src/less/*.less']
      },
      appless: {
        src: ['src/less/*.less']
      },
      assets: {
        src: ["src/assets/img/**"]
      },
      commoncss: {
        src: ['dist/Header.css', 'dist/Footer.css', 'dist/Reset.css']
      }
    }
  }
  // 默认任务
gulp.task('watch', function() {
  gulp.watch(config.paths.appless.src, [], ['dist', 'dist']);
  gulp.watch(config.paths.comsjs.src, [], ['dist', 'dist']);
  gulp.watch(config.paths.html.src, [], ['dist', 'dist']);
});

// less编译
gulp.task('less', function() {
  gulp.src(config.paths.appless.src)
    .pipe(less())
    .pipe(gulp.dest('src/css'));
});

// less编译
gulp.task('lesstocss', function() {
  gulp.src(config.paths.less.src)
    .pipe(less())
    .pipe(gulp.dest('src/css'));
});

gulp.task('default', ['less', 'watch']);

gulp.task('transformless', ['less', 'appcss']);

gulp.task('dist', ['less', 'appcss', 'html', 'moveassets', 'js', 'libs'])

gulp.task('commoncss', function() {
  gulp.src(config.paths.commoncss.src)
    .pipe(g.concat('app.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(g.rename('app.min.css'))
    .pipe(g.cssmin())
    .pipe(gulp.dest('./dist'))
})

gulp.task('appcss', ['less'], function(){
  gulp.src(config.paths.appcss.src)
    .pipe(gulp.dest('dist/css'))
})

gulp.task('html', function() {
  gulp.src(config.paths.html.src)
    .pipe(gulp.dest('dist/coms/views'))
})

gulp.task('libs', function() {
  gulp.src(config.paths.libs.src)
    .pipe(gulp.dest('dist/lib'))
})

gulp.task('js', function() {
  gulp.src(config.paths.comsjs.src)
    .pipe(gulp.dest('dist/coms/js'))
})

gulp.task('moveassets', function() {
  gulp.src(config.paths.assets.src[0])
    .pipe(gulp.dest('dist/assets/img'))
});
