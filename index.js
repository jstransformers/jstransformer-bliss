'use strict'

var merge = require('merge-deep')
var Bliss = require('bliss')

exports.name = 'bliss'
exports.inputFormats = ['bliss', 'html']
exports.outputFormat = 'html'

exports.compile = function (str, opts) {
  var bliss = new Bliss(opts)
  return function (locals) {
    locals = locals.context || locals || {}
    locals = merge({}, opts.context || {}, locals)
    return bliss.compile(str, {context: locals})()
  }
}
