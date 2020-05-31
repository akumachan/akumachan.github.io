---
title: VisualStudioCodeでTerminalからファイルを開く
date: "2020-05-31 18:10:59"
description: "VisualStudioCodeで、Terminalでファイルを作成してからExplorerでファイルを開くのが手間なときにコマンドで開く方法。"
category: "VisualStudioCode"
tags: ["VisualStudioCode"]
---

Explorerからいちいちクリックして開くのが面倒なのでTerminalから開けるようにしましょう。

## 手順

#### codeコマンドを使用できるようにする

- [コマンドパレットを開く]()
- Shell Commandと検索し"Shell Command: install 'code' command in PATH"を選択

#### codeコマンドでファイルを開く

```terminal
code ファイルパス
```

以上です。