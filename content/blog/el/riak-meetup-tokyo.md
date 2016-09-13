---
title: "riak meetup tokyoに参加してきました"
date: 2013-03-12
categories:
  - "erlang"
---

# Riak intro & RICON報告

@kuenishi

分散システムの研究や開発は5年ぐらい
日本法人が9月に出来た

## Riakの紹介

* Dynamoにインスパイアされた
* Consistent Hassingによる水平分割する
* Vector Clocksを用いてレプリケーション
* Erlang/OTPで動作
* 分散KVS

* HTTP / Protocol Buffers
* Secondary Index/ MapReduce
* Link Walking
* Consistent Hassing and Replicas / Vecteor Clocks

分散システム、ざっくり

* Graph
* SQL
* Document
* Scale out

## RICONについて

* 分散システム、分散DBのカンファレンス

### 事例

* Redis側でロックして、裏側はRiakで構築
  * 壊れても大丈夫なようにするのが鉄板のパターン

## 面白かった話

* Rak Pipe
* Introduction Yokozuna
* Building Riak CS on Riak
* Cloning the Cloud
* Bringing Consistency on Riak

## Riak with Engine yard

* EC2上のGentoo
* すべてはChefで構築
* その上にアプリをデプロイ
* 再起動も1から構築
* ssh / sudo可能
* 何台、何度でも再現可能

* DB
  * PostgressSQL
  * MySQL
  * Riak

* Riakはバックエンドでたてないとダメ
* Riak Searchを使って全文検索可能
* 今後、Yokozunaに移行予定