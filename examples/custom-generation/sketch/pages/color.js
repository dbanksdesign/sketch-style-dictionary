const {Page, Artboard} = require('sketch-style-dictionary/models');
const SwatchGroup = require('../components/SwatchGroup');

// Takes the transformed style dictionary and returns a Sketch Page
// object.
module.exports = function(dictionary) {
  const baseColors = dictionary.allProperties
    .filter((prop) => prop.attributes.category === 'color' &&
    prop.attributes.type === 'base');
  const baseColorGroups = Object.keys(dictionary.properties.color.base)
    .filter((colorGroup) => colorGroup !== 'white' && colorGroup !== 'black');

  const BaseColorsArtboard = Artboard({
    width: 120 * Object.keys(dictionary.properties.color.base.red).length,
    height: 220 * baseColorGroups.length,
    x: 0,
    y: 0,
    name: 'Base Colors',
    layers: baseColorGroups.map((colorGroup, i) => {
      // console.log(Object.values(dictionary.properties.color.base[colorGroup]));
      return SwatchGroup({
        name: colorGroup,
        y: (200 * i) + 20,
        x: 20,
        colors: Object.values(dictionary.properties.color.base[colorGroup])
      })
    })
  });

  return Page({
    layers: [
      BaseColorsArtboard
    ]
  });
};