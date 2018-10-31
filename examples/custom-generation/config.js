const {transform} = require('sketch-style-dictionary');
const Sketch = require('./sketch');

module.exports = {
  source: ["properties/**/*.json"],
  // Add extra sketch transforms from library
  transform: transform,
  // Add custom actions
  action: {
    buildCustomSketch: {
      do: Sketch,
      undo: () => console.log("No undo!")
    }
  },
  platforms: {
    sketch: {
      buildPath: "build/",
      sketchOutput: "output.sketch",
      transforms: ["attribute/cti", "colorSketch"],
      actions: ["buildCustomSketch"]
    }
  }
}