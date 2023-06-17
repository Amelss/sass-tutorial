const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("verve/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["verve/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
