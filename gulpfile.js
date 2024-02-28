// import gulp and plugins
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint-new');

// move css to hosted
const cssTask = (done) => {
  // get all css files
  gulp.src('./client/css/*.css')
    // prevents errors from plugins
    .pipe(plumber())
    // output the file to hosted folder
    .pipe(gulp.dest('./hosted/css/'));

  // tell gulp we're done by using a callback
  done();
};

// build js with babel
// same basic idea as the above cssTask
const jsTask = (done) => {
    gulp.src('./client/game.js')
      .pipe(plumber())
      .pipe(babel({
          presets: ['@babel/preset-env', '@babel/preset-react']
      }))
      .pipe(gulp.dest('./hosted/js/'));

    done();
};

// eslint on server code
const lintTask = (done) => {
  gulp.src(['./server/**/*.js'])
    .pipe(plumber())
    .pipe(eslint())
    // format makes the output readable
    .pipe(eslint.format())
    // if there is an error, stop the task
    .pipe(eslint.failAfterError());


  done();
};

// webp conversion of images
const webpTask = async (done) => {
  let module = await import('gulp-webp');
  let webp = module.default;

  gulp.src(['./client/img/**/*.png'])
    .pipe(plumber())
    .pipe(webp())
    .pipe(gulp.dest('./hosted/img/'));

  done();
};

// create a watch script
const watch = () => {
  // check for changes in js files, then run jsTask
  gulp.watch('./client/game.js', jsTask);

  // check for changes in css files, then run cssTask
  gulp.watch('./client/css/*.css', cssTask);

  // set up nodemon so it restarts the server on a change on any file (except those already being checked above)
  nodemon({
    script: './server/app.js',
    ignore: ['client/', 'node_modules/'],
    ext: 'js html css'
  });
};

// export scripts for use in package.json
module.exports.build = gulp.parallel(cssTask, jsTask, lintTask, webpTask);
module.exports.watch = watch;
module.exports.js = jsTask;
module.exports.css = cssTask;
module.exports.lint = lintTask;
module.exports.webp = webpTask;