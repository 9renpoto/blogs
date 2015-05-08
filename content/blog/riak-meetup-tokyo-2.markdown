---
layout: post
title: "riak meetup tokyo 2 に参加してきました"
date: 2013-07-10
comments: true
categories:
  - "erlang"
---

### Riak and FreakOut

#### RTB and FreakOut

RTB概略

* ディスプレイ広告の新しい見せ方
    * 一回の広告表示ごとに買い付け
    * オークション形式によりアラカルトメニュー

広告主のネット広告におけるROI最適を目指す

RTBの技術的課題

##### 広告表示の時間は0.1秒

* レイテンシの軽減
* 多数のRTBを処理
* 50mc or die

##### [Tokoy|Kyoto] [Tyrant|Tycoon]

* 高速
* スケールは簡単にできない
* 運用実績はあるが用件を満たすのが難しい

#### Riak and FreakOut

* スループットを向上させるために
    * hashからpartitionを特定する
    * 素のままでは50mc or die 的に厳しいため
    * 構成の工夫が必要
    * スケーラビリティの問題を克服できるメリットは大きい
    * 「サーバを足すだけで運用」

### Yokozuna 日本語検索機能を評価しました

@rev4t @yosisa

日本語検索: Yokozuna

Solr XMLスキーマを利用した検索が可能
便利そう

<iframe src="http://www.slideshare.net/slideshow/embed_code/24120855" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" allowfullscreen webkitallowfullscreen mozallowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="http://www.slideshare.net/takashisogabe/riak-meetup2-iijbeta2" title="Yokozuna 日本語検索機能を評価しました" target="_blank">Yokozuna 日本語検索機能を評価しました</a> </strong> from <strong><a href="http://www.slideshare.net/takashisogabe" target="_blank">Takashi Sogabe</a></strong> </div>
