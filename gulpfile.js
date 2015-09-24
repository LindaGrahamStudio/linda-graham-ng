var gulp = require('gulp');
var serve = require('gulp-serve');
var browserSync = require('browser-sync').create();

//browserSync.create();

// gulp.task('serve', function(done) {
//   browserSync.init({
//     open: false,
//     port: 9000,
//     server: {
//       baseDir: ['.'],
//       middleware: function (req, res, next) {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         next();
//       }
//     }
//   }, done);
// });

function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['serve'], function() {
  gulp.watch('./*.css', [browserSync.reload]).on('change', reportChange);
  gulp.watch('./*.js', [browserSync.reload]).on('change', reportChange);
  gulp.watch('./*.html', [browserSync.reload]).on('change', reportChange);
  gulp.watch('./components/**/*.css', [browserSync.reload]).on('change', reportChange);
  gulp.watch('./components/**/*.js', [browserSync.reload]).on('change', reportChange);
  gulp.watch('./components/**/*.html', [browserSync.reload]).on('change', reportChange);
  gulp.watch('./shared/**/*.css', [browserSync.reload]).on('change', reportChange);
  gulp.watch('./shared/**/*.js', [browserSync.reload]).on('change', reportChange);
  gulp.watch('./shared/**/*.html', [browserSync.reload]).on('change', reportChange);
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});