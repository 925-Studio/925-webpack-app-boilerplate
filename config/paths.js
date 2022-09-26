const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to dist folder
  public: path.resolve(__dirname, '../public'),
}
