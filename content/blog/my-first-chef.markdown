---
layout: post
title: "入門chef"
date: 2013-12-22
comments: true
categories:
 - "ruby"
 - "chef"
---

環境構築といえば，chefだという噂を随分と聞くようになってきましたが，
なんだかんだと使ってなかったのでメモ.
とはいえ，**レシピは誰かが書いてるであろう**と思いますので，
今回は出来る限りレシピを使う方法で構築を目指す

## 前準備

<pre>
<code class="ruby">
# Gemfileに記載
source 'https://rubygems.org'  # URLの指定。呪文だと思って毎回書く

gem 'berkshelf'
gem 'chef'
gem 'knife-solo'
</code>
</pre>

必要なgemをいつものように

<pre>
<code class="bash">
bundle install
</code>
</pre>

chef-solo を使えるように初期設定を行う

<pre>
<code class="bash">
$ bundle exec knife configure
</code>
</pre>

## そろそろchef

ひな形の生成

<pre>
<code class="bash">
$ bundle exec knife solo init chef-repo
$ tree chef-repo/
chef-repo/
├── cookbooks
├── data_bags
├── nodes
├── roles
├── site-cookbooks
└── solo.rb
</code>
</pre>

忘れないうちにコミット

<pre>
<code class="bash">
$ cd chef-repo
$ git init
$ git add .
$ git commit -m 'first commit'
</code>
</pre>

公式なり，githubにて公開されているレシピを利用しやすくるものとして **Berksfile** があります．

<pre>
<code class="bash">
site :opscode # Berksfile

cookbook "apt"
cookbook "git"
cookbook "zsh"
cookbook 'vim'
cookbook 'the_silver_searcher'
</code>
</pre>

公開されているレシピの情報を記述しておけば，コマンド一つで落としてこれます.
便利．

<pre>
<code class="bash">
$ bundle exec berks install --path cookbooks
</code>
</pre>

vagrant 側でchefが使えるように以下のコマンドを実行

<pre>
<code class="bash">
$ bundle exec knife solo prepare nodename
</code>
</pre>

インストールしたいレシピを追加
node/nodename.json
<pre>
<code class="javascript">
{
  "run_list": [
    "recipe[apt]",
    "recipe[git]",
    "recipe[zsh]",
    "recipe[vim]",
    "recipe[the_silver_searcher]"
  ]
}
</code>
</pre>

レシピはできたのでcookしましょう．

<pre>
<code class="javascript">
$ bundle exec knife solo cook nodename
</code>
</pre>

## 参考

- http://tsuchikazu.net/chef_solo_start/
- http://qiita.com/uchiunyo/items/5aa243f7a39ae443e10d

## 最後に

これ以上のことは以下を買ってから勉強します．

<div class="booklog_html"><table><tr><td class="booklog_html_image"><a href="http://www.amazon.co.jp/%E5%85%A5%E9%96%80Chef-Solo-Infrastructure-as-Code-ebook/dp/B00BSPH158%3FSubscriptionId%3D0AVSM5SVKRWTFMG7ZR82%26tag%3Dbooklog.jp-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00BSPH158" target="_blank"><img src="http://ecx.images-amazon.com/images/I/31u6VLGX2kL._SL160_.jpg" width="93" height="150" style="border:0;border-radius:0;" /></a></td><td class="booklog_html_info" style="padding-left:20px;"><div class="booklog_html_title" style="margin-bottom:10px;font-size:14px;font-weight:bold;"><a href="http://www.amazon.co.jp/%E5%85%A5%E9%96%80Chef-Solo-Infrastructure-as-Code-ebook/dp/B00BSPH158%3FSubscriptionId%3D0AVSM5SVKRWTFMG7ZR82%26tag%3Dbooklog.jp-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00BSPH158" target="_blank">入門Chef Solo - Infrastructure as Code</a></div><div style="margin-bottom:10px;"><div class="booklog_html_author" style="margin-bottom:15px;font-size:12px;;line-height:1.2em">著者 : <a href="http://booklog.jp/author/%E4%BC%8A%E8%97%A4%E7%9B%B4%E4%B9%9F" target="_blank">伊藤直也</a></div><div class="booklog_html_manufacturer" style="margin-bottom:5px;font-size:12px;;line-height:1.2em">伊藤直也</div><div class="booklog_html_release" style="font-size:12px;;line-height:1.2em">発売日 : 2013-03-11</div></div><div class="booklog_html_link_amazon"><a href="http://booklog.jp/item/1/B00BSPH158" style="font-size:12px;" target="_blank">ブクログでレビューを見る»</a></div></td></tr></table></div>
