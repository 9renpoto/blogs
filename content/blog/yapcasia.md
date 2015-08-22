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
- babel (2014)
- Service Workers
  -  Intercept Requeest
    - offline / cahce
    - Background Sync
    - Push Notification
- Extensible Web
- Reactjs
  - Stateless Component
- Flux
- FRP
  - Rx.js, Bacon.js
- Redux
  -  Inspired by Flux and Elm

# どうしてこうなった？ Node.jsとio.jsの分裂と統合の行方。これからどう進化していくのか？

## Node.jsの歴史 (Node.jsとは、Node.jsが生まれた背景)

- 2001
  - C10K Problem
- 2007
  - Web 2.0
- 2009 ~ 2012
  - JSConf EU
    - Server-side javascript
    - Evented Non Blocking I/O
    - v8
  - EventLoop Model
    - libebb => libev/libeio & libuv (windows向け)
    - netv8 => node
  - Joyent
  - 破壊と創造
    - APIがかなり深刻に変わる
  - BDFL (優しい終身の独裁者モデル)
- 2012 ~ 2014
  - socket.io

## Node/io.jsの機能的な違いと性能的な違い

- 2014 ~
  - node forward
  - BDFL => community model
  - Technical committee
    - コアメンバ委員会
  - Collaborator
  - Working group
  - Semantic Versioning
    - major.minor.patch
  - オープンガバナンスモデル
  - Feature node.js
  - io.js のこと
  - node Foundation
  - log term suport

## Node/io.jsのロードマップ

- ES6 compat % up
- StrongScript
- SimpleSteam
- improve pref
