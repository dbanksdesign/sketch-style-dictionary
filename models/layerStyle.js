const uuid = require('uuid-v4');

module.exports = function(opts = {}) {
  return {
    "_class": "sharedStyle",
    "do_objectID": uuid(),
    "name": opts.name || "",
    "value": {
      "_class": "style",
      "endDecorationType": 0,
      "fills": opts.fills || [],
      "miterLimit": 10,
      "sharedObjectID": uuid(),
      "startDecorationType": 0
    }
  }
});
