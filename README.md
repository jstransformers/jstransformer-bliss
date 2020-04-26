# jstransformer-bliss

[bliss](https://github.com/cstivers78/bliss) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-bliss/master.svg)](https://travis-ci.org/jstransformers/jstransformer-bliss)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-bliss/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-bliss)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-bliss/master.svg)](http://david-dm.org/jstransformers/jstransformer-bliss)
[![NPM version](https://img.shields.io/npm/v/jstransformer-bliss.svg)](https://www.npmjs.org/package/jstransformer-bliss)

## Installation

    npm install jstransformer-bliss

## API

> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var bliss = require('jstransformer')(require('jstransformer-bliss'))

bliss.render('<p>Hello @place !!</p>', {context: {place: 'world'}}).body
//=> '<p>Hello world !!</p>'
```

## License

MIT
