const object = require('./object');

module.exports = function(opts = {}) {
  return object({
    _class: "page",
    name: opts.name || "Page",
    layers: opts.layers || []
  });
}