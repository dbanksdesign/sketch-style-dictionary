const uuid = require('uuid-v4');
const fill = require('./fill');
const border = require('./border');

module.exports = function(opts = {}) {
  return {
    _class: "shapeGroup",
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
    layerListExpandedType: 1,
    name: opts.name || "Rectangle",
    nameIsFixed: false,
    resizingConstraint: 63,
    resizingType: 0,
    rotation: 0,
    shouldBreakMaskChain: false,
    userInfo: {},
    style: {
      _class: "style",
      borders: opts.borders || [border()],
      endDecorationType: 0,
      endMarkerType: 0,
      fills: opts.fills || [fill()],
      miterLimit: 10,
      startDecorationType: 0,
      startMarkerType: 0,
      windingRule: 1
    },
    hasClickThrough: false,
    layers: [
      {
        _class: "rectangle",
        do_objectID: uuid().toUpperCase(),
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
          y: opts.x || 0
        },
        isFixedToViewport: false,
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        isLocked: false,
        isVisible: true,
        layerListExpandedType: 0,
        name: "Path",
        nameIsFixed: false,
        resizingConstraint: 63,
        resizingType: 0,
        rotation: 0,
        shouldBreakMaskChain: false,
        edited: false,
        isClosed: true,
        pointRadiusBehaviour: 1,
        points: [{
          _class: "curvePoint",
          cornerRadius: 0,
          curveFrom: "{0, 0}",
          curveMode: 1,
          curveTo: "{0, 0}",
          hasCurveFrom: false,
          hasCurveTo: false,
          point: "{0, 0}"
        },{
          _class: "curvePoint",
          cornerRadius: 0,
          curveFrom: "{1, 0}",
          curveMode: 1,
          curveTo: "{1, 0}",
          hasCurveFrom: false,
          hasCurveTo: false,
          point: "{1, 0}"
        },{
          _class: "curvePoint",
          cornerRadius: 0,
          curveFrom: "{1, 1}",
          curveMode: 1,
          curveTo: "{1, 1}",
          hasCurveFrom: false,
          hasCurveTo: false,
          point: "{1, 1}"
        },{
          _class: "curvePoint",
          cornerRadius: 0,
          curveFrom: "{0, 1}",
          curveMode: 1,
          curveTo: "{0, 1}",
          hasCurveFrom: false,
          hasCurveTo: false,
          point: "{0, 1}"
        }],
        fixedRadius: 0,
        hasConvertedToNewRoundCorners: true
      }
    ],
    clippingMaskMode: 0,
    hasClippingMask: false,
    windingRule: 1
  }
}
