---
date: 2017-06-22T01:26:18+09:00
draft: false
title: brew caskにlanguageを指定するらしいけれど
categories:
  - "macos"
  - "bug"
---
# TL;DR

- 動いてくれ頼む

## Log

```sh
➜  ~ brew cask search firefox
==> Exact Match
firefox
==> Partial Matches
firefox-beta firefox-esr firefoxdeveloperedition firefoxnightly multifirefox
➜  ~
➜  ~ brew cask install firefoxnightly --language=en
Error: invalid option: --language=en
```

## 気持ち

[![無理 グッドアイディア ナイスアイディア 名案](http://tiqav.com/5Hi.th.jpg)](http://tiqav.com/5Hi)

## Refs

- <https://rcmdnk.com/blog/2016/10/31/computer-mac-homebrew-firefox/>
- <https://github.com/caskroom/homebrew-cask/blob/master/doc/cask_language_reference/stanzas/language.md#installation>

### 追記1 [2017/06/25]

- 修正リリースを待つ
  - [homebrew-cask/issues/35448](https://github.com/caskroom/homebrew-cask/issues/35448#issuecomment-308112366)
