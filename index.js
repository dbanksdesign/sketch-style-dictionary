const fs = require('fs');
const swatch = require('./models/swatch');
const _ = require('lodash');
const fontAttribute = require('./models/font_attribute');
const NSColor = require('./models/NSColor');
const JSZip = require('jszip');

// This exports a function that will be called in a custom action in a Style Dictionary
module.exports = function(dictionary, platform) {
  // Read an input sketch file in the style dicionary
  // This is so we can use it as a template for generating an output sketch file.
  fs.readFile(platform.sketchInput, function(err, data) {
    if(err) throw err;
    JSZip.loadAsync(data).then(function(zip) {
      // zip contains a json file that describes all the directory & files in the zip file

      var done = _.after(2, function() {
        zip
          .generateNodeStream({ type:'nodebuffer', streamFiles:true })
          .pipe(fs.createWriteStream(platform.sketchOutput))
          .on('finish', () => {
            console.log('yay saved file. Open me in sketch to see the changes');
          });
      });

      // read the top level page
      // hardcoding page because im lazy ;)
      const pagePath = Object.keys(zip.files)[1];

      zip.file('document.json')
        .async('string')
        .then(function(str) {
          const json = JSON.parse(str);
          json.assets.colors = _.chain(dictionary.allProperties)
            .filter((prop) => prop.attributes.category === 'color' && prop.attributes.type === 'base')
            .map(function(prop) {
              return {
                _class: "color",
                alpha: prop.attributes.rgb.a,
                red: prop.attributes.rgb.r / 255,
                green: prop.attributes.rgb.g / 255,
                blue: prop.attributes.rgb.b / 255
              }
            }).value();

          // See if we could iterate over styles and see if they exist already,
          // if not, create a new style. This way we can keep objectIDs consistent.
          // Need to figure out a way to how to know what is a textStyle versus a layerStyle
          json.layerTextStyles.objects = [{
            "_class": "sharedStyle",
            "do_objectID": "888C45A7-88F0-888D-B966-E7AF4B3BD75C",
            "name": "TESTING",
            "value": {
              "_class": "style",
              "endDecorationType": 0,
              "miterLimit": 10,
              "sharedObjectID": "888C45A7-88F0-888D-B966-E7AF4B3BD75C",
              "startDecorationType": 0,
              "textStyle": {
                "_class": "textStyle",
                "encodedAttributes": {
                  "MSAttributedStringFontAttribute": {
                    "_archive": fontAttribute({
                      size: 69,
                      font: 'AmazonEmber-Medium'
                    })
                  },
                  "NSColor": {
                    "_archive": NSColor()
                  },
                  "NSKern": 0.18999999761581,
                  "MSAttributedStringColorDictionaryAttribute": {
                    "red": 0,
                    "alpha": 1,
                    "blue": 0.2117647059,
                    "green": 0.1843137255
                  },
                  "NSParagraphStyle": {
                    "_archive": "YnBsaXN0MDDUAQIDBAUGJCVYJHZlcnNpb25YJG9iamVjdHNZJGFyY2hpdmVyVCR0b3ASAAGGoKUHCBYaIFUkbnVsbNcJCgsMDQ4PEBESEhQVFVYkY2xhc3NaTlNUYWJTdG9wc1tOU1RleHRMaXN0c1xOU1RleHRCbG9ja3NfEB9OU0FsbG93c1RpZ2h0ZW5pbmdGb3JUcnVuY2F0aW9uXxAPTlNNYXhMaW5lSGVpZ2h0XxAPTlNNaW5MaW5lSGVpZ2h0gASAAIACgAIQASNAMgAAAAAAANIXCRgZWk5TLm9iamVjdHOggAPSGxwdHlokY2xhc3NuYW1lWCRjbGFzc2VzV05TQXJyYXmiHR9YTlNPYmplY3TSGxwhIl8QF05TTXV0YWJsZVBhcmFncmFwaFN0eWxloyEjH18QEE5TUGFyYWdyYXBoU3R5bGVfEA9OU0tleWVkQXJjaGl2ZXLRJidUcm9vdIABAAgAEQAaACMALQAyADcAPQBDAFIAWQBkAHAAfQCfALEAwwDFAMcAyQDLAM0A1gDbAOYA5wDpAO4A+QECAQoBDQEWARsBNQE5AUwBXgFhAWYAAAAAAAACAQAAAAAAAAAoAAAAAAAAAAAAAAAAAAABaA=="
                  }
                },
                "verticalAlignment": 0
              }
            }
          }];
          zip.file('document.json', JSON.stringify(json));
          done('document.json');
        });

      zip.file(pagePath)
        .async('string')
        .then(function(str) {
          const json = JSON.parse(str);
          var arr = _.chain(dictionary.allProperties)
            .filter((prop) => prop.attributes.category === 'color' && prop.attributes.type === 'base')
            .map(function(prop, i) {
              return swatch({
                name: prop.name,
                value: prop.value,
                index: i,
                color: {
                  alpha: prop.attributes.rgb.a,
                  red: prop.attributes.rgb.r / 255,
                  green: prop.attributes.rgb.g / 255,
                  blue: prop.attributes.rgb.b / 255
                }
              })
            });

          json.layers[0].layers = arr;

          // write the page json back to the file in the zip
          zip.file(pagePath, JSON.stringify(json));
          done();

        });
    });
  });
}
