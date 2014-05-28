/* global describe, it */
'use strict';

var assert = require('assert');
var Resolver = require('component-resolver');
var Builder = require('component-builder');
var path = require('path');
var rawStyles = require('..');


describe('builder-styles-raw', function() {
  it('should returns the raw version', function(done) {
    Resolver(path.join(__dirname, 'fixture'), {}, function(err, tree) {
      Builder.styles(tree)
        .use('styles', rawStyles())
        .end(function(err, string) {
          assert.equal(string, 'css\n\n\nscss\n\n\nsass\n\n\nstyl\n\n\n');
          done();
        });
    });
  });
});
