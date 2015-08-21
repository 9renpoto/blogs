---
date: 2015-08-21T09:53:55+09:00
draft: true
title: yapcasia
comments: true
categories:
  - "perl"
---

# Effective ES6

### denger
```
function Persion(name) {
  this.name = name
}

var p =Person('bob');
# p.name == undefined
# window.name = 'bob'
```

- class
  - constractor
  - new ナシで呼ぶと Error
- IE11 ES6 は実装しない!
- transpiler
  - ES6 to ES5
- polyfill
  - buildinのclassをjs環境で動かすようにする
- Babel
  - core.js # polyfill toolsもあるよ

- ES6 feature
  - new syntax
    - arrow function
    ```
    var add => (a,b) => {
        return a + b;
    }
    ```
    - class
    ```
    class Programmer extends Person {
        constracor(name ,language) {
            super(name);
            this.language = language;
        }
    }
    ```
    - module
    ```
    export var foo = 'foo';
    import (foo) from './module/path'
    ```
    - 'use strict'
      - 書かなくていい
    - block scope
      ```
      var a = 'outer'
      function bar() {
          console.log(a);
          a = 'inner';
      }
      bar(); # undefined
      ```
    - arguments
      ```
      function foo(...rest) {
      }
      ```
      ```
      function draw(x,y,{height:1,width:1} = {}) {
      }
      ```
    - template literal
      \` で文字列を囲むと改行付き文字列が定義できる
    - Promise
      - callback 地獄回避
    - map/set
    - codePoint
      - 吉野家 isvalid
  - trap
    ```
    if (a => 1) # if ( a >= 1 ) が正
    ```
  - balel　っていこう

# 今フロントエンドで何が起こっているのか

- htmlだけ返せばよかったような時代
- ajaxの登場
  - google map etc
  - ECMAscript5
- coffeescript
- jquery(from 2006)
- backbonejs
- nodejs(2009)
- grunt(2012)
  - config
  - plugin base
- typescript(2012)
- AST
  - abstract syntax template
- SPA
  - 問題
    - SEO
    - Performance
- angularjs(2009)
  - 2way data binding
  - fullstack
- gulp
  - stream base
- browserify
- ECMAscript 2015
  - Stateless
  - Composable
  - stream
