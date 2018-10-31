const Group = require('./group');
const Rect = require('./rect');
const Fill = require('./fill');
const TextLayer = require('./textLayer');
const TextStyle = require('./textStyle');

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
    width: 80,
    height: 50,
    x: 120,
    y: 0,
    fontName: "AmazonEmber-Regular",
    fontSize: 30,
    color: "#ccc"
  });

  let value = TextLayer({
    name: opts.value,
    string: opts.value,
    width: 80,
    height: 50,
    x: 120,
    y: 50,
    fontSize: 20,
    color: opts.value
  });

  let group = Group({
    height: 100,
    width: 200,
    x: (opts.index * 200) + 20,
    y: 20,
    name: opts.name,
    layers: [
      rect,
      name,
      value
    ]
  });

  return group;
}
