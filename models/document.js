const uuid = require('uuid-v4');

module.exports = function(opts = {}) {
  return {
    _class: "document",
    do_objectID: opts.id || uuid().toUpperCase(),
    assets: {
      _class: "assetCollection",
      colors: [],
      gradients: [],
      imageCollection: {
        _class: "imageCollection",
        images: {}
      },
      images: opts.images || []
    },
    colorSpace: 0,
    currentPageIndex: 0,
    foreignLayerStyles: [],
    foreignSymbols: [],
    foreignTextStyles: [],
    layerStyles: {
      _class: "sharedStyleContainer",
      objects: opts.layerStyles || []
    },
    layerSymbols: {
      _class: "symbolContainer",
      objects: opts.symbols || []
    },
    layerTextStyles: {
      _class: "sharedTextStyleContainer",
      objects: opts.textStyles || []
    },
    pages: opts.pages.map((page) => ({
      _class: "MSJSONFileReference",
      _ref_class: "MSImmutablePage",
      _ref: `pages/${page}`
    }))
}
}