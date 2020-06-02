---
title: GatsbyJSのサイトをGithub Pagesで公開する
date: "2020-05-31 20:55:33"
description: "GatsbyJSで作成したサイトをGithubでソース管理、Github Pagesで公開できるようにする。"
category: "Blog"
tags: ["GatsbyJS", "GitHub Pages"]
---

## Github Pagesとは
 
 [Github Pagesとは（公式）](https://help.github.com/ja/github/working-with-github-pages/about-github-pages)

Githubのリポジトリを直接ホストしてくれるサービスです。

## Githubにリポジトリを作る

Githubに `{Githubのusername}.github.io`という名前でリポジトリを作成すると、そのリポジトリのmasterブランチにあるコードを自動でホストしてくれます。  
ページには`https://{Githubのusername}.github.io`でアクセスできます。

## ソースコードを管理する

github.ioのリポジトリのmasterブランチにはGatsbyJSでビルドしたファイルを置くことになりますが、ソースを管理するリポジトリを別に用意するのもいまいちなので、同じリポジトリ内の別のブランチで管理します。  
  
このサイトのリポジトリではソースの管理リポジトリを`source`としました。

```sh
#ソースのディレクトリに移動
cd {ソースのリポジトリ}
#gitのリポジトリとして初期化
git init
#sourceブランチを作成して移動
git switch -c source
#ファイルを全てコミット
git commit -a
#作成したGithubリポジトリをリモートリポジトリに指定
git remote add origin https://github.com/{Githubのusername}/{Githubのusername}.github.io.git
git push -u origin source
```

## デプロイ用コマンドの作成

Github Pagesにデプロイするツールgh-pagesを追加する。

```sh
yarn add -D gh-pages
```

package.jsonにデプロイコマンドを追加する。

```json
"scripts": {
  "build": "gatsby build",
  "deploy": "yarn build && gh-pages -d public -b master"
}
```

## デプロイする

```sh
yarn deploy
```

## 関連項目

[GatsbyJSのソースをpushしたら自動でビルドしてGithub Pagesにデプロイする]()