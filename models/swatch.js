const group = require('./group');
const rect = require('./rect');
const fill = require('./fill');
const text = require('./text');

module.exports = function(opts) {
  let _fill = fill(opts.color);
  let _rect = rect({
    width: 100,
    height: 100,
    x: 0,
    y: 0,
    fills: [_fill],
    borders: []
  });
  let _name = text({
    name: opts.name,
    string: opts.name,
    width: 80,
    height: 50,
    x: 120,
    y: 0,
    fills: [fill({
      red: 0,
      green: 0,
      blue: 0,
      alpha: 1
    })],
    font: "AmazonEmber-Regular"
  });
  let _value = text({
    name: opts.value,
    string: opts.value,
    width: 80,
    height: 50,
    x: 120,
    y: 50,
    fills: [fill({
      red: 0.5,
      green: 0.5,
      blue: 0.5,
      alpha: 1
    })],
    size: 10
  });


  let _group = group({
    "height": 100,
    "width": 200,
    "x": (opts.index * 200) + 20,
    "y": 20,
    "name": opts.name,
    "layers": [
      _rect,
      _name,
      _value
    ]
  });

  return _group;
}
