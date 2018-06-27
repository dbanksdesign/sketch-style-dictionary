const plist = require('simple-plist');

var attributed_string = {
  "$version": 100000,
  "$objects": [
    "$null",
    {
      "NSString": {
        "UID": 2
      },
      "$class": {
        "UID": 19
      },
      "NSAttributes": {
        "UID": 3
      }
    },
    "Testing",
    {
      "NS.keys": [
        {
          "UID": 4
        },
        {
          "UID": 5
        },
        {
          "UID": 6
        }
      ],
      "NS.objects": [
        {
          "UID": 7
        },
        {
          "UID": 8
        },
        {
          "UID": 16
        }
      ],
      "$class": {
        "UID": 18
      }
    },
    "NSLigature",
    "MSAttributedStringFontAttribute",
    "NSParagraphStyle",
    0,
    {
      "$class": {
        "UID": 15
      },
      "NSFontDescriptorAttributes": {
        "UID": 9
      }
    },
    {
      "NS.keys": [
        {
          "UID": 10
        },
        {
          "UID": 11
        }
      ],
      "NS.objects": [
        {
          "UID": 12
        },
        {
          "UID": 13
        }
      ],
      "$class": {
        "UID": 14
      }
    },
    "NSFontSizeAttribute",
    "NSFontNameAttribute",
    17,
    "AmazonEmber-Bold",
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
    },
    {
      "NSTabStops": {
        "UID": 0
      },
      "NSAlignment": 4,
      "NSAllowsTighteningForTruncation": 1,
      "$class": {
        "UID": 17
      }
    },
    {
      "$classname": "NSParagraphStyle",
      "$classes": [
        "NSParagraphStyle",
        "NSObject"
      ]
    },
    {
      "$classname": "NSDictionary",
      "$classes": [
        "NSDictionary",
        "NSObject"
      ]
    },
    {
      "$classname": "NSAttributedString",
      "$classes": [
        "NSAttributedString",
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
}

module.exports = function(opts = {}) {
  return plist.bplistCreator({
    "$version": 100000,
    "$objects": [
      "$null",
      {
        "NSString": {
          "UID": 2
        },
        "$class": {
          "UID": 19
        },
        "NSAttributes": {
          "UID": 3
        }
      },
      opts.string,
      {
        "NS.keys": [
          {
            "UID": 4
          },
          {
            "UID": 5
          },
          {
            "UID": 6
          }
        ],
        "NS.objects": [
          {
            "UID": 7
          },
          {
            "UID": 8
          },
          {
            "UID": 16
          }
        ],
        "$class": {
          "UID": 18
        }
      },
      "NSLigature",
      "MSAttributedStringFontAttribute",
      "NSParagraphStyle",
      0,
      {
        "$class": {
          "UID": 15
        },
        "NSFontDescriptorAttributes": {
          "UID": 9
        }
      },
      {
        "NS.keys": [
          {
            "UID": 10
          },
          {
            "UID": 11
          }
        ],
        "NS.objects": [
          {
            "UID": 12
          },
          {
            "UID": 13
          }
        ],
        "$class": {
          "UID": 14
        }
      },
      "NSFontSizeAttribute",
      "NSFontNameAttribute",
      opts.size || 17,
      opts.font || "AmazonEmber-Bold",
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
      },
      {
        "NSTabStops": {
          "UID": 0
        },
        "NSAlignment": 4,
        "NSAllowsTighteningForTruncation": 1,
        "$class": {
          "UID": 17
        }
      },
      {
        "$classname": "NSParagraphStyle",
        "$classes": [
          "NSParagraphStyle",
          "NSObject"
        ]
      },
      {
        "$classname": "NSDictionary",
        "$classes": [
          "NSDictionary",
          "NSObject"
        ]
      },
      {
        "$classname": "NSAttributedString",
        "$classes": [
          "NSAttributedString",
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

// module.exports = function(opts = {}) {
//   var objs = attributed_string["$objects"].slice(0);
//   objs[2] = opts.string || '';
//   return plist.bplistCreator(Object.assign({}, attributed_string, {
//     "$objects": objs
//   })).toString('base64');
// }
