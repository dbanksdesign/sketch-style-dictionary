const uuid = require('uuid-v4');
const attributed_string = require('./attributed_string');
const font_attribute = require('./font_attribute');
const fill = require('./fill');
const plist = require('simple-plist');

module.exports = function(opts = {}) {
  return {
    "_class": "text",
    "do_objectID": uuid(),
    "exportOptions": {
      "_class": "exportOptions",
      "exportFormats": [],
      "includedLayerIds": [],
      "layerOptions": 0,
      "shouldTrim": false
    },
    "frame": {
      "_class": "rect",
      "constrainProportions": false,
      "height": opts.height || 100,
      "width": opts.width || 100,
      "x": opts.x || 0,
      "y": opts.y || 0
    },
    "isFlippedHorizontal": false,
    "isFlippedVertical": false,
    "isLocked": false,
    "isVisible": true,
    "layerListExpandedType": 0,
    "name": opts.name || opts.string || "",
    "nameIsFixed": false,
    "resizingConstraint": 47,
    "resizingType": 0,
    "rotation": 0,
    "shouldBreakMaskChain": false,
    "style": {
      "_class": "style",
      "endDecorationType": 0,
      "fills": opts.fills || [],
      "miterLimit": 10,
      "startDecorationType": 0,
      "textStyle": {
        "_class": "textStyle",
        "encodedAttributes": {
          "MSAttributedStringFontAttribute": {
            "_archive": plist.bplistCreator({
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
                13,
                "AmazonEmber-Regular",
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
            }).toString('base64')
          },
          "NSParagraphStyle": {
            "_archive": "YnBsaXN0MDDUAQIDBAUGJCVYJHZlcnNpb25YJG9iamVjdHNZJGFyY2hpdmVyVCR0b3ASAAGGoKUHCBYaIFUkbnVsbNcJCgsMDQ4PEBESEhQVFVYkY2xhc3NaTlNUYWJTdG9wc1tOU1RleHRMaXN0c1xOU1RleHRCbG9ja3NfEB9OU0FsbG93c1RpZ2h0ZW5pbmdGb3JUcnVuY2F0aW9uXxAPTlNNYXhMaW5lSGVpZ2h0XxAPTlNNaW5MaW5lSGVpZ2h0gASAAIACgAIQASNAMgAAAAAAANIXCRgZWk5TLm9iamVjdHOggAPSGxwdHlokY2xhc3NuYW1lWCRjbGFzc2VzV05TQXJyYXmiHR9YTlNPYmplY3TSGxwhIl8QF05TTXV0YWJsZVBhcmFncmFwaFN0eWxloyEjH18QEE5TUGFyYWdyYXBoU3R5bGVfEA9OU0tleWVkQXJjaGl2ZXLRJidUcm9vdIABAAgAEQAaACMALQAyADcAPQBDAFIAWQBkAHAAfQCfALEAwwDFAMcAyQDLAM0A1gDbAOYA5wDpAO4A+QECAQoBDQEWARsBNQE5AUwBXgFhAWYAAAAAAAACAQAAAAAAAAAoAAAAAAAAAAAAAAAAAAABaA=="
          },
          "MSAttributedStringColorDictionaryAttribute": {
            "red": 0,
            "alpha": 1,
            "blue": 0,
            "green": 1
          },
          "NSKern": 0.6
        },
        "verticalAlignment": 0
      }
    },
    "attributedString": {
      "_class": "MSAttributedString",
      "archivedAttributedString": {
        "_archive": attributed_string(opts)
      }
    },
    "automaticallyDrawOnUnderlyingPath": false,
    "dontSynchroniseWithSymbol": false,
    "glyphBounds": "{{0, 3}, {35, 11}}",
    "heightIsClipped": false,
    "lineSpacingBehaviour": 1,
    "textBehaviour": 0
  }
  // return {
  //   "_class": "text",
  //   "do_objectID": objID(),
  //   "exportOptions": {
  //     "_class": "exportOptions",
  //     "exportFormats": [],
  //     "includedLayerIds": [],
  //     "layerOptions": 0,
  //     "shouldTrim": false
  //   },
  //   "frame": {
  //     "_class": "rect",
  //     "constrainProportions": false,
  //     "height": opts.height || 100,
  //     "width": opts.width || 100,
  //     "x": opts.x || 0,
  //     "y": opts.y || 0
  //   },
  //   "isFlippedHorizontal": false,
  //   "isFlippedVertical": false,
  //   "isLocked": false,
  //   "isVisible": true,
  //   "layerListExpandedType": 0,
  //   "name": opts.name || opts.string || "",
  //   "nameIsFixed": false,
  //   "resizingConstraint": 47,
  //   "resizingType": 0,
  //   "rotation": 0,
  //   "shouldBreakMaskChain": false,
  //   "userInfo": {
  //     "com.animaapp.stc-sketch-plugin": {
  //       "kModelPropertiesKey": {
  //         "isAutoWidth": 1
  //       }
  //     }
  //   },
  //   "style": {
  //     "_class": "style",
  //     "endDecorationType": 0,
  //     "miterLimit": 10,
  //     "startDecorationType": 0,
  //     "textStyle": {
  //       "_class": "textStyle",
  //       "encodedAttributes": {
  //         "MSAttributedStringFontAttribute": {
  //           "_archive": font_attribute(opts)
  //         },
  //         "NSColor": {
  //           "_archive": "YnBsaXN0MDDUAQIDBAUGHyBYJHZlcnNpb25YJG9iamVjdHNZJGFyY2hpdmVyVCR0b3ASAAGGoKUHCBEVHFUkbnVsbNQJCgsMDQ4PEFVOU1JHQlxOU0NvbG9yU3BhY2VfEBJOU0N1c3RvbUNvbG9yU3BhY2VWJGNsYXNzTxAcMCAwLjE4NDMxMzcyNTUgMC4yMTE3NjQ3MDU5ABABgAKABNISDBMUVE5TSUQQAYAD0hYXGBlaJGNsYXNzbmFtZVgkY2xhc3Nlc1xOU0NvbG9yU3BhY2WiGhtcTlNDb2xvclNwYWNlWE5TT2JqZWN00hYXHR5XTlNDb2xvcqIdG18QD05TS2V5ZWRBcmNoaXZlctEhIlRyb290gAEACAARABoAIwAtADIANwA9AEMATABSAF8AdAB7AJoAnACeAKAApQCqAKwArgCzAL4AxwDUANcA5ADtAPIA+gD9AQ8BEgEXAAAAAAAAAgEAAAAAAAAAIwAAAAAAAAAAAAAAAAAAARk="
  //         },
  //         "NSKern": 0.15999999642372,
  //         "NSParagraphStyle": {
  //           "_archive": "YnBsaXN0MDDUAQIDBAUGJCVYJHZlcnNpb25YJG9iamVjdHNZJGFyY2hpdmVyVCR0b3ASAAGGoKUHCBYaIFUkbnVsbNcJCgsMDQ4PEBESEhQVFVYkY2xhc3NaTlNUYWJTdG9wc1tOU1RleHRMaXN0c1xOU1RleHRCbG9ja3NfEB9OU0FsbG93c1RpZ2h0ZW5pbmdGb3JUcnVuY2F0aW9uXxAPTlNNYXhMaW5lSGVpZ2h0XxAPTlNNaW5MaW5lSGVpZ2h0gASAAIACgAIQASNASQAAAAAAANIXCRgZWk5TLm9iamVjdHOggAPSGxwdHlokY2xhc3NuYW1lWCRjbGFzc2VzV05TQXJyYXmiHR9YTlNPYmplY3TSGxwhIl8QF05TTXV0YWJsZVBhcmFncmFwaFN0eWxloyEjH18QEE5TUGFyYWdyYXBoU3R5bGVfEA9OU0tleWVkQXJjaGl2ZXLRJidUcm9vdIABAAgAEQAaACMALQAyADcAPQBDAFIAWQBkAHAAfQCfALEAwwDFAMcAyQDLAM0A1gDbAOYA5wDpAO4A+QECAQoBDQEWARsBNQE5AUwBXgFhAWYAAAAAAAACAQAAAAAAAAAoAAAAAAAAAAAAAAAAAAABaA=="
  //         }
  //       },
  //       "verticalAlignment": 0
  //     }
  //   },
  //   "attributedString": {
  //     "_class": "MSAttributedString",
  //     "archivedAttributedString": {
  //       "_archive": attributed_string(opts)
  //     }
  //   },
  //   "automaticallyDrawOnUnderlyingPath": false,
  //   "dontSynchroniseWithSymbol": false,
  //   "glyphBounds": "{{0, 3}, {51, 11}}",
  //   "heightIsClipped": false,
  //   "lineSpacingBehaviour": 1,
  //   "textBehaviour": 0
  // }
}
