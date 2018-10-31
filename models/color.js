const Color = require('tinycolor2');

module.exports = function(opts = {}) {
  let alpha, blue, green, red;
  if (opts.color) {
    const {r,g,b,a} = Color(opts.color).toRgb();
    alpha = a; blue = b/255; green = g/255; red = r/255;
  } else if (opts.red) {
    let {alpha, blue, green, red} = opts;
  }
  return {
    _class: "color",
    alpha: alpha || 1,
    blue: blue || 0,
    green: green || 0,
    red: red || 0
  }
}