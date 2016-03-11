---
layout: post
title: "python install"
date: 2012-09-13
comments: true
categories:
  - "python"
---

Pyconに参加しようと思ったんですが、python素人のボクはまず環境構築から！

### pythonのversion管理

pythonはpythonbrew+virtualenvで環境を作るのが良いらしいので、言われるがままに環境作ってみます

#### pythonbrewの環境構築

<pre>
<code class="bash">
curl -kLO https://github.com/utahta/pythonbrew/raw/master/pythonbrew-install
chmod +x pythonbrew-install
./pythonbrew-install
</code>
</pre>

pythonbrewの環境変数を通す
zshの場合でも以下の内容を書くらしい

<pre>
<code class="bash">
[[ -s $HOME/.pythonbrew/etc/bashrc ]] && source $HOME/.pythonbrew/etc/bashrc


pythonbrew list -k # インストールできるversion確認
pythonbrew update # pythonbrewのupdate
</code>
</pre>

2系と3系の環境構築

<pre>
<code class="bash">
pythonbrew install 2.7.2
pythonbrew switch 2.7.2

pythonbrew install 3.2
pythonbrew switch 3.2
</code>
</pre>

*virtualenv* の環境はまた今度する
