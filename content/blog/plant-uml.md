---
title: "クラス図を簡単に - PlantUML"
date: 2013-11-13
categories:
  - "uml"
---

# PlantUML

これから設計をはじめます、という時に
今までは小さな機能では、スキーマの設計から始めてしまっていたのですが
久々に「クラス図を書いてみよう」という話になり
どう書こうとなったのでメモ

![image](http://plantuml.sourceforge.net/logoc.png)

CUIで書けるのが最高です

依存関係をテキストベースのみで記述できるので非常に助かりました

図の綺麗さなどを意識せず関係を記述することに集中できるのが魅力

```bash
wget http://sourceforge.net/projects/plantuml/files/plantuml.jar/download -O plantuml.jar
java -jar "plantuml.jarのパス" [option] 入力ファイル [...]
```

で入力ファイルを目的のUMLを生成します

Graphvizが必要なのでインストールしておきます
macはbrewだけで入りました

```bash
brew install graphviz
```

これだけで使えます

```markdown
@startuml
  class Bugs {
    -bug_id
    -description
    -created_at
  }

  class Comments {
    -comment_id
    -bug_id
    -auther
  }

  class Auther {
    -id
    -name
  }

  Bugs --* Comments
  Auther --* Comments
@enduml
```

![sample](https://dl.dropboxusercontent.com/u/9060848/PlantUML/PlantUML.png)

便利

## 参考

- [d.hatena.ne.jp/a_bicky/20121016/1350347857](http://d.hatena.ne.jp/a_bicky/20121016/1350347857)
- [http://yohshiy.blog.fc2.com/blog-entry-152.html](http://yohshiy.blog.fc2.com/blog-entry-152.html)

## GUI関連

Officeなどを使って作っても良いのですが、
専用のツールもメモ

### astah*

![astah](http://astah-cdn2.change-vision.com/ja/images/stories/logo/astah_community_rectangle_m.png.pagespeed.ce.C-174ew438.png)

Officeツール以外で関連ツールを探すと上位に出てくる[良いツール](http://astah.change-vision.com/ja/product/astah-community.html)です

### Cacoo

今までなかなか縁がなく利用していなかったCacooですが、

[100万ユーザ突破した](http://blog.cacoo.com/ja/2013/11/06/cacoo-user-1m/)という記事を確認して

そういえば使ってなかったなと思い、軽く使ってみました

ChromeAppなどで使えますし、お気軽さではダントツ
