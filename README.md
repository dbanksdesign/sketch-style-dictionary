# Sketch Style Dictionary
A framework to hook Style Dictionary up to Sketch files. It's a bit messy right now, but has potential. Because Sketch files are a zipped directory of JSON files, it is straightforward (albeit verbose) to write them. This doesn't use react-sketchapp or anything, so you can actually generate sketch files in a CI/CD pipeline that doesn't have Sketch installed!

## What's Included

### Transforms
Adds some transforms to help working with Style Dictionary in Sketch files. You can add these to Style Dictionary in a few ways:

```javascript
// build.js
const SketchStyleDictionary = require('sketch-style-dictionary');

const StyleDictionary = require('style-dictionary')
  .extend(SketchStyleDictionary)
  .extend('config.json');

StyleDictionary.buildAllPlatforms();
```

```javascript
// config.js
const {transform, action} = require('sketch-style-dictionary');

module.exports = {
  source: ["properties/**/*.json"],
  // Add extra sketch transforms and actions
  transform: transform,
  action: action,
  platforms: {
    sketch: {
      buildPath: "build/",
      sketchInput: "template.sketch",
      sketchOutput: "output.sketch",
      transforms: ["attribute/cti", "colorSketch"],
      actions: ["buildSketchFromTemplate"]
    }
  }
}
```

### Custom Models & Builders
If you want to customize your sketch output, this library has some wrappers to help with generating sketch files programmatically. You can take a look at the models and builders for more information

### Builders
Right now there are 2 ways to generate Sketch files with this library.

1. Read from a template sketch file, and then populate it with data from Style Dictionary. This has the benefit of being able to edit the template in Sketch and not have to deal with writing code to generate the Sketch JSON files.
1. Start from scratch and generate the JSON files inside Sketch. This way is a bit more flexible and powerful, but might be more time consuming and finicky. This framework has some wrappers for Sketch JSON models to make your life a bit easier as well as some builder functions to generate the folder structure and files for you.

```javascript
const {builders, models} = require('sketch-style-dictionary');

const rect = models.Rect({
  width: 100,
  height: 100,
  x: 0,
  y: 0,
  fills: [models.Fill(opts.color)],
  borders: []
});

const artboard = models.Artboard({
  layers: [
    rect
  ]
});

const page = models.Page({
  layers: [
    artboard
  ]
});
```

## Testing
For now in the test directory I have an example Style Dictionary package that depends on this module and uses it as a consumer would. To get everything hooked up, run
`npm run test-setup`
