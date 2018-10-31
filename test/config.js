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