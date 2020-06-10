---
title: GatsbyJSのコンテンツディレクトリをリネームしたらNot Foundになった
date: "2020-06-02 22:10:32"
description: "GatsbyJSのコンテンツディレクトリをリネームしたら該当の記事がNot Foundになったので一応備忘録。"
category: "ブログ"
tags: ["GatsbyJS","gatsby-starter-blog","GitHub Pages"]
published: true
---

## Not Found
`{プロジェクト}/content/blog/blog/`というディレクトリを`{プロジェクト}/content/blog/Blog/`（Bが大文字）に変更してGithub Pagesにデプロイしたら404 Not Foundになってしまいました。  

## 原因
トップページからのリンクは`Blog`に更新されていたのに、リポジトリを見てみるとファイルのディレクトリは`blog`のままになっていました。  
  
調べてはいませんがGitの仕様でディレクトリの大文字小文字が変わっても更新されないんでしょうね。  

## 解決
一度`Blog2`という名前にリネームしてデプロイし、`Blog`に戻したら直りました。

## と思ったら
挙動が怪しかったので、思い切って`ブログ`に変えました。
