'use strict'

const merge = require('merge-deep')
const Bliss = require('bliss')

exports.name = 'bliss'
exports.inputFormats = ['bliss', 'html']
exports.outputFormat = 'html'

exports.compile = function (str, opts) {
  const bliss = new Bliss(opts)
  return locals => {
    locals = locals.context || locals || {}
    locals = merge({}, opts.context || {}, locals)
    return bliss.compile(str, {
      context: locals
    })()
  }
}
