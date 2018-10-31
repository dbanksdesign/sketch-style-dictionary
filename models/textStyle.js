const uuid = require('uuid-v4');
const Color = require('tinycolor2');

const id = uuid();

module.exports = function(opts = {}) {
  const color = Color(opts.color || "#000").toRgb();

  return {
    _class: "textStyle",
    verticalAlignment: opts.verticalAlignment || 0,
    sharedObjectID: opts.sharedObjectID,
    do_objectID: opts.do_objectID,
    encodedAttributes: {
      MSAttributedStringFontAttribute: {
        _class: "fontDescriptor",
        attributes: {
          name: opts.fontName || "AmazonEmber-Regular",
          size: opts.fontSize || 16
        }
      },
      MSAttributedStringColorAttribute: {
        _class: "color",
        alpha: color.a,
        blue: color.b / 255,
        green: color.g / 255,
        red: color.r / 255
      },
      textStyleVerticalAlignmentKey: 0,
      paragraphStyle: {
        _class: "paragraphStyle",
        alignment: opts.alignment || 0
      }
    }
  }
}