const plist = require('simple-plist');

module.exports = function(opts = {}) {
  return plist.bplistCreator({
    "$version": 100000,
    "$objects": [
      "$null",
      {
        "NSRGB": Buffer.from(`${opts.r || '0'} ${opts.g || '0'} ${opts.b || '0'}`),
        "NSColorSpace": 1,
        "NSCustomColorSpace": {
          "UID": 2
        },
        "$class": {
          "UID": 4
        }
      },
      {
        "NSID": 1,
        "$class": {
          "UID": 3
        }
      },
      {
        "$classname": "NSColorSpace",
        "$classes": [
          "NSColorSpace",
          "NSObject"
        ]
      },
      {
        "$classname": "NSColor",
        "$classes": [
          "NSColor",
          "NSObject"
        ]
      }
    ],
    "$archiver": "NSKeyedArchiver",
    "$top": {
      "root": {
        "UID": 1
      }
    }
  }).toString('base64');
}
