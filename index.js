const path = require('path')

module.exports = function nuxtBootstrapVue (moduleOptions) {
  this.addPlugin(path.resolve(__dirname, 'vue-font-awesome.js'))
}

module.exports.meta = require('./package.json');