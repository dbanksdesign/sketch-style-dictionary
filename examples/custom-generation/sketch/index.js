const { custom } = require('sketch-style-dictionary/builders');
const ColorPage = require('./pages/color');

module.exports = function(dictionary, config) {
  return custom([
    ColorPage( dictionary )
  ], config.sketchOutput)
}