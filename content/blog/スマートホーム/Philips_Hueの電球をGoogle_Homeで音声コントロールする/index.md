---
title: "Philips Hueの電球をGoogle Homeで音声コントロールする"
date: "2020-06-06 20:08:17"
description: "Philips Hueのスマート電球を買ったらGoogle Homeとの連携にちょっと梃子摺ったので備忘録。"
category: "スマートホーム"
tags: ["Google Home", "Philips Hue"]
published: true
---

PC裏を照らしている電球が切れたので、Philips Hueというスマート電球を買ってみました。  
クリップ型のスタンドライトのスイッチをいちいち切るのが面倒でずっとつけっぱなしにしていたら白熱電球は一瞬で切れました。  
  
  <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=akumachan-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B01MSITPT1&linkId=c279bdb409bde4daf2ad23b4a581fadc&bc1=000000&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

スマートスピーカーにして声で操作できるようになったら便利かな、ということでGoogle nest miniと連携できそうなスマート電球を購入しました。

## やること

- Hueの初期設定
- Google Homeへの登録
- ルーティンの設定
  
Google Homeはすでに使用しているものとします。

## 周辺機器

Philips Hueの説明書は文字がないユニバーサル？なデザインになっているんですが、本商品に含まれていない関連商品もイラストでしか載っていないので、それがなんなのか、必要なものなのかわからずに苦労しました。  
まずは周辺機器の説明をしますが、今回使用するPhilips Hue本体とGoogle nest mini（もしくはそれに準ずるGoogleアシスタント）、スマートフォンのみで、周辺機器は必要ないのでカッコ付きの項目は読み飛ばして構いません。  

### （Hue Bridge）

Hue Bridgeは複数のHueを管理、音声でコントロールできるターミナルのような端末です。  
  
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=akumachan-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B01C6S7DDA&linkId=06e5f41b9b47d355499b12e34f9c0e7f&bc1=000000&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>
  
ですが、Bridgeを使わなくてもGoogleアシスタントで音声コントロールは可能です。

### （Dimmer スイッチ）
  
Dimmer スイッチは複数のHueと連携できるリモコンです。これも今回は使用しません。
  
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=akumachan-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B0769L5QG5&linkId=e817b5344676dd494e1cc4ae2f170fd8&bc1=000000&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

## Hueの初期設定

今回はHueをPhilips Hue Bluetoothというアプリ[Android](https://play.google.com/store/apps/details?id=com.signify.hue.blue&hl=ja) [iOS](https://apps.apple.com/jp/app/philips-hue-bluetooth/id1456604186)で初期設定します。  
なんやかんやユーザー登録などを済ませてください（適当）。  
Googleアシスタントと同じ部屋に登録してください。
  
### Google HomeでHueを確認

Google Homeアプリに移動してGoogleアシスタントと同じ部屋にHueが登録されているか確認してください。  

## ルーティンを設定

これで「<<登録した電球の名前>>つけて」で電気がつくと思ったんですが、「（無音）が見つかりません」と言われて電球をコントロールできませんでした。  
もしこれでコントロールできていれば以降は読む必要ありません。

試行錯誤した結果、「電気つけて」というワードでHueをオンにするルーティン（と逆にオフのルーティン）を作成することでコントロールできるようになりました。  
Google Homeで`ルーティン > ルーティンを管理 > ルーティンを追加`でコマンドに「電気つけて」アシスタントが行う動作に`よく利用する操作 > 照明やコンセントの操作 > 歯車アイコン`でHueの動作を「オンにする」にします。  
  
## ついた

「電気つけて」  
  
ね？ついたでしょ？（なに、付かない？すまない。）