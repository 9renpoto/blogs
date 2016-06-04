/// <reference path="../typings/index.d.ts" />

import path = require('path')
let root: any = path.join(__dirname, '../')

module.exports = {
  dist: path.join(root, 'dist'),
  root: root
}
