const Color = require('./color');

module.exports = function(opts = {}) {
  return {
    _class: "stringAttribute",
    location: opts.location || 0,
    length: opts.length || 0,
    attributes: {
      MSAttributedStringFontAttribute: {
        _class: "fontDescriptor",
        attributes: {
          name: opts.fontName || "AmazonEmber-Regular",
          size: opts.fontSize || 16
        }
      },
      MSAttributedStringColorAttribute: Color(opts),
      textStyleVerticalAlignmentKey: 0,
      paragraphStyle: {
        _class: "paragraphStyle",
        alignment: opts.alignment || 0
      }
    }
  }
}