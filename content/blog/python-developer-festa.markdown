---
layout: post
title: "Python Developer Festa 参加してきました"
date: 2012-11-24
comments: true
categories:
  - "python"
---

Python Developer Festa 参加してきたので、そのメモ
<https://githubcom/pyspa/pyfes/blob/develop/201211rst>

## Cloudera Impala について
@shiumachi さんより

### Impala とは

+ Clouderaが開発した低レイテンシ・分析特化型のクエリ実行基盤
    + google Dremel, Google F1 などにインスパイアされて開発された
+ データサイエンティストが使うことを想定している
+ Hadoopはクエリの内容がメモリに乗っからなかった場合、HDDに逃げちゃう
+ Impalaはオンメモリ上で頑張ろうとする

#### Impala support 状況

##### 02 時点
+ Trevni, RCFileのサポートは現状まだ、今後対応予定
+ Hiveで出来ることは、基本的にImpalaでは出来ないと思ってよい

### なぜ開発されたのか

Hadoop(Map Reduce)だと高レイテンシで、すぐに結果が欲しくても処理に時間がかかる
Hiveのように手軽に使えるSQLのインターフェースをもち、かつ低レイテンシエンジンが欲しかった

### MapReduceとは

+ Apache MapReduceとは
    + バッチ処理を分散して行うシステム
+ Apache Hive
    + SQLライクに書ける
+ MapReduceの問題
    + レイテンシが高い
    + 小さいキューを出しても数十秒時間かかる

### よくある質問

#### QもうHiveいらないんじゃない？

+ 定期的に実行を行うクエリなどはHiveのほうが適しているのではないか

#### Qimpalaが落ちたらどうするの？

+ クエリが全部こけます
+ JOINのサイズ制限あるの？
    + あります

---------
## Python in Webkit
@omo2009 さんより

<http://stepsdodgsonorg/>の中の人

### Third party Tools

+ webKit
    + Buildbot
    + Trac

### 今回は webkit-patch について

    # Submitting for review
    webkit-patch post
    # Commiting a reviewd patch
    # Commit log は自動で書く
    webkit-patch land
    # Reverting specific version
    webkit-patch rollout
    #

プロジェクト特有の問題を解決するために使っている

    watchlist
    suggest-reviewers
    suggest-nominations
    Bugzilla autocompletion
    IRC

+ 誰にレビューしてもらえば良いかわからない
+ 誰にレビューしてもらったか忘れちゃう
+ 探すのに便利

IRC でレビューを頼むと断られにくい

----------

## Connpass について

@lanMLewis, @ae35
概要と技術について

### connpass とは
+ BePROUD で運営しているイベント支援サイト
    + 2010/08 django dash
        + django を使って48時間でサービスを作ろう
        + 既存のイベント支援サービス(ATND)使いにくいよね
        + 作ってみよう
    + 大事だと思ってること
        + 実生活のつながり
        + 共有・成長する
        + イベントから広がるコミュニティ

### connpass で使われている技術
+ サーバーサイド
    + MySQL
    + Redis
    + Django
    + Unix
    + Nginx
    + Gunicorn
+ クライアントサイド
    + CoffeeScript
    + REQUIRE JS
    + *Javascript 怖い*

-----------

## PHP Language Update

### PHP 5.5 の目玉

+ ジェネレートとコールーチン
    + yieldキーワードの追加
+ foreachで変数分解だ！
+ empty()の括弧内に変数以外が指定可能に
+ finally
    + try-catch-finally
        + なぜ今までになかったのか
    + fatal error が発生するとfinalyが呼ばれない

--------------

Pythonでお仕事している人が日本にもたくさんいて嬉しいです！

発表者のみなさまおつかれさまでした！
