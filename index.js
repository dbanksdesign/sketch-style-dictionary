
/**
 * Main entrypoint
 */
module.exports = {
  // These are if you want to build your own custom sketch files
  builders: require('./builders'),
  models: require('./models'),

  // These are for extending Style Dictionary with custom
  // actions and transforms
  transform: require('./transforms'),
  action: require('./actions')
}