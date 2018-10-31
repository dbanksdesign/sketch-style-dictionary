const stringAttribute = require('./stringAttribute');

module.exports = function(opts = {}) {
  const string = opts.string || "Test";
  return {
    _class: "attributedString",
    string: string,
    attributes: opts.attributes || [
      stringAttribute(Object.assign({}, opts, {
        location: 0,
        length: string.length
      }))
    ]
  }
}