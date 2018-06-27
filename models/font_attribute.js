const plist = require('simple-plist');

module.exports = function(opts = {}) {
  return plist.bplistCreator({
    "$version": 100000,
    "$objects": [
      "$null",
      {
        "$class": {
          "UID": 8
        },
        "NSFontDescriptorAttributes": {
          "UID": 2
        }
      },
      {
        "NS.keys": [
          {
            "UID": 3
          },
          {
            "UID": 4
          }
        ],
        "NS.objects": [
          {
            "UID": 5
          },
          {
            "UID": 6
          }
        ],
        "$class": {
          "UID": 7
        }
      },
      "NSFontSizeAttribute",
      "NSFontNameAttribute",
      opts.size || 44,
      opts.font || "AmazonEmber-Light",
      {
        "$classname": "NSMutableDictionary",
        "$classes": [
          "NSMutableDictionary",
          "NSDictionary",
          "NSObject"
        ]
      },
      {
        "$classname": "NSFontDescriptor",
        "$classes": [
          "NSFontDescriptor",
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
