const {Group, Rect, Fill, TextLayer, TextStyle} = require('sketch-style-dictionary/models');

module.exports = function(opts) {
  let rect = Rect({
    width: 100,
    height: 100,
    x: 0,
    y: 0,
    fills: [Fill(opts.color)],
    borders: []
  });

  let name = TextLayer({
    name: opts.name,
    string: opts.name,
    width: 100,
    height: 30,
    x: 0,
    y: 110,
    fontName: "AmazonEmber-Bold",
    alignment: "center",
    fontSize: 16,
  });

  let value = TextLayer({
    name: opts.value,
    string: opts.value,
    width: 100,
    height: 30,
    x: 00,
    y: 150,
    fontSize: 16,
    alignment: "center",
  });

  return Group({
    height: 200,
    width: 100,
    x: opts.x,
    y: opts.y,
    name: opts.name,
    layers: [
      rect,
      name,
      value
    ]
  });
}
