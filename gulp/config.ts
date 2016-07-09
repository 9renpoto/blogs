/// <reference path="../typings/index.d.ts" />
import path = require('path')

const global: any = path.join(__dirname, '../')
module.exports = {
  dist: path.join(global, 'dist'),
  global: global
}
