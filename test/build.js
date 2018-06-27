const sketch = require('sketch-style-dictionary');
const StyleDictionary = require('style-dictionary');

var sd = StyleDictionary.extend('config.json');

sd.registerAction({
  name: 'build_sketch',
  do: function(dictionary, platform) {
    console.log('building...');
    sketch(dictionary, platform);
  },
  undo: function(dictionary, platform) {
    console.log('undo');
  }
});


sd.buildAllPlatforms();
