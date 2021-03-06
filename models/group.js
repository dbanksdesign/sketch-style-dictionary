const uuid = require('uuid-v4');
const style = require('./style');

module.exports = function(opts = {}) {
  return {
    _class: "group",
    do_objectID: opts.id || uuid(),
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
      height: opts.height || 100,
      width: opts.width || 100,
      x: opts.x || 0,
      y: opts.y || 0
    },
    isFixedToViewport: false,
    isFlippedHorizontal: false,
    isFlippedVertical: false,
    isLocked: false,
    isVisible: true,
    layerListExpandedType: 0,
    name: opts.name || "Group",
    nameIsFixed: true,
    resizingConstraint: 63,
    resizingType: 0,
    rotation: 0,
    shouldBreakMaskChain: false,
    style: opts.style || style(),
    hasClickThrough: false,
    layers: opts.layers || []
  }
}
