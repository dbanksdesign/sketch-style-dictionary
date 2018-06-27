const uuid = require('uuid-v4');

module.exports = function(opts = {}) {
  return {
    "_class": "group",
    "do_objectID": uuid(),
    "exportOptions": {
      "_class": "exportOptions",
      "exportFormats": [],
      "includedLayerIds": [],
      "layerOptions": 0,
      "shouldTrim": false
    },
    "frame": {
      "_class": "rect",
      "constrainProportions": false,
      "height": opts.height || 100,
      "width": opts.width || 100,
      "x": opts.x || 0,
      "y": opts.y || 0
    },
    "isFlippedHorizontal": false,
    "isFlippedVertical": false,
    "isLocked": false,
    "isVisible": true,
    "layerListExpandedType": 0,
    "name": opts.name || "Group",
    "nameIsFixed": true,
    "resizingConstraint": 63,
    "resizingType": 0,
    "rotation": 0,
    "shouldBreakMaskChain": false,
    "style": {
      "_class": "style",
      "endDecorationType": 0,
      "miterLimit": 10,
      "startDecorationType": 0
    },
    "hasClickThrough": false,
    "layers": opts.layers || []
  }
}
