var gulp = require("gulp");
var wiredep = require("wiredep");
var inject = require("gulp-inject");
var connect = require("gulp-connect");

gulp.task("inject-vendor", function() {
	wiredep({src: "./src/index.html"});
});

gulp.task("inject-own", function() {
	gulp.src("./src/index.html")
		.pipe(inject(gulp.src([,
      "./src/assets/**/*.css",
      "./src/assets/**/*.js", 
      "./src/app/component/**/*.js", 
      "./src/app/main/**/*.js", 
      "./src/app/*.js"
    ], {read: false})))
		.pipe(gulp.dest("./src/"));
});

gulp.task("connect", function () {
  connect.server({
    root: "dist",
    port: 4000,
    livereload: true
  });
});

gulp.task("default", ["inject-vendor", "inject-own"]);