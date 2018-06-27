module.exports = function(opts = {}) {
  return {
    "_class": "fill",
    "isEnabled": true,
    "color": {
      "_class": "color",
      "alpha": opts.alpha || 0,
      "blue": opts.blue || 0,
      "green": opts.green || 0,
      "red": opts.red || 0
    },
    "fillType": 0,
    "noiseIndex": 0,
    "noiseIntensity": 0,
    "patternFillType": 0,
    "patternTileScale": 1
  }
}
