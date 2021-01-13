---
title: "[Git]リモートリポジトリの全ブランチをプルする"
date: "2021-01-13 18:09:54"
description: "git pullで最新の状態をフェッチした気でいてスイッチして変更を加えたら、あとで現在チェックアウトしているブランチはプルできてなかったことに気づいて嫌な気分になることがあるのでエイリアスを設定します。"
category: "Git"
tags: ["Git"]
published: true
---
## git pullは現在チェックアウトしているブランチしかフェッチしない
ワガハイは仕事でプロジェクトのgitをほとんど１人で操作している（作業者が１人）のですが、頻繁にブランチを切り替えて作業しているためあっちでプッシュしてこっちでプルしてみたいな場面が多くあります。  
その中で、ブランチ間をスイッチしながら作業しているとプルして最新のソースで作業していたつもりなのにし損ねていてて混乱することがあります。  
  
  
なので、もういっそ`git pull`を`git pull --all`にしてしまいましょう。  
  
## 使用するコマンド

### git pull --all
`git pull --all`はローカルでトラッキングしているブランチをすべてプルしてくれるそうです。  
  
### トラッキングしていないブランチもすべてプル
上記の通り、`git pull --all`はトラッキングしているブランチしかプルしてくれません。トラッキングしていないブランチもすべてプルしたい場合はこちらを実行するようです。

```sh
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git pull --all
```
※参考にしたStack Overflowの回答者さんは`git pull --all`の前に念の為`git fetch --all`も実行しているそうです。  
`git pull`には`git fetch`も含まれているはずなのでどういう場合の念の為なのかはよくわかりませんが。

## エイリアスを作成
今回は`git pull --all`だけでいいので、こちらを`git pull`に設定します。

### 設定ファイル
|影響範囲|設定ファイル|
|---|---|
|システム全体|/etc/gitconfig|
|ユーザー|~/.gitconfig|
|リポジトリ|リポジトリのルートディレクトリ/.git/config|

### 設定方法

```sh:/etc/gitconfig
[alias]
    pull = pull --all
```

ちなみに`/etc/gitconfig/`は
```sh
git config --global --edit
```
で編集可能。


## 参考
[How to fetch all Git branches - Stack Overflow](https://stackoverflow.com/questions/10312521/how-to-fetch-all-git-branches/21591209)
[【git】aliasの設定方法 - Qiita](https://qiita.com/chihiro/items/04813c707cc665de67c5)