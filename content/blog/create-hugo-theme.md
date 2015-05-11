---
layout: post
date: 2015-05-11T22:54:56+09:00
draft: false
title: create hugo theme
categories:
  - "hugo"
---

### TL;DR

- blogを `octpress` から `hugo` へ移行しました
- [hugo theme](https://github.com/9renpoto/delic) 書きました

#### theme を書くために

cmd一つでテンプレート作成

    $ hugo new theme foo
    .
    └── themes
        └── foo
        ├── LICENSE.md
        ├── archetypes
        │   └── default.md
        ├── layouts
        │   ├── _default
        │   │   ├── list.html
        │   │   └── single.html
        │   ├── index.html
        │   └── partials
        │       ├── footer.html
        │       └── header.html
        ├── static
        │   ├── css
        │   └── js
        └── theme.toml

[Document](http://gohugo.io/templates/overview/) がよくまとまっていますので参考に


- このあたりが特にお世話になりました
  - [functions](http://gohugo.io/templates/functions/)
  - [variables](http://gohugo.io/templates/variables/)


#### TODO
  - `layouts/_default` 以外の使い方調べる
  - rss作成
  - bower install するbuild script


#### 感想

octpress の時はtheme流用してたので手作りも勉強になりました.

t32k さんの[mol](https://github.com/t32k/mol) を参考(ほぼコピペして)に作りました.
ありがとうございます
