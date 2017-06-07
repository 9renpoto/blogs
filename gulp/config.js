/* @flow */
const path = require('path')

module.exports = {
  global: path.join(__dirname, '../'),
  dist: path.join(global, 'dist')
}
