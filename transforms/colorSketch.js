const Color = require('tinycolor2');

module.exports = {
  type: 'value',
  matcher: (prop) => prop.attributes.category === 'color',
  transformer: (prop) => {
    const {r,g,b,a} = Color(prop.value).toRgb();
    return {
      alpha: a,
      red: r/255,
      blue: b/255,
      green: g/255
    }
  }
}