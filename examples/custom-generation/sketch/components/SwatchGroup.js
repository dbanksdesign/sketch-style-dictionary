const {Group, Rect, Fill, TextLayer, TextStyle} = require('sketch-style-dictionary/models');
const Swatch = require('./Swatch');

module.exports = function({ name, colors, x, y }) {
  return Group({
    name: name,
    x: x,
    y: y,
    layers: colors.map((color, i) => {
      return Swatch({
        name: color.name,
        x: (100 * i) + 20,
        y: 0,
        value: color.original.value,
        color: color.value
      });
    })
  });
}