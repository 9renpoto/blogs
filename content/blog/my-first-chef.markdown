---
layout: post
title: "入門chef"
date: 2013-12-22
comments: true
categories:
 - "ruby"
 - "chef"
---

# chef memo

環境構築といえば、chefだという噂を随分と聞くようになってきましたが、
なんだかんだと使ってなかったのでメモ。
とはいえ、レシピは誰かが書いてるので、
今回は出来る限りレシピを使う方法で構築を目指す

## 前準備

```ruby
# Gemfileに記載
source 'https://rubygems。org'  # URLの指定。呪文だと思って毎回書く

gem 'berkshelf'
gem 'chef'
gem 'knife-solo'
```

必要なgemをいつものように

```sh
bundle install
```

chef-soloを使えるように初期設定を行う

```sh
bundle exec knife configure
```

## そろそろchef

ひな形の生成

```bash
$ bundle exec knife solo init chef-repo
$ tree chef-repo/
chef-repo/
├── cookbooks
├── data_bags
├── nodes
├── roles
├── site-cookbooks
└── solo。rb
```

忘れないうちにコミット

```sh
cd chef-repo
git init
git add 。
git commit -m 'first commit'
```

公式なり、Githubにて公開されているレシピを利用しやすくるものとして **Berksfile** があります

```ruby
site :opscode # Berksfile

cookbook "apt"
cookbook "git"
cookbook "zsh"
cookbook 'vim'
cookbook 'the_silver_searcher'
```

公開されているレシピの情報を記述しておけば、コマンド1つで落としてこれます。
便利

```sh
bundle exec berks install --path cookbooks
```

vagrant側でchefが使えるように以下のコマンドを実行

```sh
bundle exec knife solo prepare nodename
```

インストールしたいレシピを追加
node/nodename.json

```js
{
  "run_list": [
    "recipe[apt]",
    "recipe[git]",
    "recipe[zsh]",
    "recipe[vim]",
    "recipe[the_silver_searcher]"
  ]
}
```

レシピはできたのでcookしましょう

```sh
bundle exec knife solo cook nodename
```

## 参考

- [tsuchikazu.net/chef_solo_start](http://tsuchikazu.net/chef_solo_start/)
- [qiita.com/uchiunyo/item](http://qiita.com/uchiunyo/items/5aa243f7a39ae443e10d)

## 最後に

これ以上のことは以下を買ってから勉強します

<div class="booklog_html"><table><tr><td class="booklog_html_image"><a href="http://www。amazon。co。jp/%E5%85%A5%E9%96%80Chef-Solo-Infrastructure-as-Code-ebook/dp/B00BSPH158%3FSubscriptionId%3D0AVSM5SVKRWTFMG7ZR82%26tag%3Dbooklog。jp-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00BSPH158" target="_blank"><img src="http://ecx。images-amazon。com/images/I/31u6VLGX2kL。_SL160_。jpg" width="93" height="150" style="border:0;border-radius:0;" /></a></td><td class="booklog_html_info" style="padding-left:20px;"><div class="booklog_html_title" style="margin-bottom:10px;font-size:14px;font-weight:bold;"><a href="http://www。amazon。co。jp/%E5%85%A5%E9%96%80Chef-Solo-Infrastructure-as-Code-ebook/dp/B00BSPH158%3FSubscriptionId%3D0AVSM5SVKRWTFMG7ZR82%26tag%3Dbooklog。jp-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00BSPH158" target="_blank">入門Chef Solo - Infrastructure as Code</a></div><div style="margin-bottom:10px;"><div class="booklog_html_author" style="margin-bottom:15px;font-size:12px;;line-height:1。2em">著者 : <a href="http://booklog。jp/author/%E4%BC%8A%E8%97%A4%E7%9B%B4%E4%B9%9F" target="_blank">伊藤直也</a></div><div class="booklog_html_manufacturer" style="margin-bottom:5px;font-size:12px;;line-height:1。2em">伊藤直也</div><div class="booklog_html_release" style="font-size:12px;;line-height:1。2em">発売日 : 2013-03-11</div></div><div class="booklog_html_link_amazon"><a href="http://booklog。jp/item/1/B00BSPH158" style="font-size:12px;" target="_blank">ブクログでレビューを見る»</a></div></td></tr></table></div>
