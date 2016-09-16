---
date: 2016-09-16T19:29:30+09:00
title: Frontend Meetup 01 参加メモ
---

# Frontend Meeup \#1

<http://connpass.com/event/38112/>

## React/Reduxで快適フロントエンドライフ(仮)

by @takayuki_shmz (株式会社FiNC)

<http://itpro.nikkeibp.co.jp/atcl/column/16/050900104/051000005/>

- React & Redux
  - 学習コスト
  - JSX(うんじゃら)
- 後悔したこと
  - つらいコンポーネント
  - つらい繰り返し・テスト
  - つらいデータの扱い
- 最初に抑えるべき
  - 正しいコンポーネント思考
    - smart component
      - dumb コンポーネントと action, storeを繋ぐ
    - dumb component
- Statelessコンポーネントが原則
  - case by case だけども
- cssはコンポーネントと 1v1
- this.contents
  - <https://facebook.github.io/react/docs/context.html>
  - API 層を context に渡し container を呼ぶ

## 革命と秩序とSPA(React、flux、flowtype)

by @joe_re (freee株式会社)

<https://speakerdeck.com/joere/ge-ming-tozhi-xu-tospa>

- backone
- freee-mvc-framework
- vue
  - mvvm
- react & flux
  - single-state を途中から導入するのがツラい
  - flux-utils
    - サポートの範囲が小さい分外しやすい
- flowtype

## Angularと心中する（仮）

by @Quramy (株式会社WACUL)

<https://quramy.github.io/spa-knowhow-note/#/>

- WACUL
  - TypeScript
  - angular 1.x
- Angular 1.x
  - component
  - コードの自動生成
  - エラー周り
- style管理問題
  - BEM
  - component:css = 1:1
  - <https://github.com/ukyo/angular-simple-bem>
- Rollbar
  - 裏でsourcemap 連携

##　コンテンツ配信とSPA

by @konpyu (Piece of cake,Inc)

- note <https://note.mu/>
  - angular 1.3
  - mobile 遅い
- Drupal8
- SSR
- HTTP2

## SPAと覚悟

by @teppeis (サイボウズ)

- SPA
  - ブラウザーにとっては1枚のページに見えている
  - ブラウザーの体験を超える覚悟がある
- 初回ロード
- a11y
- ブラウザーを越えすぎても駄目

## Angular2でつまづいたところ(仮)

by @nacika_ins

## 1pxをめぐる戦い

@yoshiko_pg

<http://yoshiko-pg.github.io/slides/20160916-spa/>

## SPAでのセッション管理とセキュリティ

by @uryyyyyyy

- <http://qiita.com/uryyyyyyy/items/9a8276f7241b650f1c15>
- <https://twitter.com/teppeis/status/776757447813771265>
