---
title: シェルスクリプトでの記事のマークダウンファイルを作成する
date: "2020-06-01 19:54:54"
description: "GatsbyJSのgatsby-starter-blogでブログ記事を作成するときに記事と同じ名前のディレクトリを作成してその中にindex.mdを作成しなければならないのが面倒だったのでシェルスクリプトを作成した。"
category: "ブログ"
tags: ["ShellScript", "GatsbyJS"]
published: true
---

GatsbyJSのスターター"gatsby-starter-blog"で作成している当サイトの記事ファイルを作成するのが結構手間だったのでシェルスクリプトにまとめました。

## gatsby-starter-blogのマークダウンファイルの構造

gatsby-starter-blogの中のマークダウンファイルの階層は以下のようになっています。

```
{GatsbyJSプロジェクト}/content/blog/任意の数の階層~/記事名/index.md
```

たぶん記事名のところは記事名と合わせなくてもいいんだと思いますが、管理の都合上記事名にしています。  
いちいちディレクトリを`mkdir -p ./xxxxxx`で作成してさらにファイルを作成して・・・というのが面倒だったので、カテゴリ名（階層）と記事名を指定したらFront Matterのテンプレごと作成してくれるようにします。

## スクリプト内でやること

- ディレクトリの作成
- mdファイルの作成
- mdファイルにFront Matterを書き込む
- 完了の旨ログを出す

## 完成品

*mken.sh* - make entryの略です
今回はGatsbyJSのプロジェクトフォルダの直下に置きました。

```sh
!#/bin/bash

#Parameter1: Category name
#Parameter2: Entry title

dir="./${1}/${2}/"
file="${dir}index.md"

cd ./content/blog/

#ディレクトリ作成
mkdir -p $dir
#ファイル作成・Front Matter書き込み
echo "---" > ${file}
echo "title: \"${2//_/ }\"" >> ${file}
echo "date: \"`date "+%Y-%m-%d %H:%M:%S"`\"" >> ${file}
echo "description: \"\"" >> ${file}
echo "category: \"${1}\"" >> ${file}
echo "tags: []" >> ${file}
echo "---" >> ${file}

#成功出力
echo "Create ${file}"
#ファイルを開く
code ${file}
```

自動でFront MatterのTitle, Date, Categoryを設定できるようにしました。
タイトルにスペースを入れたい場合はスペースを`_`と置き、Front Matter内でスペースに置き換えます。

## 実行ファイルにする

```sh
chmod +x ./mken.sh
```

## 実行

```sh
./mken.sh Blog シェルスクリプトで記事のマークダウンファイルを作成する
```

{プロジェクト}/content/blog/Blog/シェルスクリプトで記事のマークダウンファイルを作成する/index.md

```Text
---
title: "シェルスクリプトでの記事のマークダウンファイルを作成する"
date: "2020-06-01 19:54:54"
description: ""
category: "Blog"
tags: []
---
```

ちゃんとFront Matterが設定されたファイルができました。  
よーしらくちんになったぞ！