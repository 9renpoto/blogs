---
date: 2016-08-20T14:28:25+09:00
title: TypeScript で coverage を計測する
categories:
  - "typescript"
  - "javascript"
---

# TypeScript で Coverage report を計測する

## TL;DR

- [remap-istanbul](https://www.npmjs.com/package/remap-istanbul) を使う

## Usage

- `npm install remap-istanbul`
- `sourcemap: true`

## Memo

- `tsc` > `npm test` という流れになったため JavaScript としてテストをする形になる
- [espower-typescript](https://www.npmjs.com/package/espower-typescript) を使わないようになる
  - `espower-typescript` は tsc の wrapper なのでtscする場合は使えなそう
- `power-assert` が上手く構造を解釈してくれてなさそう
  - `espower-typescript` が担っていた役割を別で与える必要がある?
  - TypeScript に依存するなら無駄にbabel pluginなどは使いたくない
    - TODO 考える

## Refs

- <http://blog.syati.info/post/typescript_coverage/>
- <https://github.com/9renpoto/ts/pull/34>
