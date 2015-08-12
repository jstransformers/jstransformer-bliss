'use strict';

var merge = require('merge-deep')
var Bliss = require('bliss');

exports.name = 'bliss';
exports.inputFormats = ['bliss', 'html'];
exports.outputFormat = 'html';

exports.compile = function (str, options, locals) {
  var opts = typeof options === 'object' ? options : null;
  var bliss = new Bliss(opts);
  var data = merge({}, opts, locals);
  return bliss.compile(str, data);
};
