# Builder-styles-raw [![Build Status](https://travis-ci.org/kewah/builder-styles-raw.svg?branch=master)](https://travis-ci.org/kewah/builder-styles-raw)

Returns the raw version of the style files.
Useful in case you want to render your styles with a preprocessor.

## Install

With [npm](http://npmjs.org) do:

```shell
npm install builder-styles-raw --save-dev
```

## Usage

```js
var builder = require('component-builder')
var raw = require('builder-styles-raw')
var stylus = require('stylus');

builder.styles(tree)
  .use('styles', raw())
  .end(function(err, string) {
    stylus.render(string, function(err, css) {
      fs.writeFileSync(dest, css);
    });
  });
```

## License

MIT
