const fs = require('fs-extra');
const swatch = require('../models/swatch');
const _ = require('lodash');
const JSZip = require('jszip');

// This exports a function that will be called in a custom action in a Style Dictionary
module.exports = function(dictionary, platform) {

  // Create the final destination by combining buildPath and sketchOutput
  // and make sure a directory exists to build it in
  const destination = `${platform.buildPath||''}${platform.sketchOutput}`
  if (platform.buildPath) {
    fs.ensureDirSync(platform.buildPath);
  }

  // Read an input sketch file in the style dicionary
  // This is so we can use it as a template for generating an output sketch file.
  fs.readFile(platform.sketchInput, function(err, data) {
    if(err) throw err;
    JSZip.loadAsync(data).then(function(zip) {
      // zip contains a json file that describes all the directory & files in the zip file

      var done = _.after(2, function() {
        zip
          .generateNodeStream({ type:'nodebuffer', streamFiles:true })
          .pipe(fs.createWriteStream(destination))
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
              return Object.assign({}, prop.value, {
                _class: "color"
              })
            }).value();

          zip.file('document.json', JSON.stringify(json));
          done('document.json');
        });

      zip.file(pagePath)
        .async('string')
        .then(function(str) {
          const json = JSON.parse(str);
          var arr = _.chain(dictionary.allProperties)
            .filter((prop) =>
              prop.attributes.category === 'color' &&
              prop.attributes.type === 'base' &&
              prop.attributes.item === 'blue'
            )
            .map(function(prop, i) {
              return swatch({
                name: prop.name,
                value: prop.original.value,
                index: i,
                color: prop.value
              })
            }).value();

          // console.log(JSON.stringify(arr[0], null, 2));
          json.layers[0].layers = arr;

          // write the page json back to the file in the zip
          zip.file(pagePath, JSON.stringify(json));
          done();

        });
    });
  });
}
