const uuid = require('uuid-v4');

module.exports = function(opts = {}) {
  return {
    _class: "artboard",
    do_objectID: opts.id || uuid().toUpperCase(),
    exportOptions: {
      _class: "exportOptions",
      exportFormats: [],
      includedLayerIds: [],
      layerOptions: 0,
      shouldTrim: false
    },
    frame: {
      _class: "rect",
      constrainProportions: false,
      height: opts.height || 100,
      width: opts.width || 100,
      x: opts.x || 0,
      y: opts.y || 0
    },
    isFlippedHorizontal: false,
    isFlippedVertical: false,
    isLocked: false,
    isVisible: true,
    layerListExpandedType: 2,
    name: opts.name || "Artboard",
    nameIsFixed: true,
    resizingConstraint: 63,
    resizingType: 0,
    rotation: 0,
    shouldBreakMaskChain: true,
    style: {
      _class: "style",
      endDecorationType: 0,
      miterLimit: 10,
      startDecorationType: 0
    },
    hasClickThrough: false,
    layers: opts.layers || [],
    horizontalRulerData: {
      _class: "rulerData",
      base: 0,
      guides: []
    },
    includeInCloudUpload: true,
    verticalRulerData: {
      _class: "rulerData",
      base: 0,
      guides: []
    }
  }
}
