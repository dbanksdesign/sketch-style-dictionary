const uuid = require('uuid-v4');

module.exports = function(opts ={}) {
  return {
    _class: "sharedStyle",
    do_objectID: opts.id || uuid(),
    name: opts.name || "Style",
    value: opts.value
  }
}