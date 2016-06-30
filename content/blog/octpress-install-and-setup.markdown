---
layout: post
title: "octpress install and setup"
date: 2012-09-11
comments: true
categories:
  - "ruby"
---

Octpressの利用を始めたので、簡単にインストール方法と設定、使い方などをメモ

### github pageの初期化

<pre>
<code class="bash">
mkdir username.github.com
cd username.github.com
git init

touch README.md
Git add README.md
git commit -m 'first commit'

Git remote add origin git@GitHub.com:username/username.github.com.git
git push -u origin master
</code>
</pre>

### octpressのインストール

先ほど作成した *username.github.com* と同じ階層にoctpressをcloneする

<pre>
<code class="bash">
git clone git://github.com/imathis/octopress.git octopress

cd octopress
gem install bundler

bundle install
Rake setup_github_pages

Rake generate
rake deploy

# 2つ一度にする
# Rake gen_deploy

</code>
</pre>

### 記事投稿

記事の作成もコマンド1つ
タイトルは英語で

<pre>
<code class="bash">
rake new_post["my-new-page"]
# zshは以下のように書く
rake new_post\["my-new-page"\]
</code>
</pre>

markdownの勉強にもなるし、GitHubとも仲良くなれるし、なかなかに良い仕組みだと思います

いろいろ勉強します

参考文献

* <http://octopress.org/>
* <http://tokkonopapa.github.com/blog/2011/12/30/octopress-on-github-and-bitbucket/>
* <http://blog.glidenote.com/blog/2011/11/07/install-octopress-on-github/>
