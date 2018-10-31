const attributedString = require('./attributedString');
const TextStyle = require('./textStyle');
const style = require('./style');
const uuid = require('uuid-v4');

const defaultTextStyle = {
  fontName: 'AmazonEmber-Bold',
  fontSize: 30,
  alpha: 1,
  red: 0,
  blue: 0,
  green: 0
}

const strToInt = {
  center: 2,
  left: 0,
  right: 1,
  justify: 3
}

module.exports = function(opts = {}) {
  const alignment = strToInt[opts.alignment || "left"];
  return {
    _class: "text",
    do_objectID: opts.id || uuid().toUpperCase(),
    booleanOperation: -1,
    automaticallyDrawOnUnderlyingPath: false,
    dontSynchroniseWithSymbol: false,
    glyphBounds: "{{1, 16}, {294, 54}}",
    lineSpacingBehaviour: 2,
    textBehaviour: 0,

    exportOptions: {
      _class: "exportOptions",
      exportFormats: [],
      includedLayerIds: [],
      layerOptions: 0,
      shouldTrim: false
    },

    frame: {
      _class: "rect",
      do_objectID: uuid().toUpperCase(),
      constrainProportions: false,
      height: opts.height || 100,
      width: opts.width || 300,
      x: opts.x || 0,
      y: opts.y || 0
    },

    isFixedToViewport: false,
    isFlippedHorizontal: false,
    isFlippedVertical: false,
    isLocked: false,
    isVisible: true,
    layerListExpandedType: 0,
    name: opts.name || "Text Layer",
    nameIsFixed: false,
    resizingConstraint: 47,
    resizingType: 0,
    rotation: 0,
    shouldBreakMaskChain: false,
    userInfo: {},

    style: opts.style || style({
      do_objectID: uuid().toUpperCase(),
      textStyle: opts.textStyle || TextStyle(
        Object.assign({}, defaultTextStyle, {
          do_objectID: uuid().toUpperCase(),
          fontName: opts.fontName,
          fontSize: opts.fontSize,
          alignment: alignment,
          color: opts.color
        })
      )
    }),

    attributedString: opts.attributedString || attributedString(
      Object.assign({}, defaultTextStyle, {
        string: opts.string || "Test",
        fontName: opts.fontName,
        fontSize: opts.fontSize,
        alignment: alignment,
        color: opts.color
      })
    )
  }
}