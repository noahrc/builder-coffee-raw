'use strict';

module.exports = function() {
  return function raw(file, done) {
    if (!/css|styl|scss|sass/.test(file.extension)) return done();

    file.read(function(err) {
      if (err) return done(err);
      file.string = true;
      done();
    });
  };
};
