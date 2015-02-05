# Builder-styles-raw [![Build Status](https://travis-ci.org/kewah/builder-styles-raw.svg?branch=master)](https://travis-ci.org/kewah/builder-styles-raw)

Returns the raw version of the coffeescript files.
Useful in case you want to render your coffeescript with a preprocessor.

## Install

With [npm](http://npmjs.org) do:

```shell
npm install git://github.com/noahrc/builder-coffee-raw --save-dev
```

## Usage

```js
var builder = require('component-builder')
var rawCoffee = require('builder-coffee-raw')
var stylus = require('stylus');

builder.styles(tree)
  .use('styles', rawCoffee())
  .end(function(err, string) {
    stylus.render(string, function(err, css) {
      fs.writeFileSync(dest, css);
    });
  });
```

## License

MIT
