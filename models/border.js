module.exports = function(opts = {}) {
  return {
    "_class": "border",
    "isEnabled": true,
    "color": {
      "_class": "color",
      "alpha": opts.alpha || 1,
      "blue": opts.blue || 0.592,
      "green": opts.green || 0.592,
      "red": opts.red || 0.592
    },
    "fillType": 0,
    "position": 1,
    "thickness": 1
  }
}
