# jstransformer-bliss [![The MIT License][license-img]][license-url]

[bliss](https://github.com/cstivers78/bliss) support for [JSTransformers][jstransformers-url]

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-bliss --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var bliss = require('jstransformer')(require('jstransformer-bliss'));

bliss.render('<p>Hello @place !!</p>', {context: {place: 'world'}}).body
//=> '<p>Hello world !!</p>'
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-bliss/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-bliss
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-bliss.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-bliss
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-bliss.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-bliss
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-bliss.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-bliss
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-bliss.svg

[jstransformers-url]: http://github.com/jstransformers
