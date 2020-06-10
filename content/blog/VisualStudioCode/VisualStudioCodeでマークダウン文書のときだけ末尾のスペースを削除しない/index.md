---
title: VisualStudioCodeでマークダウン文書のときだけ末尾のスペースを削除しない
date: "2020-05-31 17:11:23"
description: "VisualStudioCodeで普段は行末尾のスペースを保存時に自動で削除するように設定しているが、マークダウンでは行末尾のスペースで改行するため、マークダウンエディターでは自動削除をオフに設定する。"
category: "VisualStudioCode"
tags: ["VisualStudioCode", "Markdown"]
published: true
---

VisualStudioCodeで[末尾のスペースを自動で削除する]()ように設定していると、マークダウン文書を編集しているときに改行のための末尾のスペースが全て削除されてしまうため、  
マークダウンエディターでは上記設定を無効に設定します。

## 手順

- [Setting(JSON)を開く]()
- 以下の設定を追加

```
"[markdown]": {
    "files.trimTrailingWhitespace": false
}
```

これでマークダウンエディターのときは末尾のスペースが削除されなくなりました。