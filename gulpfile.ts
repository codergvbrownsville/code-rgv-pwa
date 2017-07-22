/**
 * Miscellaneous build config with gulp
 */

import * as del from "del";
import * as gulp from "gulp";

gulp.task("clean", done => {
  del(["./coverage", "./dist"]);
  done();
});
