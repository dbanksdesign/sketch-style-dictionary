const WithTemplateBuilder = require('../builders/withTemplate');

module.exports = {
  do: function(dictionary, platform) {
    console.log('building...');
    WithTemplateBuilder(dictionary, platform);
  },
  undo: function(dictionary, platform) {
    console.log('undo');
  }
}