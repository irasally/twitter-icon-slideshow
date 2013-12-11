twitter-icon-slideshow
======================

指定したidのtwitter-iconをスライドショーで表示するhtml

data/screenNames.json に指定したScreenNameのユーザーアイコンを自動スライドショーで表示します

js/app.js
```
$('.bxslider').bxSlider
```
この引数でスライドショーのオプションを変更できます。
詳細は
[bxslider](http://bxslider.com/) で確認できます。


アイコンの変更にあわせて背景画像を切替る処理は負荷がかかるので、ローカルに画像をキャッシュした方がよいです。
