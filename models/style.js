module.exports = function(opts = {}) {
  return {
    _class: "style",
    sharedObjectID: opts.sharedObjectID,
    do_objectID: opts.do_objectID,
    endMarkerType: 0,
    miterLimit: 10,
    startMarkerType: 0,
    windingRule: 1,
    textStyle: opts.textStyle,
    borders: opts.borders,
    fills: opts.fills
  }
}