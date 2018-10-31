const uuid = require('uuid-v4');
const style = require('./style');

module.exports = function(opts = {}) {
  return {
    _class: opts.class || "page",
    do_objectID: opts.id || uuid().toUpperCase(),
    booleanOperation: -1,
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
      height: opts.height || 0,
      width: opts.width || 0,
      x: opts.x || 0,
      y: opts.y || 0
    },
    isFixedToViewport: false,
    isFlippedHorizontal: false,
    isFlippedVertical: false,
    isLocked: false,
    isVisible: true,
    layerListExpandedType: 0,
    name: opts.name || "Object",
    nameIsFixed: false,
    resizingConstraint: 63,
    resizingType: 0,
    rotation: 0,
    shouldBreakMaskChain: false,
    style: opts.style || style(),
    hasClickThrough: true,
    layers: opts.layers || []
  }
}