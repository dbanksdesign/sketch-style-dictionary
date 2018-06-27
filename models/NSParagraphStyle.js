const plist = require('simple-plist');

module.exports = function(opts = {}) {
  return plist.bplistCreator({
    "$version": 100000,
    "$objects": [
      "$null",
      {
        "$class": {
          "UID": 4
        },
        "NSTabStops": {
          "UID": 0
        },
        "NSTextLists": {
          "UID": 2
        },
        "NSTextBlocks": {
          "UID": 2
        },
        "NSAllowsTighteningForTruncation": 1,
        "NSMaxLineHeight": 40,
        "NSMinLineHeight": 40
      },
      {
        "NS.objects": [],
        "$class": {
          "UID": 3
        }
      },
      {
        "$classname": "NSArray",
        "$classes": [
          "NSArray",
          "NSObject"
        ]
      },
      {
        "$classname": "NSMutableParagraphStyle",
        "$classes": [
          "NSMutableParagraphStyle",
          "NSParagraphStyle",
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
