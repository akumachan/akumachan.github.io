---
title: GatsbyJSのマークダウンファイル内で数式を表示する方法
date: "2020-06-02 08:27:49"
description: "最近高校数学を1から勉強していて、ブログに勉強したことを書き残したいが数式をいちいち画像で挿入するのは大変なのでgatsby-remark-katexというライブラリを試してみた。"
category: "ブログ"
tags: ["数学", "Markdown", "GatsbyJS"]
published: true
---

高校数学をイチから勉強していて、学んだことを記事に書き残したくなったので、マークダウンで数式を表現できるライブラリを試してみた。

## gatsby-remark-katex

[gatsby-remark-katex]()は数式をWEBブラウザで表示させるライブラリ[KaTeX](https://katex.org/)をGatsbyで使用できるプラグインです。

## インストール

```sh
yarn add gatsby-transformer-remark gatsby-remark-katex
```

gatsby-remark-katexに必要な[gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)はマークダウンをHTMLにパースしてくれるプラグインみたいですが、このサイトで使用しているスターター[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)にはデフォルトで入っているので実際にはインストールする必要はありませんでした。  

インストール後に`gatsby-config.js`と`gatsby-browser.js`に修正が必要です。  

*gatsby-config.js*

```js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-katex`,
          options: {
            strict: `ignore`
          }
        }
      ],
    },
  },
],
```

*gatsby-browser.js*

```js
import 'katex/dist/katex.min.css'
```

`gatsby-browser.js`の方の修正はtempleteファイルに直接importを書いても大丈夫（なはず）です。


## 動作確認

以下のように`$`と`$`の間にKaTexの式を書くと
```Markdown
三平方の定理は$a^2 + b^2 = c^2$です。
```

三平方の定理は$a^2 + b^2 = c^2$です。 
  
このようにインラインで表示されます。  
  
`$$`と`$$`で挟むと

```Markdown
$$
a^2 + b^2 = c^2
$$  
```

$$
a^2 + b^2 = c^2  
$$  
  
と書けます。
  
KaTeXの文法はまだ全くわかってませんが、必要なのから順番に覚えていきます。