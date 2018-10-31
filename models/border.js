const Color = require('./color');

module.exports = function(opts = {}) {
  return {
    _class: "border",
    isEnabled: true,
    color: Color(opts),
    fillType: 0,
    position: 1,
    thickness: 1
  }
}
